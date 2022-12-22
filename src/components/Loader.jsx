import React from 'react';
import loader from "../assets/Loader.svg";

const Loader = () => {
  return (
    <div className='loader'>
        <img src={loader} alt="" />
    </div>
  )
}

export default Loader;