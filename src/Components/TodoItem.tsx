import React from "react";
import { TodoInterface } from "../App";
import { useDispatch } from "react-redux";
import { deleteTodo, toggledTodo } from "../Redux/todo";
import { MdModeEditOutline } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";

type TodoItemProps = {
  todo: TodoInterface;
  editTodo: TodoInterface | null;
  getEditTodo: (editTodo: TodoInterface) => void;
  setEditTodo: (editTodo: TodoInterface) => void;
};

const TodoItem = ({
  todo,
  editTodo,
  getEditTodo,
  setEditTodo,
}: TodoItemProps) => {
  const dispatch = useDispatch();

  const handleToggleTodoChange = () => {
    dispatch(toggledTodo({ todoId: todo.id }));
  };

  const handleDeleteTodoClick = () => {
    dispatch(deleteTodo({ todoId: todo.id }));

    if (todo.id === editTodo?.id) {
      setEditTodo({ id: "", task: "", completed: false });
    }
  };

  const handleGetEditTodoClick = () => getEditTodo(todo);

  return (
    <li className="todo-list_item">
      <label
        htmlFor={todo.id}
        style={
          todo.completed
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
        className="todo-list_label"
      >
        <input
          type="checkbox"
          id={todo.id}
          className="todo-list_checkbox"
          checked={todo.completed ? true : false}
          onChange={handleToggleTodoChange}
        />
        {todo.task}
      </label>
      <div className="todo-list_btns-box">  
        <button
          onClick={handleGetEditTodoClick}
          className="todo-list_btn todo-list_edit-btn"
        >
          <MdModeEditOutline />
        </button>
        <button
          onClick={handleDeleteTodoClick}
          className="todo-list_btn todo-list_delete-btn"
        >
          <FaTrashAlt />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
