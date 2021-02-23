import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './UserSummary.css';
import todoService from '../../utils/todoService';
import EditTodoButton from '../EditTodoButton/EditTodoButton';

const initialState = {
  todo: {
    done: false
  }
}

class UserSummary extends Component {

  constructor(props) {
    super(props);
    this.state = initialState
  };

  async componentDidMount() {
    this.refreshContent();
  }

  refreshContent = async () => {
    const todos = await todoService.index(this.props.user);
    this.props.handleUpdateTodos(todos);
  }

  handleDeleteToDo = async (todo) => {
    await todoService.deleteToDo(todo);
    this.refreshContent();
  }

  handleEditToDo = async (todo, updatedToDo) => {
    await todoService.editToDo(todo, updatedToDo);
    this.refreshContent();
  }

  handleUpdateToDo = async (todo) => {
    let update = todo;
    if (update.done) {
      update.done = false
    } else {
      update.done = true
    }
    await todoService.doneToDo(todo);
    const todos = await todoService.index(this.props.user);
    this.props.handleUpdateTodos(todos);
  }
  
  TodoRows = () => {
    const { todos } = this.props;
    const todoRows = todos.map((todo, index) => (
      <ul key={index}>
        <li className="ToDoList">
          <input type="checkbox" defaultValue={this.state.done} name="done" checked={todo.done} onChange={() => this.handleUpdateToDo(todo)} />&nbsp;&nbsp;Done&nbsp;&nbsp;
          <button onClick={() => this.handleDeleteToDo(todo)}><span role="img" aria-label="delete">🚯</span></button> &nbsp;&nbsp;
          <EditTodoButton
            {...this.props}
            refreshContent={this.refreshContent}
            handleEditToDo={this.handleEditToDo}
            todo={todo} 
          />&nbsp;&nbsp;
          <span className="badge">{index + 1}</span>&nbsp;&nbsp;&nbsp;&nbsp;
          {todo.text}&nbsp;&nbsp;
          {todo.done}&nbsp;&nbsp;
        </li>
      </ul>
    ));
    return todoRows;
  }
  
  render() {
    return (
      <div className='usersummary'>
        <br />
        <div className='user-cards' style={{ justifyContent: "center", }}>
          <div id='ToDoList'>
            <h3 className='header-footer'>To Do List</h3>
            <Link to="/newtodo">Add New To Do</Link>
            <br />
            {
              this.props.todos.length ? this.TodoRows() : ( <h5 className='text-info'>No To Do List Items Yet</h5> )
            }
          </div>
          <br />
        </div>
        <br />
        <br />
      </div>
    );
  }
};

export default UserSummary;   