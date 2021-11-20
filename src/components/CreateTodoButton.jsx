import React from "react";
import "./CreateTodoButton.css";

const CreateTodoButton = ({setOpenModal}) => {
  const onButton = () => {
    setOpenModal(prevState => !prevState);
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
