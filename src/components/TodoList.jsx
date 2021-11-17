import React from "react";
import "./TodoList.css";

const TodoList = ({children, isFill}) => {
  let msg = isFill()?'': '-- No hay items --';
  
  return (
    <div className="list" >
      <ul>{children}</ul>
      <p>{msg}</p>
    </div>
  );
};

export default TodoList;
