import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './UserSummary.css';
import todoService from '../../utils/todoService';
import EditTodoButton from '../EditTodoButton/EditTodoButton';

function UserSummary(props) {
  const [state, setState] = useState ({
    todo: {
      done: false
    }
  });

  useEffect(() => {
    refreshContent();
  });

  async function refreshContent() {
    const todos = await todoService.index(props.user);
    props.handleUpdateTodos(todos);
  }

  async function handleDeleteToDo(todo){
    await todoService.deleteToDo(todo);
    refreshContent();
  }

  async function handleEditToDo(todo, updatedToDo){
    await todoService.editToDo(todo, updatedToDo);
    refreshContent();
  }

  async function handleUpdateToDo(todo) {
    let update = todo;
    if (update.done) {
      update.done = false
    } else {
      update.done = true
    }
    await todoService.doneToDo(todo);
    const todos = await todoService.index(props.user);
    props.handleUpdateTodos(todos);
  }
  
  function TodoRows() {
    const { todos } = props;
    const todoRows = todos.map((todo, index) => (
      <ul key={index}>
        <li className="ToDoList">
          <input type="checkbox" defaultValue={state.done} name="done" checked={todo.done} onChange={() => handleUpdateToDo(todo)} />&nbsp;&nbsp;Done&nbsp;&nbsp;
          <button onClick={() => handleDeleteToDo(todo)}><span role="img" aria-label="delete">🚯</span></button> &nbsp;&nbsp;
          <EditTodoButton
            {...props}
            refreshContent={refreshContent}
            handleEditToDo={handleEditToDo}
            todo={state.todo} 
          />&nbsp;&nbsp;
          <span className="badge">{index + 1}</span>&nbsp;&nbsp;&nbsp;&nbsp;
          {todo.text}&nbsp;&nbsp;
          {todo.done}&nbsp;&nbsp;
        </li>
      </ul>
    ));
    return todoRows;
  }
  
    return (
      <div className='usersummary'>
        <br />
        <div className='user-cards' style={{ justifyContent: "center", }}>
          <div id='ToDoList'>
            <h3 className='header-footer'>To Do List</h3>
            <Link to="/newtodo">Add New To Do</Link>
            <br />
            {
              props.todos.length ? TodoRows() : ( <h5 className='text-info'>No To Do List Items Yet</h5> )
            }
          </div>
          <br />
        </div>
        <br />
        <br />
      </div>
    );
}

export default UserSummary;   