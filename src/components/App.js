import React from "react";
import TodoList from "./TodoList";
import Header from "./Header";
import "../App.css";

function App() {
  return (
    <div className=''>
      <Header />
      <div className='container'>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
