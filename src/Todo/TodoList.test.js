import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";


//smoke test
it('todolist runs without breaking', ()=>{
    render(<TodoList />)
})


//snapshot test
it('todolist snapshot should match', ()=>{
    const {asFragment} = render(<TodoList />)
    expect(asFragment()).toMatchSnapshot()
})


it('items to be in DOM', ()=>{
    const {queryByText} = render(<TodoList />)
    const form = queryByText('Todo Form')
    const btn = queryByText('Add Todo')
    expect(form).toBeInTheDocument()
    expect(btn).toBeInTheDocument()
})

it('todo should be aded in the DOM', ()=>{
    const {queryByText, queryByLabelText} = render(<TodoList />)
    const todoInput = queryByLabelText('Todo:')
    const btn = queryByText('Add Todo')
    fireEvent.change(todoInput, {target: {value: 'Do the dishes'}})
    fireEvent.click(btn)
    const todo = queryByText('Do the dishes')
    expect(todo).toBeInTheDocument()
    
    const removeBTN = queryByText('X')
    fireEvent.click(removeBTN)
    expect(todo).not.toBeInTheDocument()
})

