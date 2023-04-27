import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductDetail from './components/ProductDetail';
import Store from './components/Store';
import Welcome from './components/Welcome';
import CartContextProvider from './context/CartContextProvider';
import ProductsContextProvider from './context/ProductsContextProvider';
import ProductsShContextProvider from './context/ProductsShContextProvider';
import ProductShDetail from './components/ProductsShDetails';
import Baner from './components/Baner';
import ProductsSpContextProvider from './context/ProductsSpContextProvider';

import ProductsShAll from './components/ProductsShAll';
import ProductSpDetails from './components/ProductsSpDetails';
import ShopCart from './components/ShopCart';
import ProductsSAll from './components/ProductsSAll';
import ProductsSpAll from './components/ProductsSpAll';


function App() {
  return (
    <div className="App">
      
      <Baner/>
     <ProductsContextProvider>
     <ProductsShContextProvider>
     <ProductsSpContextProvider>
      <CartContextProvider>
      <Welcome/>
      <Routes>
      <Route path='/cart' element={<ShopCart/>}/>
        <Route path='/productsspall' element={<ProductsSpAll/>}/>
        <Route path='/productssall' element={<ProductsSAll/>}/>
        
        <Route path='/productsshall' element={<ProductsShAll/>}/>
        <Route path='/products/:id' element={<ProductDetail/>}/>
        <Route path='/productssh/:id' element={<ProductShDetail/>}/>
      <Route path='/productssp/:id' element={<ProductSpDetails/>}/>
      <Route path='/products' element={<Store/>}/>
      
      
      <Route path='/' element={<Navigate to={'/products'}/>}/>


      </Routes>
      
      </CartContextProvider>
      </ProductsSpContextProvider>
      </ProductsShContextProvider>
     </ProductsContextProvider>
     
    
     
     
     


    </div>
  );
}

export default App;
