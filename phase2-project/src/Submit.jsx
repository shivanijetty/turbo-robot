import React from "react";
import { useState } from "react";

function Submit () {
    const [submit, setSubmit] = useState("ingredients")
    const [open, setOpen] = useState(false)
    const [ingredients, setIngredients] = useState('')
    const [instructions, setInstructions] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [century, setCentury] = useState('')
    const [image, setImage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

      const postRecipe = async (card) => {
          let req = await fetch('http://localhost:3000/recipes', {
              method: 'POST',
              headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ingredient: ingredients,
                    instructions: instructions,
                    name: name,
                    description: description,
                    century: century,
                    image: image,
                })
            })
        }
    }
    

    const handleOpen = () => {
      setOpen(!open)
    }
        
    return(
        <div>
            <form onSubmit={handleSubmit}>
                {
                    submit === "ingredients" && <div>
                        <h2>Yer Olde Fixings</h2>                        
                        <input type="text" placeholder="thy fixings..." /><br />
                        <button onClick={() => { setSubmit("instructions") }}>Next</button>
                    </div>
                }
                {
                    submit === "instructions" && <div>
                        <h2>Yer Olde Instructions</h2>
                        <button onClick={() => { setSubmit("ingredients") }}>Back</button><br />
                        <input type="text" placeholder="thy instructions" /><br />
                        <button onClick={() => { setSubmit("title") }}>Next</button>
                    </div>
                }
                {
                    submit === "title" && <div>
                        <h2>Yer Olde Recipe</h2>
                        <button onClick={() => { setSubmit("instructions") }}>Back</button><br />
                        <input type="text" placeholder="thy title" /><br />
                        <input type="text" placeholder="thy caption" /><br />
                        <button onClick={handleOpen}>frometh which era?</button>


                        <input type="submit" />
                    </div>
                }                
            </form>
        </div>
    )           
} 

export default Submit