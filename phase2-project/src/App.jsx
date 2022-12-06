import { useState, useEffect } from 'react'
import './App.css'
import React from "react"
import Favorites from './Favorites'
import Recipes from './Recipes'
import Layout from './Layout'
import Submit from './Submit'
import { BrowserRouter, Routes, Route } from "react-router-dom"


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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Recipes recipeCards={recipeCards} setShowModal={setShowModal} showModal={showModal} addToFavs={addToFavs}/>}/>
          <Route path="favorites" element={<Favorites favs={favs}/>}/>
          <Route path="submit" element={<Submit />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
