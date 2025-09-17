import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../context/StoreContext'
const PlaceOrder = () => {
  let{gettotal}=useContext(StoreContext);
  return (
    <form className='place-order'>
      <div className='place-order-left ms-5'>
            <p className='title fw-bold text-dark fs-10px'>Delivery Informatin</p>
            <div className='multi-fileds'>
              <input type="text" placeholder='First name'/>
              <input type="text" placeholder='Last name'/>
             
            </div>
             
              <input type="email" placeholder='Email Address'/>
              <input type="text" placeholder='Street'/>
            
          
             
            <div className='multi-fileds'>
              <input type="text" placeholder='City'/>
              <input type="text" placeholder='State'/>
            
            </div>
             <div className='multi-fileds'>
              <input type="text" placeholder='Zip Code'/>
              <input type="text" placeholder='Country'/>
            
            </div>
            <input type="text" placeholder='Phone Number' className='mb-5'/>
      </div>

          <div className='cart-total'>
           <h1>Cart Totals </h1>
           <hr/>
           <div>
            <div className='cart-total-details'>
              <p>SubTotal</p>
              <p>{gettotal()}</p>
            </div>
               <div className='cart-total-details'>
                <p>Delivery Fee</p>
                <p>{5}</p>
               </div>
                  <div className='cart-total-details'>
                      <p>Total</p>
                      <p>{gettotal()+5}</p>
                  </div>
                  
           </div>
           <button>Proceed to Pay</button>

      </div>
    </form>
  )
}

export default PlaceOrder
