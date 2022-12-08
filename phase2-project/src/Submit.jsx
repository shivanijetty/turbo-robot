import React from "react";
import { useState } from "react";
import Recipes from "./Recipes";

function Submit ({setRecipeCards}) {
    const [submit, setSubmit] = useState("ingredients")
    const [open, setOpen] = useState(false)
    const [ingredients, setIngredients] = useState('Love and Spackle of Nutmeg')
    const [instructions, setInstructions] = useState('Try thy best!')
    const [name, setName] = useState('I Never Wot')
    const [description, setDescription] = useState('Tis a mystery!')
    const [century, setCentury] = useState('something')
    const [image, setImage] = useState('https://cdn8.openculture.com/wp-content/uploads/2016/07/OC-bachelor-coobook-illustration.png')

    const handleSubmit = (e) => {
        e.preventDefault()

        const submittedCard = {
                    ingredients: ingredients,
                    instructions: instructions,
                    name: name,
                    description: description,
                    century: century,
                    image: image,
                }

      const postRecipe = async () => {
          let req = await fetch('http://localhost:3000/recipes', {
              method: 'POST',
              headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(
                    submittedCard
                ),
            })                            
            setRecipeCards((currentState) => {
                console.log("added!")
                return([...currentState, submittedCard]);
            })
        }
        postRecipe()
    }
    

    const handleOpen = () => {
      setOpen(!open)
    }
        
    return(
        <div className="grandparent-submit-div">
        <div className="parent-submit-div">
            <form onSubmit={(e)=>handleSubmit(e)}>
                {
                    submit === "ingredients" && <div className="children-submit-div">
                        <h2 className="h2-fonts">What Be Thy Fixin's?</h2>                        
                        <input className="input-field" onChange={(e) => {
                            setIngredients(e.target.value)
                        }} type="text" placeholder="thy fixings..." /><br />
                        <div className="two-btn-div">
                        <button className="submit-button" onClick={() => { setSubmit("instructions") }}>Next</button>
                        </div>
                    </div>
                }
                {
                    submit === "instructions" && <div className="children-submit-div">
                        <h2 className="h2-fonts">Yer Olde Instructions</h2>
                        <input className="input-field"  onChange={(e) => {
                            setInstructions(e.target.value)
                        }} type="text" placeholder="thy instructions" /><br />
                        <div className="two-btn-div">
                        <button className="submit-button" onClick={() => { setSubmit("ingredients") }}>Back</button><br />
                        <button className="submit-button" onClick={() => { setSubmit("title") }}>Next</button>
                        </div>
                    </div>
                }
                {
                    submit === "title" && <div className="children-submit-div">
                        <h2 className="h2-fonts">What Should'st It Be Named?</h2>
                        <input className="input-field" onChange={(e) => {
                            setName(e.target.value)}} type="text" placeholder="thy title" /><br />
                        <input className="input-field" onChange={(e) => { setDescription(e.target.value) }} type="text" placeholder="thy caption" /><br />
                        <input className="input-field" onChange={(e) => { setImage(e.target.value) }} type="text" placeholder="portrait please!" /><br />
                        <select className="input-field" onChange={(e) => { setCentury(e.target.value) }}>
                            <option value="" disabled selected>choose thine century!</option>                            
                            <option value="16th">16th</option>
                            <option value="17th">17th</option>
                            <option value="18th">18th</option>
                            <option value="19th">19th</option>
                            <option value="20th">20th</option>
                        </select>
                        <div className="one-btn-div">
                            <button className="submit-button" onClick={() => { setSubmit("instructions") }}>Back</button><br />
                        </div>
                        <div className="one-btn-div">
                            <input className="submit-button" type="submit" />
                        </div>
                    </div>
                }                
            </form>
        </div>
        </div>
    )           
} 

export default Submit