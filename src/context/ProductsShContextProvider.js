import React, { createContext, useEffect, useState } from 'react';
import { getShProducts } from '../service/ShApi';
export const ProductsShContext = createContext()
const ProductsShContextProvider = ({children}) => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        const fetch = async()=>{
           let result = await getShProducts()
            setProducts(result.data)
        }
        fetch()
    },[])
    console.log(products);
    return (
        <ProductsShContext.Provider value={products}>
            {children}
        </ProductsShContext.Provider>
    );
};

export default ProductsShContextProvider;