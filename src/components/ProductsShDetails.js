import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductsShContext } from '../context/ProductsShContextProvider';
import styles from './ProductsShDetails.module.css'



const ProductShDetail = () => {
    const params = useParams()
    const id = params.id
    const data = useContext(ProductsShContext)
    const product = data.find(item=>item.id===parseInt(id))
    
    console.log(data,id,product);
    
    if(!product){
        return <div>loading...</div>
    }
    return (
        <div className={styles.container} >
        <img className={styles.image} src={`https://my.bamadar.com${product.images.thumb}`} alt='product' style={{userSelect:'none'}}/>
        <div className={styles.textContainer}>
        <h3 >{product.name}</h3>
        <p>{product.measurement} :</p>
        <div className={styles.buttonContainer}>
        <span className={styles.price}>قیمت: {product.price}</span>
        <br></br>
        <span className={styles.sell_price} >قیمت آف: {product.sell_price}</span>
        <br></br>
       
        <Link to={'/products'}>برگشت به فروشگاه</Link>
        </div>
        </div>
    </div>
    );
};

export default ProductShDetail;