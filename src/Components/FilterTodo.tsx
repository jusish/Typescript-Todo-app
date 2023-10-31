import React, { useState } from "react";

type FilterTodoProps = {
  getTodoFilterValue: (filterValue: string) => void;
};

const FilterTodo = ({getTodoFilterValue}:FilterTodoProps) => {
  const [ filterTodoValue, setFilterTodoValue] = useState("all");

  const handleFilterTodoChanges = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterTodoValue(e.target.value);
    getTodoFilterValue(e.target.value);
  };
  return (
    <select value={filterTodoValue} onChange={handleFilterTodoChanges} className="filter-todo">
      <option value="all">All</option>
      <option value="completed">Completed</option>
    </select>
  )
};

export default FilterTodo;
