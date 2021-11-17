import React from "react";
import "./CreateTodoButton.css";

const CreateTodoButton = () => {
  const onButton = () => {
    console.log('clic');
  };
  return (
    <div className="nav-footer">
      <button
      onClick={onButton}
      ><i className="fas fa-plus"></i></button>
    </div>
  );
};

export default CreateTodoButton;
