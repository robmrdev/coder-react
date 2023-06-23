import React from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/MainContent/ItemListContainer/ItemListContainer'

const App = () => {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={"Welcome"}/>
    </>
  )
}

export default App