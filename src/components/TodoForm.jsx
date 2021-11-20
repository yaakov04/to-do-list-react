import React, { useContext, useState } from 'react'
import { TodoContext } from '../TodoContext';
import "./TodoForm.css"

const TodoForm =()=>{
    const [newTodoValue, setNewTodoValue] = useState('');

    const {addTodo,setOpenModal } = useContext(TodoContext);

    const onChange = e => {
       setNewTodoValue(e.target.value);
    };

    const cancel = ()=>{
        setOpenModal(false);
    };
    const onSubmit = (e)=>{
        e.preventDefault();
        if(newTodoValue){
            addTodo(newTodoValue);
            setOpenModal(false);
        }else{
            alert('No puedes añadir un Todo vacio')
        }
    };

    return (
        <form 
        className="form-add-item"
        onSubmit={onSubmit} >
            <label htmlFor="">Nuevo Todo!!</label>
            <textarea 
            name="" 
            id="" 
            placeholder="Comprar libros"
            value={newTodoValue}
            onChange={onChange} ></textarea>
            <div className="btn-container-form">
                <button
                className="btn-cancel"
                type="button"
                onClick={cancel} >Cancelar</button>
                <button
                className="btn-add"
                type="submit" >Añadir</button>
            </div>
        </form>
    );
};

export default TodoForm;