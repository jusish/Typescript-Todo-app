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
    <div>
      Todo item
    </div>
  )
}

export default TodoItem
