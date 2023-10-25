import React from 'react'
import { TodoInterface } from '../App'

type TodoItemProps = {
  todo: TodoInterface;
  editTodo: TodoInterface | null;
  getEditTodo: (editTodo: TodoInterface) => void;
  setEditTodo: (editTodo: TodoInterface) =>void;
}

const TodoItem = ({
  todo,
  editTodo,
  getEditTodo,
  setEditTodo,

} : TodoItemProps) => {
  return (
    <li>
      Todo item
    </li>
  )
}

export default TodoItem
