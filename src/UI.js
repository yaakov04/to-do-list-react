import React, {useContext} from 'react';
import { Fragment } from "react/cjs/react.production.min";
import TodoCounter from "./components/TodoCounter";
import TodoSearch from "./components/TodoSearch";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import CreateTodoButton from "./components/CreateTodoButton";
import { TodoContext } from './TodoContext';


const UI = () => {
    const {loading, error, searchedTodos, completeTodo,deleteTodo} = useContext(TodoContext);
    return (
        <Fragment>
            <TodoCounter />

            <TodoSearch />

            
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
};

export default UI;