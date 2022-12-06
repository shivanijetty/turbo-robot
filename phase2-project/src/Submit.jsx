import React from "react";
import { useState } from "react";

function Submit () {
    const [submit, setSubmit] = useState("ingredients")

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                {
                    submit === "ingredients" && <div>
                        <h2>Yer Olde Ingredients</h2>                        
                        <input type="text" placeholder="1 fillet of fenny snake, 2 eye of newt,..." /><br />
                        <button onClick={() => { setSubmit("instructions") }}>Next</button>
                    </div>
                }
                {
                    submit === "instructions" && <div>
                        <h2>Yer Olde Instructions</h2>
                        <button onClick={() => { setSubmit("ingredients") }}>Back</button><br />
                        <input type="text" placeholder="fillet of a fenny snake, in the pot boil and bake..." /><br />
                        <button onClick={() => { setSubmit("title") }}>Next</button>
                    </div>
                }
                {
                    submit === "title" && <div>
                        <h2>Yer Olde Recipe</h2>
                        <button onClick={() => { setSubmit("instructions") }}>Back</button><br />
                        <input type="text" placeholder="Supper" /><br />
                        <input type="text" placeholder="'tis a warm midsummer night's meal" /><br />

                        <input type="submit" />
                    </div>
                }                
            </form>
        </div>

    )

} 

export default Submit