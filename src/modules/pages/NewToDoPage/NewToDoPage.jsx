import React from "react";
import NewToDoForm from "modules/components/NewToDoForm/NewToDoForm";

import "./NewToDoPage.css";

export default function NewToDoPage(props) {
  return (
    <div className="NewToDoPage" style={{}}>
      <br />
      <NewToDoForm
        {...props}
        todos={props.todos}
        handleUpdateToDos={props.handleUpdateToDos}
        handleChangeToDo={props.handleChangeToDo}
        updateToDo={props.updateToDo}
        user={props.user}
      />
    </div>
  );
}
