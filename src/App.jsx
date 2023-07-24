import React from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/MainContent/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/MainContent/ItemListContainer/ItemListContainer'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { CartProvider } from './context/CheckoutContext';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={"Welcome to IKEA"}/>}/>
              <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
              <Route path='/item/:idItem' element ={ <ItemDetailContainer/>}/>
              <Route path='*' element={<h2>Under Construction</h2>}/>
            </Routes>
        </CartProvider>
      </BrowserRouter>

    </>
  )
}

export default App