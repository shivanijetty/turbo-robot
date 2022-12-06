import { useState, useEffect } from 'react'
import './App.css'
import React from "react"
import Recipes from './Recipes'


function App() {

  const [recipeCards, setRecipeCards] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [favs, setFavs] = useState([])

  useEffect(() => {
    const request = async () => {
      let req = await fetch('http://localhost:3000/recipes')
      let res = await req.json()
      setRecipeCards(res)
    }
    request()
  }, [])

  const addToFavs = (card) => {
    if(favs.includes(card)) return;
    setFavs([...favs,card])

  }

  return (
    <div className="App">
      <h1 className='header'>Ye Olde Mom n' Pop Recipe Shoppe</h1>
      <div>
        <Recipes recipeCards={recipeCards} showModal={showModal} setShowModal={setShowModal} />
        <Favorites favs={favs} />
        <hr />
      </div>
    </div>
  )
}

export default App
