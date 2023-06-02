import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTimes,faBars} from '@fortawesome/free-solid-svg-icons'

import './Hamburger.css'
import { Link } from 'react-router-dom';

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger">
      <button className="hamburger__toggle" onClick={handleToggle}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </button>
      {isOpen && (
        <nav className="hamburger__nav">
          <ul className="hamburger__list">
           <li className="hamburger__item"> 
            <Link  to={'/'}> فروشگاه</Link>
           <br></br>
            
            <Link to={'/productssall'}> محصولات پر فروش</Link>
            <br></br>
            <Link  to={'/productsshall'}>فروش شگفت انگیز</Link>
            <br></br>
        <Link  to={'/productsspall'}>پیشنهاد ما به شما</Link>
        <br></br>
        <Link style={{color:'blue'}} to={'/cart'}>سبد خرید </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Hamburger;
