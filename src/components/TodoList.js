import React, { Component } from "react";
import uuid from "uuid/v4";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import './TodoList.css';

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
    this.updateTodo = this.updateTodo.bind(this);
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
  updateTodo(id, newTask) {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: newTask };
      } else {
        return todo;
      }
    });
    this.setState({ todos: updatedTodos });
  }
  render() {
    return (
      <div className="TodoList">
        {this.state.todos.map(todo => (
          <Todo
            key={todo.id}
            id={todo.id}
            task={todo.task}
            done={todo.done}
            deleteTodo={this.deleteTodo}
            updateTodo={this.updateTodo}
          />
        ))}
        <br />
        <NewTodoForm addNewTodo={this.addNewTodo} />
      </div>
    );
  }
}

export default TodoList;
