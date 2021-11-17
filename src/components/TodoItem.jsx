import React from "react";
import "./TodoItem.css";

const TodoItem = ({ text, completed }) => {
  const onComplete = () => {
    console.log('clic');
  };
  const onDelete = () => {
    console.log('clic de');
  };
  return (
    <li className="list-item">
      <i
        className={`check ${completed ? "check--completed" : ""} far fa-check-square`}
        onClick={onComplete}
      ></i>
      <p>{text}</p>
      <i className="delete far fa-times-circle"
         onClick={onDelete}
      ></i>
    </li>
  );
};

export default TodoItem;
