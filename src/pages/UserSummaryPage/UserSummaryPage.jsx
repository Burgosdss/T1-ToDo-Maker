import React, { Component } from "react";
import UserSummary from "../../components/UserSummary/UserSummary";

class UserSummaryPage extends Component {
  render() {
    return (
      <div className="UserSummaryPage">
        <UserSummary
          {...this.props}
          user={this.props.user}
          todos={this.props.todos}
          handleUpdateTodos={this.props.handleUpdateTodos}
        />
      </div>
    );
  }
}

export default UserSummaryPage;
