
// HACER FUNCION DE CONTADOR PARA AGREGAR O ELIMINAR UN NUMERO DE PRODUCTOS




import React, { Children } from "react";
import { useState, createContext } from "react";


export const CheckoutContext = createContext({
    shoppingCart: [],
    total: 0,
    totalAmount: 0
})

export const CartProvider = ({children}) => {
    const [shoppingCart, setShoppingCart] = useState ([]);
    const [total, setTotal] = useState (0);
    const [totalAmount, setTotalAmount] = useState (0);


    console.log(shoppingCart)

    const addProduct = (item, amount) => {
        const checkProduct = shoppingCart.find (prod => prod.item.id === item.id);

        if (!checkProduct) {
            setShoppingCart (prev => [...prev, {item, amount}]);
            setTotalAmount (prev => prev + amount);
            setTotal (prev => prev + (item.price * amount));
        }else {
            const newCart = shoppingCart.map (prod => {
                if (prod.item.id === item.id){
                    return {...prod, amount:prod.amount + amount};
                } else {
                    return prod;
                }
            });
            setShoppingCart(newCart);
            setTotalAmount(prev => prev + amount);
            setTotal (prev=> (item.price * amount))
        }
    }


    const deleteProduct = (id) => {
        const deletedProduct = cart.find (prod => prod.item.id === id);
        const newCart = cart.filter (prod => prod.item.id !== id);

        setShoppingCart (newCart);
        setTotalAmount (prev => prev - deletedProduct.amount);
        setTotal (prev => prev - (deletedProduct.item.price * deletedProduct.amount));
    }


    const emptyCart = () => {
        setShoppingCart([])
        setTotal(0);
        setTotalAmount(0);
    }



    return (
        <CheckoutContext.Provider value={{shoppingCart, total, totalAmount, addProduct, deleteProduct, emptyCart}}>
            {children}
        </CheckoutContext.Provider>
    )


}
