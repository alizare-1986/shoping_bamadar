import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContextProvider'
import shop from '../assets/shop.svg'
const Welcome = () => {
  const {state}=useContext(CartContext)
  return (
    <div>
    
      <div style={{   
        borderRadius:'20px',
        backgroundColor:'white',
    margin:'0 0 100px' ,
    position:'fixed',
    top: 0,
    width:'100%',
    boxShadow:'0px 5px 24px rgba(149, 157, 165, 0.4)'
   }}>
    <div style={{ display: 'flex',
    justifyContent:'space-between',
    alignItems: 'center',
    height: '40px',
    padding: '7px 50px'}}>
        <Link to={'/'}>فروشگاه</Link>
       <h1  style={{
          font: '-moz-initial',
          fontSize: 30,
          padding: 20,
          color: 'green',
          position:'fixed',
          width:'85%'
        }}> به بامادر خوش آمدید</h1>
        <div style={{display:'flex'}}>
          <p >{ state.total>0 && <span style={{width:'20px',border:'1px solid green',borderRadius:'20px',borderWidth:'5px'}}>جمع خرید: {state.total}</span>}</p>
       <Link to={'/cart'}><img src={shop} alt="shop"  /></Link>
       <p>{state.itemsCounter>0 && <span style={{borderRadius:'5px',border:'1px solid green',borderWidth:'2px'}}>{state.itemsCounter}</span>}</p>
       
      
       </div>
       
       </div>

      </div>
     
      
    </div>
  )
}

export default Welcome
