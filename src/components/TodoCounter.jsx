import React from "react";
import "./TodoCounter.css";

const TodoCounter = ({total, completed}) => {
  return (
      <div className="header-container">
          <h2 className="header">Has completado {completed} de {total} TODOs</h2>
      </div>
  );
};

export default TodoCounter;
