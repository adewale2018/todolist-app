import React from "react";
import TodoList from "./TodoList";
import Header from "./Header";
import Developer from './Developer';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Header />
        <TodoList />
        <Developer />
      </div>
    </div>
  );
}

export default App;
