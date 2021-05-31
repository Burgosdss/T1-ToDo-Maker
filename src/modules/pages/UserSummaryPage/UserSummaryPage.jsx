import React from "react";
import UserSummary from "modules/components/UserSummary/UserSummary";

export default function UserSummaryPage(props) {
  return (
    <div className="UserSummaryPage">
      <UserSummary
        {...props}
        user={props.user}
        todos={props.todos}
        handleUpdateTodos={props.handleUpdateTodos}
        handleChangeToDo={props.handleChangeToDo}
        updateToDo={props.updateToDo}
      />
    </div>
  );
}
