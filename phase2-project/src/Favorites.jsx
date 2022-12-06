
const Favorites = ({favs}) => {
  return(
      <div className="favorites">
        {
          favs.map((recps) => {
           return(
              <img src={recps.image} />            
            )
          })
        }
      </div>
    )
}

export default Favorites