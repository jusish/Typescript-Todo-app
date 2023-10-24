import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodo from './Components/AddTodo';
import EditTodo from './Components/EditTodo';
import FilterTodo from './Components/FilterTodo';
import TodoItem from './Components/TodoItem';
import TodoList from './Components/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
