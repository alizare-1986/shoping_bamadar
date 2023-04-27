import React, { useContext } from 'react';
import { CartContext } from '../context/CartContextProvider';
import Cart from './shared/Cart'
import { Link } from 'react-router-dom';
import styles from './ShopCart.module.css'
const ShopCart = () => {
    const {state,dispatch}=useContext(CartContext)
    return (
        <div className={styles.container}>
            <div>
                {
                    state.selectedItems.map(items => <Cart key={items.id} data={items}/>)
                }
            </div>
            {state.itemsCounter > 0 && (
        <div className={styles.payments}>
          <p>
            <span>تعداد محصولات :</span> {state.itemsCounter}{' '}
          </p>
          <p>
            <span>جمع کل خرید :</span> {state.total}{' '}
          </p>
          <div className={styles.buttonContainer}>
            <button
              className={styles.clear}
              onClick={() => dispatch({ type: 'CLEAR' })}
            >
              Clear
            </button>
            <button
              className={styles.checkout}
              onClick={() => dispatch({ type: 'CHECKOUT' })}
            >
              check out
            </button>
          </div>
        </div>
      )}
      {state.itemsCounter === 0 && !state.checkout && (
        <div className={styles.complete}>
          <h3>خرید جدید</h3>
          <Link to="/products">  فروشگاه</Link>
        </div>
      )}

      {state.checkout && (
        <div className={styles.complete}>
          <h3>خرید با موفقیت انجام شد</h3>
          <Link to="/products"> فروشگاه</Link>
        </div>
      )}
    </div>
        
    );
};

export default ShopCart;