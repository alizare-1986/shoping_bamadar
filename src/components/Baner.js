import React from 'react';
import bamadar from '../assets/bamadar.jpeg'

const Baner = () => {
    return (
        <div>
             <img
          src={bamadar}
          alt="wellcome"
          style={{
            width: '90%',
            margin:60,
            height:500,
            objectFit:'fill',
            border: '2px solid silver',
            WebkitBorderRadius: 50,
          }}
        />
        </div>
    );
};

export default Baner;