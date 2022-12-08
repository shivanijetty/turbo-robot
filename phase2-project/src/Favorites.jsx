import Modal from "./Modal"

const Favorites = ({favs, setFavs, display, selectedCard, setShowModal, showModal}) => {

  const removeRecipes = (recipeCard) => {
    console.log('bye bye recipe')
    setFavs((prevState) => {
    return([...prevState.filter((p)=> p.id !== recipeCard.id)])
    })
  }

  return(
      <div className="big big div">
        {
          favs.map((temporary) => {
           return(
              <div className="recipe card">
                <button className="remove-btn" onClick={() => { removeRecipes(temporary) }}>X</button>
                <img src={temporary.image} className="card image" />
                  <div className="small info">
                     <h2>{temporary.name}</h2>
                     <p>{temporary.description}</p>
                  </div>
                    <div className="one-btn-div">
                      <button className="recipe-card-btn" onClick={() => display(temporary)}>Recipe!</button>
                    </div>
                  </div>        
            )
          })
        }

        {showModal && <Modal setShowModal={setShowModal} favs={favs} selectedCard={selectedCard}/>}

      </div>
    )
}

export default Favorites