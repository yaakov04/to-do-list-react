import React, { useContext } from "react";
import {TodoContext} from "../TodoContext"
import "./TodoCounter.css";

const TodoCounter = () => {
  const {totalTodos:total, completedTodos:completed} = useContext(TodoContext);
  return (
      <div className="header-container">
          <h2 className="header">Has completado {completed} de {total} TODOs</h2>
      </div>
  );
};

export default TodoCounter;
