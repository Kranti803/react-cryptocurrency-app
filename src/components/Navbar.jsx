import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {AiOutlineHome, AiOutlineClose} from "react-icons/ai";
import {GiHamburgerMenu} from "react-icons/gi"
import {BsNewspaper, BsCoin, BsCurrencyExchange} from 'react-icons/bs';

const Navbar = () => {
    const [nav, setNav] = useState(false);


  return (
    <nav>
        <h1>CryptoDC</h1>
        <ul>
            <li>
                <NavLink  to={"/"} ><AiOutlineHome/>Home</NavLink>
            </li>
            <li>
                <NavLink  to={"/cryptocurrencies"}><BsCoin/>Cryptocurrencies</NavLink>
            </li>
            <li>
                <NavLink  to={"/news"}><BsNewspaper/>News</NavLink>
            </li>
            <li>
                <NavLink  to={"/exchanges"}><BsCurrencyExchange/>Exchanges</NavLink>
            </li>
            <div onClick={()=>setNav(!nav)}><GiHamburgerMenu size={30}/></div>
        </ul>

        <div className={`mobile_nav ${nav ? "mobile_nav_opens" : ""}`}>
        <div>
            <h2>CryptoDC</h2>
             <AiOutlineClose size={30} onClick={()=>setNav(false)}/>
        </div>

            <ul>
            <li>
                <NavLink onClick={()=>setNav(false)}  to={"/"} ><AiOutlineHome/>Home</NavLink>
            </li>
            <li>
                <NavLink onClick={()=>setNav(false)}  to={"/cryptocurrencies"}><BsCoin/>Cryptocurrencies</NavLink>
            </li>
            <li>
                <NavLink onClick={()=>setNav(false)}  to={"/news"}><BsNewspaper/>News</NavLink>
            </li>
            <li>
                <NavLink onClick={()=>setNav(false)}  to={"/exchanges"}><BsCurrencyExchange/>Exchanges</NavLink>
            </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar;