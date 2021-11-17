import React from "react";
import "./TodoSearch.css";

const TodoSearch = () => {
  return (
    <div className="input-search">
      <form action="" method="get">
        <input type="text" placeholder="Cebolla" />
        <button>
          <i class="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
};

export default TodoSearch;
