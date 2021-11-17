import React from "react";
import "./TodoSearch.css";

const TodoSearch = ({searchValue, setSearchValue}) => {

  const onValueChange = (e) => {
    //console.log(e.target.value);
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
