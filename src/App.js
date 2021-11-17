import { Fragment } from "react/cjs/react.production.min";
import TodoCounter from "./components/TodoCounter";
import TodoSearch from "./components/TodoSearch";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import CreateTodoButton from "./components/CreateTodoButton";

function App() {
  const todos = [
    { id: 1, text: "El destino me ha con..", completed: false },
    { id: 2, text: "Hyat!!!", completed: false },
    { id: 3, text: "Cortar cebolla", completed: false },
  ];
  return (
    <Fragment>
      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.id} text={todo.text} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </Fragment>
  );
}

export default App;
