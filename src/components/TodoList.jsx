import React from "react";
import "./TodoList.css";

const TodoList = ({children, isFill}) => {
  
  
  return (
    <div className="list" >
      <ul>{children}</ul>
    </div>
  );
};

export default TodoList;
