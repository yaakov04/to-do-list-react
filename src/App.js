import React, { useState, useEffect } from "react";
import { Fragment } from "react/cjs/react.production.min";
import TodoCounter from "./components/TodoCounter";
import TodoSearch from "./components/TodoSearch";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import CreateTodoButton from "./components/CreateTodoButton";

const useLocalStorge = (itemName, initialValue) => {
  //
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItems] = useState(initialValue);


  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
  
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
        }else{
          parsedItem = JSON.parse(localStorageItem);
        }
  
        setItems(parsedItem);
        setLoading(false);
  
      } catch (error) {
        setError(error);
      }
    }, 2000);
  });

  
  

  const saveItems = newItems =>{
    try {
      const stringItems = JSON.stringify(newItems);
      localStorage.setItem(itemName, stringItems);
      setItems(newItems);
    } catch (error) {
      setError(error);
    }
  };

  return {
    item,
    saveItems,
    loading,
    error
  };
};

function App() {
  
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

  const isFill = (minus = 0) =>{
    const isFill = todos.length - minus;
    return isFill;
  };

  return (
    <Fragment>
      <TodoCounter 
      total={totalTodos}
      completed={completedTodos} />

      <TodoSearch 
      searchValue={searchValue} 
      setSearchValue={setSearchValue} />

      <TodoList >
        {error && <p>Desespérate, hubo un error...</p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}
        {searchedTodos.map((todo) => (
          <TodoItem 
          key={todo.id} 
          text={todo.text} 
          completed={todo.completed}
          onComplete={()=>{completeTodo(todo.id)}}
          onDelete={()=>{deleteTodo(todo.id)}} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </Fragment>
  );
}

export default App;
