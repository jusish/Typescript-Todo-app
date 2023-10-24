import React, { useState } from 'react';
import './App.css';
import AddTodo from './Components/AddTodo';
import EditTodo from './Components/EditTodo';
import FilterTodo from './Components/FilterTodo';
import TodoList from './Components/TodoList';
import type { RootState } from './Redux/Store';
import { UseSelector } from 'react-redux/es/hooks/useSelector';


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
