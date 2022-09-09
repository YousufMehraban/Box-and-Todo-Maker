import React from "react";

const Box = ({color, width, height, removeBox, idx}) =>{

    return(
        <div >
        <button 
            style={{display: 'inline-block', position: 'absolute'}} 
            onClick={()=>removeBox(idx)} >
            X
            </button>
        <div style={{backgroundColor:color, width: `${width}px`, height: `${height}px`, margin: '15px'}}> {idx} </div>
        </div>
    )
}

export default Box;