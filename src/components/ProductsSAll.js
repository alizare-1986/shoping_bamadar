import React from 'react';
import { useContext } from 'react';
import AllSp from './shared/AllSp'
import { ProductsContext } from '../context/ProductsContextProvider';
const ProductsSAll = () => {
    const products = useContext(ProductsContext)
    return (
        <div>
            <label style={{backgroundColor:'violet',padding:'20px',border:'1px solid silver',borderRadius:'20px',height:'20px'}} >محصولات پر فروش</label>
            <br></br>
            <br></br>
            <br></br>
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}>
            
           {
            products.map(product=><AllSp key={product.id} productData={product}/>)
           }
        </div>
        </div>
    );
};

export default ProductsSAll;