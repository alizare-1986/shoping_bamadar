import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContextProvider';
import { isInCart, quantityCount } from '../../helper/function';
import trash from '../../assets/trash.svg'
import styles from './Allsp.module.css'

const AllSp = ({productData}) => {
    const {state,dispatch}=useContext(CartContext)
   
    return (
        <div className={styles.container}>
            
            
            <img className={styles.cardImage} src={`https://my.bamadar.com${productData.images.thumb}`} alt='product' style={{userSelect:'none',width:'150px'}}/>
            
          
            <h3 style={{fontSize:'15px'}}>{productData.name}</h3>
            <p style={{fontSize:'10px'}}>هر{productData.measurement} :{productData.price}</p>
           
            <p style={{fontSize:'10px'}}>قیمت آف :{productData.sell_price}</p>
            
           <div className={styles.linkContainer}>
           <Link to={`/products/${productData.id}`}>محصول</Link>
            <div className={styles.buttonContainer} >
            {quantityCount(state,productData.id) === 1 && <button className={styles.smallButton}  onClick={()=> dispatch({type: "REMOVE_ITEM" ,payload: productData})} ><img src={trash} alt='trash' style={{width:'10px'}}/></button> }
                {quantityCount(state,productData.id) > 1 && <button className={styles.smallButton} onClick={()=> dispatch({type: "DECREASE" , payload : productData})} > - </button>}
                {quantityCount(state,productData.id) > 0 &&<span  className={styles.counter}  >{quantityCount(state,productData.id)}</span>}
            {
                    isInCart(state,productData.id) ?
                    <button className={styles.smallButton} onClick={()=> dispatch({type:"INCREASE" , payload: productData})} >+</button> :
                    <button onClick={()=> dispatch({type:"ADD_ITEM",payload:productData})} >خرید</button>
                    }
                    
            </div>
            </div>
        </div>
    );
};

export default AllSp;