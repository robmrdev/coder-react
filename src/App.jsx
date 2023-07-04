import React from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/MainContent/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/MainContent/ItemListContainer/ItemListContainer'
import { BrowserRouter,Routes,Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={"Welcome to IKEA"}/>}/>
          <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
          <Route path='/item/:idItem' element ={ <ItemDetailContainer/>}/>
          <Route path='*' element={<h2>Under Construction</h2>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App