import React from 'react'
import './Footer.css'
import { assets } from '../../fassets/assets'
const Footer = () => {
  return (
    <div className='footer bg-dark text-white d-flex align-items-center' id="footer">


      <div className='row'>
        <div className='col-lg-4 mt-3 p-4'>
         
              <img src={assets.logo} alt=""/>
                  <p className='mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, iure nihil. Natus ipsam unde repudiandae necessitatibus similique debitis blanditiis aperiam!</p>
                  <div className='footer-social-icons'>
                     <img  className="p-3" src={assets.facebook_icon} alt=""/>
                     <img className="p-3" src={assets.twitter_icon} alt="" />
                      <img  className="p-3" src={assets.linkedin_icon} alt=""/>
                      

                  </div>


        </div>
         <div className='hi col-lg-4 mt-3 p-4'>
               <h2>COMPANY</h2>
                      <ul className=' fw-bold'>    
                      <li>Home</li>
                     <li>About Us</li>
                   <li>Delivery</li>
                       <li>Privacy Policy</li>
               </ul>



        </div>
         <div className='hi col-lg-4 mt-3 p-4'>
             <div className='footer-content-right'>
                   <h2>Get In Touch</h2>
                  <ul>
                   <li>+1-212-456-7890</li>
                   <li>contact@tomato.com</li>
           
                </ul>
               </div>


        </div>
         <hr/>
            <p className='text-center'>@All Rights Reserved </p>


      </div>

         </div>

    
      
      
    
  )
}

export default Footer
