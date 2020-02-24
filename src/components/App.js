import React from "react";
import TodoList from "./TodoList";
import Header from "./Header";
import "../App.css";

function App() {
  return (
    <div className=''>
      <div className='container'>
        <Header />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
