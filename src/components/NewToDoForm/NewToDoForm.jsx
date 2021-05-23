import React, { useState } from "react";
import { Link } from "react-router-dom";
import todoService from "../../utils/todoService";

function ToDoForm(props) {
  const [state, setState] = useState({
    text: ""
  });

  function isFormInvalid() {
    return !state.text;
  }

  function handleChange(event) {
    setState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));
  }

  async function handleAddToDo(event) {
    event.preventDefault();
    try {
      await todoService.create(state, props.user);
      props.history.push("/user");
    } catch (error) {}
  }

  return (
    <div className="NewToDo-Form">
      <header className="todo-header">
        <h3 className="header-footer">New To Do List Item</h3>
        <br />
      </header>
      <form className="form-horizontal" onSubmit={handleAddToDo}>
        <div className="form-group Todo">
          <div className="col-sm-12">
            <input
              className="form-control-todo"
              name="text"
              placeholder="New To Do List Item"
              value={state.text}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-12 text-center">
            <button className="btn btn-default" disabled={isFormInvalid()}>
              Save
            </button>
            &nbsp;&nbsp;&nbsp;
            <Link className="todoLink" to="/user">
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToDoForm;
