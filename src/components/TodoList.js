import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { id: 1, task: "Wash the plates", done: false },
        { id: 2, task: "Learn react", done: false }
      ]
    };
  }
  render() {
    return (
      <div>
        {this.state.todos.map(todo => (
          <Todo key={todo.id} id={todo.id} task={todo.task} done={todo.done} />
        ))}
      </div>
    );
  }
}

export default TodoList;
