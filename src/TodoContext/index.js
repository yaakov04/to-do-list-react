import React, { createContext, useState } from "react";
import useLocalStorge from "./useLocalStorage";

const TodoContext = createContext();

const TodoProvider = props => {
    //
    const {item:todos, saveItems:saveTodos, loading, error} = useLocalStorge('TODOS_V1', []);

    const [searchValue, setSearchValue] = useState('');
    
  
    const completedTodos = todos.filter(todo => todo.completed===true).length;
    const totalTodos = todos.length;
  
    let searchedTodos = [];
  
    if (!searchValue.length >= 1) {
      searchedTodos = todos;
    }else{
      searchedTodos = todos.filter(todo=>{
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
      });
    }
  
    
  
    const completeTodo = id => {
      const todoIndex = todos.findIndex(todo => todo.id === id);
      const newTodos = [...todos];
      const completed = newTodos[todoIndex].completed;
      newTodos[todoIndex].completed = !completed;
      saveTodos(newTodos);
    };
    const deleteTodo = id => {
      const todoIndex = todos.findIndex(todo => todo.id === id);
      const newTodos = [...todos];
      newTodos.splice(todoIndex, 1);
      saveTodos(newTodos);
    };



    return <TodoContext.Provider value={{
                loading,
                error,
                setSearchValue,
                searchValue,
                searchedTodos,
                completedTodos,
                totalTodos,
                completeTodo,
                deleteTodo
    }}>
                {props.children}

            </TodoContext.Provider>;
};


export {TodoContext, TodoProvider};