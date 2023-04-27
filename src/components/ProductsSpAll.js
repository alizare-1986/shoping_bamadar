import React from 'react';
import { useContext } from 'react';
import { ProductsSpContext } from '../context/ProductsSpContextProvider';
import AllSsp from './shared/AllSsp';

const ProductsSpAll = () => {
    const products = useContext(ProductsSpContext)
    return (
        <div>
            <label  style={{backgroundColor:'silver',padding:'20px',border:'1px solid silver',borderRadius:'20px',height:'20px'}} >محصولات شگفت انگیز</label>
            <br></br>
            <br></br>
            <br></br>
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}>
            
           {
            products.map(product=><AllSsp key={product.id} productData={product}/>)
           }
        </div>
        </div>
    );
};

export default ProductsSpAll;