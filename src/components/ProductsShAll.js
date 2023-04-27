import React from 'react';
import { ProductsShContext } from '../context/ProductsShContextProvider';
import { useContext } from 'react';
import Allsh from './Allsh';

const ProductsShAll = () => {
    const products = useContext(ProductsShContext)
    return (
        <div>
            <label style={{backgroundColor:'yellowgreen',padding:'20px',border:'1px solid silver',borderRadius:'20px',height:'20px'}} >محصولات شگفت انگیز</label>
            <br></br>
            <br></br>
            <br></br>
        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}>
            
           {
            products.map(product=><Allsh key={product.id} productData={product}/>)
           }
        </div>
        </div>
    );
};

export default ProductsShAll;