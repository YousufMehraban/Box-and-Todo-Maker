import React, {useState} from "react";


const NewTodoForm = ({addTodo}) => {
    
    const [todo, setTodo] = useState('')
    const handleChange = (event) => {
        setTodo(event.target.value)
    }
    const handleSubmit = (event) =>{
        event.preventDefault()
        addTodo(todo)
        setTodo('')
    }
    const style = {
        margin: '15px', 
        padding: '15px', 
        border: 'solid black', 
        background: 'lightgray', 
        fontWeight: 'bold'
    }
    return(
        <fieldset>
            <legend>Todo Form</legend>
            <form onSubmit={handleSubmit} style={style}>
                <label htmlFor="todo">Todo: </label>
                <input type="text" placeholder="Todo" id="todo" value={todo} name="todo" onChange={handleChange}/>
                <button>Add Todo</button>
            </form>
        </fieldset>
    )
}

export default NewTodoForm;
