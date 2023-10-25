import React, { useState } from "react";
import "./App.css";
import AddTodo from "./Components/AddTodo";
import EditTodo from "./Components/EditTodo";
import FilterTodo from "./Components/FilterTodo";
import TodoList from "./Components/TodoList";
import type { RootState } from "./Redux/Store";
import { useSelector } from "react-redux";

export interface TodoInterface {
  id: string;
  task: string;
  completed: boolean;
}

function App() {
  const [editTodo, setEditTodo] = useState<TodoInterface | null>(null);
  const todos = useSelector((state: RootState) => state.todos.todos);
  const [todoFilterValue, setTodoFilterValue] = useState("all");

  const getTodoFilterValue = (filterValue: string) => {
    setTodoFilterValue(filterValue);
  };
  const getEditTodo = (editTodo: TodoInterface) => {
    setEditTodo(editTodo);
  };
  return (
    <main className="app">
      <div className="app_wrapper">
        <div className="app_header">
          <h1 className="app_title">Todo App</h1>
        </div>
        <div className="app_inputs-box">
          {editTodo?.id ? (
            <EditTodo editTodo={editTodo} setEditTodo={setEditTodo} />
          ) : (
            <AddTodo />
          )}
          <FilterTodo getTodoFilterValue={getTodoFilterValue} />
        </div>
        <TodoList
          todos={todos}
          todoFilterValue={todoFilterValue}
          getEditTodo={getEditTodo}
          setEditTodo={setEditTodo}
          editTodo={editTodo}
        />
      </div>
    </main>
  );
}

export default App;
