import React from "react";


const Todo = ({todo, removeTodo}) => {
    return(
        <div style={{margin: '10px', padding: '10px'}}>
            <div>
                {todo}
            </div>
            <button onClick={()=>removeTodo(todo)} > X </button>
        </div>
    )
}

export default Todo;