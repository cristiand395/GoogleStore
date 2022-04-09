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

  return {
    products,
    search,
    setSearch,
    cart,
    setCart,
    filteredProducts,
  };
};

export default useInitialState;