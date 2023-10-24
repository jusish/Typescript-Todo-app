import { createSlice } from "@reduxjs/toolkit";
import { TodoInterface } from "../App";

interface TodoListInterface {
  todos: TodoInterface[];
}

const initialState: TodoListInterface = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, { payload: { task, id, completed } }) => {
      state.todos.push({ task, id, completed });
    },
    deleteTodo: (state, { payload: { todoId } }) => {
      state.todos.filter((todo) => todo.id !== todoId);
    },
    editTodo: (state, { payload: { editedTodo } }) => {
      console.log(editedTodo);
      state.todos = state.todos.map((todo) =>
        todo.id === editedTodo.id ? editedTodo : todo
      );
    },
    toggledTodo: (state, { payload: { todoId } }) => {
      state.todos = state.todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      );
    },
  },
});

export const { addTodo, deleteTodo, editTodo, toggledTodo } = todoSlice.actions;
export default todoSlice.reducer;
