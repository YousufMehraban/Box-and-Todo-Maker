import React, {useState} from "react";


const NewBoxForm = ({addBox}) =>{

    const initialFormData = {color: "", width: "", height:""}
    const [formData, setFormData] = useState(initialFormData)

    const handleChange = (event) =>{
        setFormData(data=>{
            return { ...data, [event.target.name]: event.target.value }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {color, width, height} = formData
        addBox(color, width, height)
        setFormData(initialFormData)
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
            <legend> Add Item: </legend>
            <form onSubmit={handleSubmit} style={style}>
                <label htmlFor="Color" >Color: </label>
                <input 
                type="text" 
                placeholder="Color" 
                id="Color" 
                value={formData.color} 
                name="color"
                onChange={handleChange}
                />

                <label htmlFor="width" >Width: </label>
                <input 
                type="text" 
                placeholder="width" 
                id="width" 
                value={formData.width}
                name="width"
                onChange={handleChange}
                />

                <label htmlFor="height" >Height: </label>
                <input 
                type="text" 
                placeholder="height" 
                id="height" 
                value={formData.height}
                name="height"
                onChange={handleChange}
                />

                <button>Submit</button>
            </form>
        </fieldset>
    )
}

export default NewBoxForm;
