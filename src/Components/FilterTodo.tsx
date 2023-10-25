import React from "react";

type FilterTodoProps = {
  getTodoFilterValue: (filterValue: string) => void;
};

const FilterTodo = ({getTodoFilterValue}:FilterTodoProps) => {
  return <div>Filter Todo</div>;
};

export default FilterTodo;
