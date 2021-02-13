import React, { Component } from 'react';
import NewToDoForm from '../../components/NewToDoForm/NewToDoForm';
import './NewToDoPage.css';

class NewToDoPage extends Component {

    render() {
        return (
            <div className="NewToDoPage" style={{  }}>
                <br />
                <NewToDoForm
                    {...this.props}
                    todos={this.props.todos}
                    handleUpdateToDos={this.props.handleUpdateToDos}
                    handleChangeToDo={this.props.handleChangeToDo}
                    updateToDo={this.updateToDo}
                    user={this.props.user}
                />
            </div >
        );
    }
}

export default NewToDoPage;
