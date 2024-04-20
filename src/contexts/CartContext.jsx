import { createContext, useState } from "react";

import PropTypes from 'prop-types'

import { products } from "../data/products";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  const addToCart = (id) => {
      let newProducts;
      const product = products.find(el => el.id === id);
      const productInCart = cartProducts.find(el => el.id === id);
      if (productInCart) {
        newProducts = cartProducts.map(el => {
          if (el.id === id) {
            el.quantity++
          }
          return el
        })
      } else {
        product.quantity = 1;
        newProducts = [...cartProducts, product];
      }
      setCartProducts(newProducts);
  }

  const increaseQuantity = (id) =>{
    let newProducts = cartProducts.map(el => {
      if (el.id === id) {
        el.quantity++
      }
      return el
    })
    setCartProducts(newProducts);
  }

  const decreaseQuantity = (id) => {
    let newProducts;
    const product = cartProducts.find(el => el.id ===id);
    if(product.quantity === 1){
      newProducts = cartProducts.filter(el => el.id!== id)
    }else{
      newProducts = cartProducts.map(el => {
        if (el.id === id) {
          el.quantity--
        }
        return el
      })
    }
    setCartProducts(newProducts);
  }

  const state = { cartProducts, addToCart, increaseQuantity, decreaseQuantity }
    return (
    <CartContext.Provider value={state}>
      {children}
    </CartContext.Provider>
  )
}

CartContextProvider.propTypes = {
  children: PropTypes.node
}
export default CartContextProvider;