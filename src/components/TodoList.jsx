import React from "react";
import "./TodoList.css";

const TodoList = (props) => {
  return (
    <div className="list">
      <ul>{props.children}</ul>
    </div>
  );
};

export default TodoList;
