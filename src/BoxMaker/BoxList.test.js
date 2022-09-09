import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

it('component runs without breaking', ()=>{
    render(<BoxList />)
})


it('box snapshots should match', ()=>{
    const {asFragment} = render(<BoxList />)
    expect(asFragment()).toMatchSnapshot()
})

it('item should be in the DOM', ()=>{
    const { queryByLabelText } = render(<BoxList />)
    const form = document.querySelector('form')
    const colorInput = queryByLabelText('Color:')
    expect(colorInput).toBeInTheDocument()
    expect(form).toBeInTheDocument()
})

it('items to be added in the DOM', ()=>{
    const {queryByText, queryByLabelText } = render(<BoxList />)
    const colorInput = queryByLabelText('Color:')
    const widthInput = queryByLabelText('Width:')
    const heightInput = queryByLabelText('Height:')
    const submitBTN = queryByText('Submit')
    fireEvent.change(colorInput, {target: { value: 'red'}})
    fireEvent.change(widthInput, {target: { value: '200px'}})
    fireEvent.change(heightInput, {target: { value: '200px'}})
    fireEvent.click(submitBTN)
    const ColorBox = queryByText(0)
    expect(ColorBox).toBeInTheDocument()

    const removeBTN = queryByText('X')
    fireEvent.click(removeBTN)
    expect(ColorBox).not.toBeInTheDocument()
})