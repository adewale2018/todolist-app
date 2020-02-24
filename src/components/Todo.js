import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete(id) {
    this.props.deleteTodo(this.props.id);
  }
  render() {
    return (
      <div className='row'>
        <span className='flow-text col s6'>{this.props.task}</span>
        <div className='col s6'>
          <button className='waves-effect waves-light btn'>
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

export default Todo;
