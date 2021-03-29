import React, { Component } from 'react';

const initialState = {
  text: '', 
  inputText: '', 
  mode:'view'
}

class EditTodoButton extends Component {
    constructor(props){
        super(props)
        this.state = initialState
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
      }
      
      handleChange(event) {
        const { value } = event.target
        this.setState({ inputText: value });
      }
      
      handleSave() {
        this.setState(initialState);
      }
    
      handleEdit() {
        const editMode = { mode: 'edit' }
        this.setState(editMode);
      }
      
      renderInputField() {
        const modeOn = this.state.mode !== 'view'
        return  modeOn ? (
          <p>
            <input
            onChange={this.handleChange}
            value={this.state.inputText} />
          </p>
        ) : <></>
      }
      
      renderButton() {
        const modeOn = this.state.mode === 'view'
        return modeOn ? (
          <button onClick={this.handleEdit}>
            <span role="img" aria-label="edit">✏️</span>
          </button>
        ) : ( 
          <button onClick={this.onClick}>
            Save
          </button> 
        )
      }
      
      onClick = () => {
        this.handleSave();
        this.props.refreshContent();
        this.props.handleEditToDo(this.props.todo, this.state.inputText);
      }
      
      render () {
        return (
          <div>
            <p>{this.state.text}</p>
            {this.renderInputField(this.props.todo)}
            {this.renderButton()}
          </div>
        );
      }
  }




export default EditTodoButton;