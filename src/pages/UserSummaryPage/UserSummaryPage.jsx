import React from "react";
import UserSummary from "../../components/UserSummary/UserSummary";

function UserSummaryPage(props) {
  return (
    <div className="UserSummaryPage">
      <UserSummary
        {...props}
        user={props.user}
        todos={props.todos}
        handleUpdateTodos={props.handleUpdateTodos}
      />
    </div>
  );
}

export default UserSummaryPage;
