import React, { useState, useEffect } from "react";
import todoService from "modules/utils/todoService";
import EditTodoButton from "modules/components/EditTodoButton/EditTodoButton";

import "./UserSummary.css";

export default function UserSummary(props) {
  const [state, setState] = useState({
    todo: {
      done: false
    },
    text: ""
  });

  useEffect(() => {
    refreshContent();
  }, []);

  // function isFormInvalid() {
  //   return !state.text;
  // }

  function handleChange(event) {
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  }

  async function refreshContent() {
    const todos = await todoService.index(props.user);
    props.handleUpdateTodos(todos);
  }

  async function handleAddToDo(event) {
    event.preventDefault();
    try {
      await todoService.create(state, props.user);
      props.history.push("/user");
      refreshContent();
    } catch (error) {}
  }

  async function handleDeleteToDo(todo) {
    await todoService.deleteToDo(todo);
    refreshContent();
  }

  async function handleEditToDo(todo, updatedToDo) {
    await todoService.editToDo(todo, updatedToDo);
    refreshContent();
  }

  async function handleUpdateToDo(todo) {
    let update = todo;
    if (update.done) {
      update.done = false;
    } else {
      update.done = true;
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
          <input
            type="checkbox"
            defaultValue={setState.done}
            name="done"
            checked={state.done}
            onChange={() => handleUpdateToDo(todo)}
          />
          &nbsp;&nbsp;Done&nbsp;&nbsp;
          <button onClick={() => handleDeleteToDo(todo)}>
            <span role="img" aria-label="delete">
              🚯
            </span>
          </button>{" "}
          &nbsp;&nbsp;
          <EditTodoButton
            {...props}
            refreshContent={refreshContent}
            handleUpdateToDo={handleUpdateToDo}
            handleEditToDo={handleEditToDo}
            idx={todo._id}
            todo={state.todo}
          />
          &nbsp;&nbsp;
          <span className="badge">{index + 1}</span>&nbsp;&nbsp;&nbsp;&nbsp;
          {todo.text}&nbsp;&nbsp;
          {todo.done}&nbsp;&nbsp;
        </li>
      </ul>
    ));
    return todoRows;
  }

  return (
    <div className="usersummary">
      <br />
      <br />
      <br />
      <form className="form-horizontal" onSubmit={handleAddToDo}>
        <div className="form-group Todo">
          <div className="col-sm-12">
            <input
              className="form-control-todo"
              name="text"
              placeholder="What needs to be done?"
              value={state.text}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </form>
      <div className="user-cards" style={{ justifyContent: "center" }}>
        <div id="ToDoList">
          <br />
          {props.todos.length ? (
            TodoRows()
          ) : (
            <h5 className="text-info">No To Do List Items Yet</h5>
          )}
        </div>
        <br />
      </div>
      <br />
      <br />
    </div>
  );
}
