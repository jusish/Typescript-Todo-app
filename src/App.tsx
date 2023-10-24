import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodo from './Components/AddTodo';
import EditTodo from './Components/EditTodo';
import FilterTodo from './Components/FilterTodo';
import TodoItem from './Components/TodoItem';
import TodoList from './Components/TodoList';

export interface TodoInterface {
  id: string;
  task: string;
  completed: boolean;
}

function App() {
  const [ editTodo, setEditTodo] = useState<TodoInterface | null>(null)
  return (
    <main className='app'>
      <div className='app_wrapper'>
        <div className='app_header'>
          <h1 className='app_title'>
            Todo App
          </h1>
        </div>
        <div className='app_inputs-box'>
          {editTodo?.id ? <EditTodo /> : <AddTodo />}
          <FilterTodo />
        </div>
        <TodoList />
      </div>
    </main>
  );
}

export default App;
