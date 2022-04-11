import { useState } from 'react';
import useGetProducts from './useGetProducts';

export const initialState = {
  search: '',
  cart: [],
}

const useInitialState = () => {
  const products = useGetProducts()
  const [search, setSearch] = useState('')
  const [cart, setCart] = useState([])
  let filteredProducts = []

  const state = {
    products,
    search,
    cart,
  }


  if (!search.length >= 1) {
    filteredProducts = products
  } else {
    filteredProducts = products.filter(product => {
      const productName = product.name.toLowerCase()
      const searchText = search.toLowerCase();
      if (productName.includes(searchText)){
        return product
      };
    });
  }

  const handleAddToCart = (item) => {
    products.filter(product => {
      if (item === product.name) {
        setCart([...cart, product])
      }
    })
  }

  /* const handleAddToCart = (item) => {
    if (cart.length === 0) {
      products.filter(product => {
        if (item === product.name) {
          setCart([...cart, product])
          console.log('adding new item')
        }})}
    cart.filter(cartProduct => {
      if (item === cartProduct.name) {
        cartProduct.cart+=1
        console.log('adding existing item')
      }
    })
  } */



  return {
    products,
    search,
    setSearch,
    cart,
    setCart,
    filteredProducts,
    handleAddToCart,
  };
};

export default useInitialState;