import React, { Component } from "react";
import uuid from "uuid/v4";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { id: uuid(), task: "Wash the plates", done: false },
        { id: uuid(), task: "Learn react", done: false }
      ]
    };

    this.addNewTodo = this.addNewTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }
  addNewTodo(newTask) {
    let newTodo = { ...newTask, done: false, id: uuid() };
    const todos = [...this.state.todos, newTodo];
    this.setState({ todos: todos });
  }
  deleteTodo(id) {
    this.setState(curTodo => ({
      todos: curTodo.todos.filter(todo => todo.id !== id)
    }));
  }
  render() {
    return (
      <div>
        {this.state.todos.map(todo => (
          <Todo
            key={todo.id}
            id={todo.id}
            task={todo.task}
            done={todo.done}
            deleteTodo={this.deleteTodo}
          />
        ))}
        <br />
        <NewTodoForm addNewTodo={this.addNewTodo} />
      </div>
    );
  }
}

export default TodoList;
