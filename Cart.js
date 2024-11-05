import React from 'react'
import './Cart.css'

import { useDispatch, useSelector } from 'react-redux'
import { deleteFromCart, updateQuantity } from '../store/cartslice/Cartslice';


const Cart = () => {
    const cartProducts=useSelector((state)=>state.cart.cartItems)
    const dispatch=useDispatch();

    const deleteCart=(item)=>{
        dispatch(deleteFromCart(item));
    };
    const incrementCart=(id,quantity)=>{
      dispatch(updateQuantity({id,quantity:quantity+1}))
    };
    const decrementCart=(id,quantity)=>{
      if(quantity>1){
        dispatch(updateQuantity({id,quantity:quantity-1}))
      }
    }

  return (
    <>
    <div className='hod'>
{cartProducts.map((item)=>(
 <div className="card mb-3" key={item.id}>
  <div className="row g-0">
        <div className="col-md-4">
      <img src={item.image} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.price}</p>
        <button className='btn btn-primary ml-5'>
          <button className='btn btn-warning ye'onClick={()=>{decrementCart(item.id,item.quantity)}}>-</button>{item.quantity}<button className='btn btn-warning ye'onClick={()=>{incrementCart(item.id,item.quantity)}}>+</button></button>
        <button className='btn btn-warning' onClick={()=>{deleteCart(item)}}>Delete</button>
       
      </div>
    </div>
  </div>
</div>
))}
 </div>

    </>
  )
}

export default Cart