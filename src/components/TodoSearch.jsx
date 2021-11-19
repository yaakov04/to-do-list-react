import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";

const TodoSearch = () => {

  const {searchValue, setSearchValue} = useContext(TodoContext);
  const onValueChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="input-search">
      <form>
        <input type="text" 
        placeholder="Cebolla" 
        value={searchValue}
        onChange={onValueChange} />
        <button type="button">
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
};

export default TodoSearch;
