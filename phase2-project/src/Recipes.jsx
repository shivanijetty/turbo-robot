import Modal from './Modal'
import { useState } from 'react'


function Recipes({ recipeCards, showModal, setShowModal }) {

    const [selectedCard, setSelectedCard] = useState([])

    const display = (clicked) => {
        setSelectedCard(clicked)
        setShowModal(true)
    }

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