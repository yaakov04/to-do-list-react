import React from "react";
import "./TodoItem.css";

const TodoItem = ({ text }) => {
  return (
    <li className="list-item">
      <i class="check far fa-check-square"></i>
      <p>{text}</p>
      <i class="delete far fa-times-circle"></i>
    </li>
  );
};

export default TodoItem;
