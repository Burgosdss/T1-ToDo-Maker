import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import todoService from '../../utils/todoService';


class ToDoForm extends Component {
    state = {
        text: '',

    };

    isFormInvalid() {
        return !(this.state.text);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleAddToDo = async (e) => {
        e.preventDefault();
        try {
            await todoService.create(this.state, this.props.user);
            this.props.history.push('/user');
        } catch (err) {
            console.log(err);
        }
    };

    render() {
        return (
            <div className="NewToDo-Form">
                <header className='todo-header'><h3 className="header-footer">New To Do List Item</h3>
                <br />
                </header>
                <form className="form-horizontal" onSubmit={this.handleAddToDo} >
                    <div className="form-group  Todo">
                        <div className="col-sm-12">
                            <input className="form-control-todo" name="text" placeholder="New To Do List Item" value={this.state.text} onChange={this.handleChange}
                                required />

                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12 text-center">
                            <button className="btn btn-default" disabled={this.isFormInvalid()}>Save</button>&nbsp;&nbsp;&nbsp;
                            <Link className="todoLink" to='/user'>Cancel</Link>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default ToDoForm;