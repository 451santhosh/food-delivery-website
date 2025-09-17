import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets} from '../../fassets/assets'
import {Link} from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
const Navbar = ({setLogin}) => {



    let[state,setState]=useState("Home");
    let {gettotal}=useContext(StoreContext);
  return (
    <div className='navbar'>
     <Link to='/'><img src={assets.logo} alt='' className='logo'/></Link>
     <ul className='navbar-menu '>
        <Link to='/' onClick={()=>setState("Home")} className={state==="Home"?"active":""}>Home</Link>
        <a href='#explore-menu' onClick={()=>setState("Menu")} className={state==="Menu"?"active":""}>Menu</a>
        <a href='#app-download' onClick={()=>setState("Mobile-App")}className={state==="Mobile-App"?"active":""}>Mobile-App</a>
        <a  href='#footer' onClick={()=>setState("Contact-Us")}className={state==="Contact-Us"?"active":""}>Contact-Us</a>
     </ul>
     <div className='navbar-right'>
         <img src={assets.search_icon} alt=''/>
         <div className='navbar-search-icon'>
            <Link to='/cart'><img src={assets.basket_icon} alt=''/></Link>
            <div className={gettotal()===0?"":"dot"}></div>

         </div>
         <button onClick={()=>setLogin(true)}>Sign In </button>
     </div> 
    </div>
  )
}

export default Navbar
