import React, {createContext, useState} from 'react';

import { getProduct } from './services/ProductsService.js';

export const CartContext = createContext();

export function CartProvider(props) {
  const [items, setItems] = useState([]);

  const deleteCartItems = () => {
    setItems([])
  }
  
  const addItemToCart = (id) => {
    const product = getProduct(id);
    setItems((prevItems) => {
      const item = prevItems.find((item) => (item.id == id));
      if(!item) {
          return [...prevItems, {
              id,
              qty: 1,
              product,
              totalPrice: product.price 
          }];
      }
      else { 
          return prevItems.map((item) => {
            if(item.id == id) {
              item.qty++;
              item.totalPrice += product.price;
            }
            return item;
          });
      }
    });
  }

  const removeItemToCart = (id) =>  {
    const product = getProduct(id);
    setItems((prevItems) => {
      const item = prevItems.find((item) => (item.id == id));
      if(item){ 
        return prevItems.map((item) => {
          if(item.id == id) {
            item.qty--;
            item.totalPrice -= product.price;
          }
          return item;
        });
      }
    });

  }

  const getItemsCount = () => {
      return items.reduce((sum, item) => (sum + item.qty), 0);
  }
  
  const getTotalPrice = () => {
      return items.reduce((sum, item) => (sum + item.totalPrice), 0);
  }  
  
  return (
    <CartContext.Provider 
      value={{items, setItems, getItemsCount, addItemToCart, getTotalPrice, removeItemToCart, deleteCartItems}}>
      {props.children}
    </CartContext.Provider>
  );
}

