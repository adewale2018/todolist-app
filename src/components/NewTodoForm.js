import React, { Component } from "react";

export default class NewTodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = { task: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addNewTodo(this.state);
    this.setState({ task: "" });
  }
  render() {
    return (
      <div className='row'>
        <h6 style={{ border: "1px solid lightgrey", textAlign: "center", padding: '10px', color: "#26a69a" }}>New Todo Form</h6>
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
              />
              <label htmlFor='task'>New Task</label>
            </div>
            <div className='input-field col s6'>
              <button
                className='btn waves-effect waves-light'
                type='submit'
                name='action'
              >
                Submit
                <i className='material-icons right'>send</i>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
