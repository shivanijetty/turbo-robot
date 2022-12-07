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
                <img src={temporary.image} className="card image" />
                  <div className="small info">
                     <h2>{temporary.name}</h2>
                     <p>{temporary.description}</p>
                     <button onClick={() => { removeRecipes(temporary) }}>Remove</button>
                  </div>
                    <div>
                      <button onClick={() => display(temporary)}>Modal Info!</button>
                    </div>
                  </div>        
            )
          })
        }
        {showModal && <Modal setShowModal={setShowModal} selectedCard={selectedCard} favs={favs}/>}
      </div>
    )
}

export default Favorites