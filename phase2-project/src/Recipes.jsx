import Modal from './Modal'
import { useState } from 'react'


function Recipes({ recipeCards, showModal, setShowModal, addToFavs, display, selectedCard }) {

    return (
        <div className="big big div">
            {
                recipeCards.map((recps) => {
                    return (
                        <div className="recipe card">
                            <img src={recps.image} className="card image" />
                            <div className="small info">
                                <h2>{recps.name}</h2>
                                <p>{recps.description}</p>
                                <button onClick={() => { addToFavs(recps) }}>Like</button>
                            </div>
                            <div>
                                <button onClick={() => display(recps)}>Modal Info!</button>
                            </div>
                        </div>
                    )
                }
                )

            }
            {showModal && <Modal setShowModal={setShowModal} recipeCards={recipeCards} selectedCard={selectedCard} />}
        </div>
    )
}

export default Recipes