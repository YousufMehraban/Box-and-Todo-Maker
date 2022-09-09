import React, {useState} from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import {v4 as uuid} from 'uuid'

const BoxList = () =>{
    const initialBoxesData = []
    const [Boxes, setBoxes] = useState(initialBoxesData)

    const addBox = (color, width, height)=>{
        setBoxes(boxes => {
            return[...boxes, {color, width, height}]
        })
    }

    const removeBox = (index) => {
        setBoxes(boxes => {
            return boxes.filter((item, idx ) => idx != index)
        })
    }

    return(
        <div>
            <NewBoxForm addBox={addBox}/>
            {Boxes.map((item, idx) => 
                <Box 
                    color={item.color} 
                    width={item.width} 
                    height={item.height}
                    key={uuid()}
                    removeBox={removeBox}
                    idx={idx}
                    />    
            )}
        </div>
    )
}
export default BoxList;


