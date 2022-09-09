import React from "react";
import { render } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

it('component runs without breaking', ()=>{
    render(<NewBoxForm />)
})


it('form snapshots should match', ()=>{
    const {asFragment} = render(<NewBoxForm />)
    expect(asFragment()).toMatchSnapshot()
})


