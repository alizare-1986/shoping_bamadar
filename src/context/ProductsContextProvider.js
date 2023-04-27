import React, { createContext, useEffect, useState } from 'react'
import { getProducts } from '../service/Api'
export const ProductsContext = createContext()
const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const fetchApi = async () => {
      let result = await getProducts()
      setProducts(result.data)
    }
    fetchApi()
  }, [])

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsContextProvider
