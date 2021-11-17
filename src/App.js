import React, { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import TodoCounter from "./components/TodoCounter";
import TodoSearch from "./components/TodoSearch";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import CreateTodoButton from "./components/CreateTodoButton";

const defaultTodos = [
  { id: 1, text: "El destino me ha con..", completed: false },
  { id: 2, text: "Hyat!!!", completed: false },
  { id: 3, text: "Cortar cebolla", completed: false },
];



function App() {

  const [searchValue, setSearchValue] = useState('');
  const [todos, setTodos] = useState(defaultTodos);

  

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
    setTodos(newTodos);
  };
  const deleteTodo = id => {
    const todoIndex = todos.findIndex(todo => todo.id === id);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
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

      <TodoList
      isFill={isFill} >
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
