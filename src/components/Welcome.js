import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContextProvider'
import { ShopIcon } from './icon/ShopIcon'
import Hamburger from './Hamburger'
import  Styles  from './Welcome.module.css'
const Welcome = () => {

  const {state}=useContext(CartContext)
  return (
    <div className={Styles.container}>
     
    
      <div style={{   
        borderRadius:'20px',
        backgroundColor:'white',
    margin:'0 0 100px' ,
    position:'fixed',
    top: 0,
    left:0,
    width:'100%',
    boxShadow:'0px 5px 24px rgba(149, 157, 165, 0.4)'
   }}>
    
    
    <div style={{ display: 'flex',
    justifyContent:'space-between',
    alignItems: 'center',
   
    height: '40px',
    padding: '7px 50px'}}>
    <Hamburger/>
{/* <Link to={'/'}>فروشگاه</Link>
        <Link to={'/productssall'}>محصولات پر فروش</Link>
        
        <Link to={'/productsshall'}>فروش شگفت انگیز</Link>
        <Link to={'/productsspall'}>پیشنهاد ما به شما</Link>  */}
       <h1 className={Styles.baner}> به بامادر خوش آمدید</h1>
        <div className={Styles.state}>
          <p >{ state.total>0 && <span style={{border:'.5px solid black',borderRadius:'5px',borderWidth:'2px'}}>جمع خرید: {state.total}</span>}</p>
       <Link style={{color:'blue'}} to={'/cart'}><ShopIcon/></Link>
       <p>{state.itemsCounter>0 && <span style={{borderRadius:'5px',border:'.5px solid green',borderWidth:'1.5px'}}>{state.itemsCounter}</span>}</p>
       
      
       </div>
       
       </div>

      </div>
     
      
    </div>
  )
}

export default Welcome
