import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import TodoCounter from "./components/TodoCounter";
import TodoSearch from "./components/TodoSearch";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import CreateTodoButton from "./components/CreateTodoButton";

const defaultTodos = [
  { id: 1, text: "El destino me ha con..", completed: true },
  { id: 2, text: "Hyat!!!", completed: true },
  { id: 3, text: "Cortar cebolla", completed: false },
];



function App() {

  const [searchValue, setSearchValue] = React.useState('');
  const [todos, setTodos] = React.useState(defaultTodos);

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

  return (
    <Fragment>
      <TodoCounter 
      total={totalTodos}
      completed={completedTodos} />

      <TodoSearch 
      searchValue={searchValue} 
      setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem 
          key={todo.id} 
          text={todo.text} 
          completed={todo.completed} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </Fragment>
  );
}

export default App;
