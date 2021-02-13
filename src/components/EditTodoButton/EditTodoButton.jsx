import React, { Component } from 'react';


class EditTodoButton extends Component {
    constructor(props){
        super(props)
        this.state = {text: '', inputText: '', mode:'view'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
      }
      
      handleChange(e) {
        this.setState({ inputText: e.target.value });
      }
      
      handleSave() {
        this.setState({text: '', mode: 'view'});
      }
    
      handleEdit() {
        this.setState({mode: 'edit'});
      }

      onClick = (e) => {
        this.handleSave();
        this.props.refreshContent();
        this.props.handleEditToDo(this.props.todo, this.state.inputText);
      }
      
      renderInputField() {
        let input;
        
        if(this.state.mode !== 'view') {
          input = 
            <p>
              <input
                onChange={this.handleChange}
                value={this.state.inputText} />
            </p>;
        }
          
          return input;
      }
      
      renderButton() {
        let button;
        
        if(this.state.mode === 'view') {
          button =
              <button onClick={this.handleEdit}>
               <span role="img" aria-label="edit">✏️</span>
              </button>;
        } else {
          button =
              <button onClick={
                this.onClick}>
                Save
              </button>;
        }
        
        return button;
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