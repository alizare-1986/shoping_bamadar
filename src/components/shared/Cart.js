import React,{useContext} from 'react';
import { CartContext } from '../../context/CartContextProvider';
import trash from '../../assets/trash.svg'
import styles from "./Cart.module.css"

const Cart = (props) => {
    const {dispatch} = useContext(CartContext)
    const {images,sell_price,name,quantity} = props.data
    return (
        <div className={styles.container} >
          <img className={styles.productImage} src={`https://my.bamadar.com${images.thumb}`} alt="product"/>
          <div className={styles.data} >
            <h3>{name}</h3>
            <p>{sell_price}</p>
          </div>
          <div>
            <span className={styles.quantity} >{quantity}</span>
          </div>
          <div className={styles.buttonContainer} >
            {
                quantity > 1 ?
                <button onClick={()=> dispatch({type: "DECREASE", payload:props.data})} > - </button> :
                <button onClick={()=> dispatch({type: "REMOVE_ITEM", payload:props.data})} ><img src={trash} alt="trash" /></button> 
            }
            <button onClick={()=> dispatch({type: "INCREASE" ,payload: props.data })} > + </button>
          </div>
        </div>
    );
};

export default Cart;