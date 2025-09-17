import React, { useState } from 'react'
import './Login.css'
import { assets } from '../../fassets/assets'
const Login = ({setLogin}) => {
  let[current,setCurrent]=useState("Sign Up")
  return (
    <div className='login'>
      <form className='login-container'>
        <div className='login-title'>
          <h2>{current}</h2>
          <img onClick={()=>setLogin(false)} src={assets.cross_icon} alt=''/>

        </div>
        <div className='login-inputs'>
          {current==="Login"?<></>:
          <input type="text" placeholder='Your Name' required />}
          <input type="email" placeholder='Your Email' required />
          <input type="Password" placeholder='Your Password' required />

        </div>
          <button className='ms-2 px-3 py-2'>{current==="Sign Up"?"Create account":"Login"}</button>
          <div className='login-condition ms-2'>
                 <input type="checkbox" required />
                 <span className='ms-2'>By Continuing ,I agree to the terms of use & privacy policy.</span>
          </div>
          {current==="Login"?
          <p>Create a new account <span onClick={()=>setCurrent("Sign Up")}>Click Here</span></p>
          : <p className='ms-4'>Already have an account ? <span onClick={()=>setCurrent("Login ")}>Login Here</span></p>
          }
              
      </form>
    </div>
  )
}

export default Login
