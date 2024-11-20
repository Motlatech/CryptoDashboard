import React from 'react';
import cryptologo from '../../image/crypto-logo.png';

function navBar() {
  return (
    
  <div className='bg-white flex  w-full rounded-md'>
     <img
      src={cryptologo}
      alt='icon img' 
      width='50px' 
      height='40px' />
     <p className='italic  p-2 tracking-wide font-bold text-xl'>Crypto Dashboard</p> 
  </div>
 
    
 
  )
}

export default navBar;


