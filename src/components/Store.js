import React, { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContextProvider';
import Products from './shared/Products';
import { ProductsShContext } from '../context/ProductsShContextProvider';
import ProductsSh from './shared/ProductsSh';
import { ProductsSpContext } from '../context/ProductsSpContextProvider';
import ProductsSp from './shared/ProductsSp'
import { Link } from 'react-router-dom';
import styles from './Store.module.css'

const Store = () => {
    const products = useContext(ProductsContext)
    const productsSh = useContext(ProductsShContext)
    const productsSp = useContext(ProductsSpContext)
    return (
      <div style={{backgroundColor:'darkcyan'}}>
        <br></br>
        <div style={{display:'flex',justifyContent:'center',height:'60px'}}>
        <Link style={{backgroundColor:'violet',padding:'20px',border:'1px solid silver',borderRadius:'50px',height:'20px'}} to={'/productssall'} >محصولات پر فروش</Link>
        </div>
        <br></br>
        <div className={styles.container} >
          {
            products.map(product => <Products key={product.id} productData={product}/>)
          }
          </div>
          <br></br>
           <div style={{display:'flex',justifyContent:'center',height:'60px'}}>
          <Link style={{backgroundColor:'yellowgreen',padding:'20px',border:'1px solid silver',borderRadius:'50px',height:'20px'}} to={'/productsshall'}>فروش شگفت انگیز</Link>
           </div>
           <br></br>
       
          <div className={styles.container}>
          {
           productsSh.map(product => <ProductsSh key={product.id} productData={product}/>)
          }
          </div>
          <br></br>
           <div style={{display:'flex',justifyContent:'center',height:'60px'}} >
          <Link  style={{backgroundColor:'silver',padding:'20px',border:'1px solid silver',borderRadius:'50px',height:'20px'}} to={'/productsspall'}>پیشنهاد ما به شما</Link>
          </div>
          <br></br>
          <div style={{display:'flex',flexWrap:'nowrap',justifyContent:'space-between',overflowX:'scroll'}}>
          {
            productsSp.map(product=> <ProductsSp key={product.id} productData={product}/>)
          }
           </div>
          </div>
    );
};

export default Store;