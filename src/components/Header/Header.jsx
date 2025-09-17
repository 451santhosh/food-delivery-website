import React from 'react'
import './header.css'
import {assets} from '../../fassets/assets'

const Header = () => {
  return (
    <div className='header'>
       <img src={assets.header_img} style={{width:"1500px",height:"550px"}} alt=''/>
      <div className='header-contents m-5 m-auto'>
       <h2 className='m-auto m-5 text-white mx-3 my-2'>Order your favourite food Here</h2>
       <button className="btn btn-rounded text-dark m-auto bg-white">View Menu</button>
      </div>
    </div>
  )
}

export default Header
