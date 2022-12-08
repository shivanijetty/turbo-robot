import Modal from './Modal'

function Recipes({ recipeCards, showModal, setShowModal, addToFavs, display, selectedCard }) {

    return (
        <div className="big big div">
            {
                recipeCards.map((recps) => {
                    return (
                        <div className="recipe card">
                          
                            <img src={recps.image} className="card image" />
                            
                            <div className="small info">
                                <div className= 'recipe-name-div'>
                                    <h2>{recps.name}</h2>
                                </div>
                                <div className= 'recipe-name-div'>
                                    <p>{recps.description}</p>
                                </div>
                                <div className="two-btn-div">
                                <button className="recipe-card-btn" onClick={() => addToFavs(recps)}>Fancy</button>
                                <button className="recipe-card-btn" onClick={() => display(recps)}>Recipe!</button>
                                </div>
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