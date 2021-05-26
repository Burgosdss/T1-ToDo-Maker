import React, { useState } from "react";

export default function EditTodoButton(props) {
  const [state, setState] = useState({
    text: "",
    mode: "view"
  });

  const [inputText, setInputTex] = useState("");

  function handleChange(event) {
    setInputTex(event.target.value);
  }

  function handleSave() {
    setState({ text: "", mode: "view" });
  }

  function handleEdit() {
    props.handleEditToDo(props.idx, inputText);
    const editMode = { mode: "edit" };
    setState(editMode);
  }

  function renderInputField() {
    const modeOn = state.mode !== "view";
    return modeOn ? (
      <p>
        <input onChange={(event) => handleChange(event)} value={inputText} />
      </p>
    ) : (
      <></>
    );
  }

  function onClick() {
    handleSave();
    props.handleEditToDo(props.idx, inputText);
    props.refreshContent();
  }

  function renderButton() {
    const modeOn = state.mode === "view";
    return modeOn ? (
      <button onClick={() => handleEdit()}>
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

