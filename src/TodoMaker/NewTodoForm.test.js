import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";


//smoke test
it('components runs without breaking', ()=>{
    render(<NewTodoForm />)
})

//snapshot test
it('todos snapshots should match', ()=>{
    const {asFragment} = render(<NewTodoForm />)
    expect(asFragment()).toMatchSnapshot()
})


