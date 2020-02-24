import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { isEditing: false, task: this.props.task };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleEditing = this.toggleEditing.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleDelete(id) {
    this.props.deleteTodo(this.props.id);
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  toggleEditing() {
    this.setState({ isEditing: !this.state.isEditing });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task);
    this.setState({ isEditing: !this.state.isEditing });
  }
  render() {
    if (this.state.isEditing) {
      return (
        <div className='row'>
          <h6
            style={{
              borderRight: "3px solid lightgrey",
              borderTop: "1px solid lightgrey",
              borderLeft: "3px solid lightgrey",
              borderBottom: "1px solid lightgrey",
              padding: "10px",
              color: "#26a69a",
              width: "50%"
            }}
          >
            Edit Task
          </h6>
          <form className='col s12' onSubmit={this.handleSubmit}>
            <div className='row'>
              <div className='input-field col s6'>
                <input
                  id='task'
                  type='text'
                  className='validate'
                  name='task'
                  value={this.state.task}
                  onChange={this.handleChange}
                  required
                />
                <label htmlFor='task'>Editing Task...</label>
              </div>
              <div className='input-field col s6'>
                <button
                  className='btn waves-effect waves-light'
                  type='submit'
                  name='action'
                >
                  Save
                  <i className='material-icons right'>send</i>
                </button>
              </div>
            </div>
          </form>
        </div>
      );
    } else {
      return (
        <div className='row'>
          <span className='flow-text col s6'>{this.props.task}</span>
          <div className='col s6'>
            <button
              className='waves-effect waves-light btn'
              onClick={this.toggleEditing}
            >
              <i className='large material-icons'>edit</i>
            </button>
            <button
              className='waves-effect waves-light btn deep-orange lighten-1'
              style={{ marginLeft: "5px" }}
              onClick={this.handleDelete}
            >
              <i className='large material-icons'>delete</i>
            </button>
          </div>
          <div className='divider' />
        </div>
      );
    }
  }
}

export default Todo;
