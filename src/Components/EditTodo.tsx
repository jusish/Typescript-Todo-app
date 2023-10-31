import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { editTodo as updateTodo } from "../Redux/todo";
import { TodoInterface } from "../App";

type EditTodoProps = {
  editTodo: TodoInterface;
};

const EditTodo = ({ editTodo }: EditTodoProps) => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const [error, setError] = useState("");

// effect hook is going to set new task on each time user click todo edit button
  useEffect(() => {
    setTask(editTodo.task);
  }, [editTodo]);

// This event handler dispatches action to update edited todo and resets editTodo state so that form switches from edit todo to add todo 
  const handleEditTaskSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (task.trim().length < 5) {
      setError("Minimum allowed task length is 5");
    } else if (task.trim().length > 50) {
      setError("Maximum allowed task length is 50");
    } else {
      dispatch(updateTodo({ editedTodo: { ...editTodo, task } }));
      setEditTodo({ id: "", task: "", completed: false });
      setTask("");
    }
  };

// this event handler removes error if character length greater than 5 and less than 50
  const handleUpdateTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
    if (task.trim().length > 5 && task.trim().length < 50) {
      setError("");
    }
  };

  console.log(editTodo);
  return (
    <form onSubmit={handleEditTaskSubmit} className="form">
      <div className="form__control">
        <input
          onChange={handleUpdateTodoChange}
          value={task}
          type="text"
          className="form__input"
          placeholder="Edit todo..."
        />
        {error && <p className="form__error-text">{error}</p>}
      </div>
      <button className="btn form__btn">Edit Todo</button>
    </form>
  );
};

export default EditTodo;