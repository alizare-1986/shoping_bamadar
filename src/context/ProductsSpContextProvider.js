import React, { createContext, useEffect, useState } from 'react';
import { getSpProducts } from '../service/SpApi';
export const ProductsSpContext = createContext()

const ProductsSpContextProvider = ({children}) => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        const fetch = async()=>{
            let result = await getSpProducts()
            setProducts(result.data)
        }
        fetch()
    },[])
    return (
        <ProductsSpContext.Provider value={products}>
            {children}
        </ProductsSpContext.Provider>
    );
};

export default ProductsSpContextProvider;