import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from '../Redux/todo';

const AddTodo = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  const [error, setError] = useState("");

/** 
this function prevents default behaviour page refresh on form submit and sets error to state if length of characters either less than 5 or greater than 50. 
Else if there'r no errors than it dispatches action to the reducer to add new task with unique id. And sets input to empty ""
*/
  const handleAddTaskSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (task.trim().length < 5) {
      setError("Minimum allowed task length is 5");
    } else if (task.trim().length > 50) {
      setError("Maximum allowed task length is 50");
    } else {
      dispatch(addTodo({ task, id: uuidv4(), completed: false }));
      setTask("");
    }
  };

/**
 this function removes error from the state if character length is greater than 5 and less than 50
*/
  const handleUpdateTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
    if (task.trim().length > 5 && task.trim().length < 50) {
      setError("");
    }
  };

  return (
    <form onSubmit={handleAddTaskSubmit} className="form">
      <div className="form__control">
        <input
          onChange={handleUpdateTodoChange}
          value={task}
          type="text"
          className="form__input"
          placeholder="Add todo..."
        />
        {error && <p className="form__error-text">{error}</p>}
      </div>
      <button className="btn form__btn">Add Todo</button>
    </form>
  );
};

export default AddTodo;