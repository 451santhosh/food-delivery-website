import React from 'react'
import './cart.css'
import { useContext } from 'react';
import { StoreContext } from '../context/StoreContext';
import { food_list } from '../fassets/assets';
import { useNavigate } from 'react-router-dom';
const Cart = () => {


  let{cartItems, setCartItems, addtoCart, removeCart,gettotal}=useContext(StoreContext);
  let navigate=useNavigate();
  return (
    <div className='cart'>
       <h1 className='mt-2 text-warning mb-4'>Cart Items</h1>
      
      <div className='cart-items'>
         <div className='cart-items-title'>
         
            <p className='fw-bold text-dark'>Items</p>
            <p className='fw-bold text-dark'>Title</p>
            <p className='fw-bold text-dark'>Price</p>
            <p className='fw-bold text-dark'>Quantity</p>
            <p className='fw-bold text-dark'>Total</p>
            <p className='fw-bold text-dark'>Remove</p>

         </div>
         <br/>
         <hr className='hi'/>
         {
          food_list.map((item,index)=>{
            if(cartItems[item._id]>0)
            {
              return(
                <div>
                <div className='cart-items-title cart-items-item'>
                  <img src={item.image} alt=''/>
                <p>{item.name}</p>
                 <p>{item.price}</p>
                 <p>{cartItems[item._id]}</p>
                 <p>{item.price*cartItems[item._id]}</p>
                 <p  onClick={()=>removeCart(item._id)} className='cross btn btn-danger p-2 m-3 rounded-3'>delete</p>
                </div>
                <hr/>
                </div>
              )
            }
          })
         }
      </div>
      <div className='cart-bottom'>
        <div className='cart-total'>
           <h2>Cart Totals </h2>
           <hr/>
           <div>
            <div className='cart-total-details ms-5'>
              <p>SubTotal</p>
              <p>{gettotal()}</p>
            </div>
               <div className='cart-total-details ms-5'>
                <p>Delivery Fee</p>
                <p>{5}</p>
               </div>
                  <div className='cart-total-details ms-5'>
                      <p>Total</p>
                      <p>{gettotal()+5}</p>
                  </div>
                  
           </div>
           <button onClick={()=>navigate('/order')} className='mb-5 ms-5'>Proceed to Pay</button>
        </div>
        <div className='cart-promocode'>
            <div>
              <p className='fw-bold text-dark'>If You Have a promo code, Enter it Here</p>
              <div className='cart-promocode-input me-5 ms-5'>
               <input type="text" placeholder='Promo Code'/>
               <button>Submit</button>
              </div>
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default Cart
