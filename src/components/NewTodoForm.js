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
    if (this.state.task.trim() !== ""){

      this.props.addNewTodo(this.state);
      this.setState({ task: "" });
    }
  }
  render() {
    return (
      <div className='row' style={{marginTop: '6rem'}}>
        <h6 style={{ borderRight: "3px solid lightgrey", borderTop: "1px solid lightgrey",borderLeft: "3px solid lightgrey", borderBottom: "1px solid lightgrey", padding: '10px', color: "#26a69a", width: '50%' }}>New Todo Form</h6>
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
