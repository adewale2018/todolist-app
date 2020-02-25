import React from "react";
import TodoList from "./TodoList";
import Header from "./Header";

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Header />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
