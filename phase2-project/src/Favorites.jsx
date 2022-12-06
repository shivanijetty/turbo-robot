
const Favorites = ({favs, setFavs}) => {

  const removeRecipes = (recipeCard) => {
    console.log('bye bye recipe')
    setFavs((prevState) => {
    return([...prevState.filter((p)=> p.id !== recipeCard.id)])
    })
  }

  return(
      <div className="favorites">
        {
          favs.map((recps) => {
           return(
              <div className="recipe card">
                <img src={recps.image} className="card image" />
                  <div className="small info">
                     <h2>{recps.name}</h2>
                     <p>{recps.description}</p>
                     <button onClick={() => { removeRecipes(recps) }}>Remove</button>
                  </div>
                    {/* <div>
                      <button onClick={() => display(recps)}>Modal Info!</button>
                    </div> */}
                  </div>        
            )
          })
        }
      </div>
    )
}

export default Favorites