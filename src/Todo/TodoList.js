import React, {useState} from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import { v4 as uuid } from "uuid";

const TodoList = () => {

    const initialTodoList = [];
    const [todos, setTodos] = useState(initialTodoList)

    const addTodo = (todo) => {
        setTodos(todos => [...todos, todo])
    }

    const removeTodo = (todo) => {
        setTodos(todos => {
            return todos.filter(i => i != todo)
        })
    }

    return(
        <>
            <NewTodoForm addTodo={addTodo}/>

            {todos.map(todo => <Todo todo={todo} removeTodo={removeTodo} key={uuid()}/>)}

        </>
    )
}

export default TodoList;
