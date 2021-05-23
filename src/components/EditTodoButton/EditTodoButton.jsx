import React, { useState } from "react";

function EditTodoButton(props) {
  const [state, setState] = useState({
    text: "",
    inputText: "",
    mode: "view"
  });

  function handleChange(event) {
    setState((prevState) => ({
      ...prevState,
      inputText: event.target.value
    }));
  }

  function handleSave() {
    setState(state);
  }

  function handleEdit() {
    const editMode = { mode: "edit" };
    setState(editMode);
  }

  function renderInputField() {
    const modeOn = state.mode !== "view";
    return modeOn ? (
      <p>
        <input onChange={handleChange} value={state.inputText} />
      </p>
    ) : (
      <></>
    );
  }

  function onClick() {
    handleSave();
    props.refreshContent();
    props.handleEditToDo(props.todo, state.inputText);
  }

  function renderButton() {
    const modeOn = state.mode === "view";
    return modeOn ? (
      <button onClick={handleEdit}>
        <span role="img" aria-label="edit">
          ✏️
        </span>
      </button>
    ) : (
      <button onClick={onClick}>Save</button>
    );
  }

  return (
    <div>
      <p>{state.text}</p>
      {renderInputField(props.todo)}
      {renderButton()}
    </div>
  );
}

export default EditTodoButton;
