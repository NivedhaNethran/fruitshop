import React from 'react'
import './Fruits.css'
import apple from '../images/apple.jpg'
import Rasberry from '../images/Rasberry.jpg'
import grapes from '../images/grapes.jpg'
import applebar from '../images/applebar.jpg'
import lychee from '../images/lychee.jpg'
import muskmelon from '../images/muskmelon.jpg'
import Orange from '../images/Orange.jpg'
import Strawberry from '../images/Strawberry.jpg'
import { useDispatch, useSelector } from 'react-redux';
import Pro from './Pro'
import { addToCart, deleteFromCart } from '../store/cartslice/Cartslice'


const Fruits = () => {
    const cartProducts=useSelector((state)=>state.cart.cartItems)
    const dispatch=useDispatch();
    const addCart=(item)=>{
        dispatch(addToCart(item));
    }
    const deleteCart=(item)=>{
        dispatch(deleteFromCart(item));
    }
  return (
    <>
   
        <div classNameName='container'>
            <div classNameName='row '>
                {Pro.map((item)=>(
                <div className="col-lg-3 ab">
                    <div classNameName="card" key={item.id}>
                    <img src={item.image} className="card-img-top" alt="..."/>
                    <div className="card-body bd">
                    <p classNameName="card-text hub">{item.title}</p>
                    <p classNameName="card-text hub">{item.price}</p>
                    {cartProducts.find(items=>items.id===item.id)?(
                <button classNameName='btn btn-primary' onClick={()=>deleteCart(item)}>Remove from Cart</button>):(
                <button classNameName='btn btn-success' onClick={()=>addCart(item)}>Add to Cart</button> )
                }
                    </div>
                    </div>
                </div>
                ))}
                {/* <div className="col-lg-3 ab">
                    <div className="card" >
                    <img src={muskmelon} className="card-img-top" alt="..."/>
                    <div className="card-body bd"><p className="card-text">Muskmelon</p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 ab">
                    <div className="card" >
                    <img src={Orange} className="card-img-top" alt="..."/>
                    <div className="card-body bd"><p className="card-text">Orange</p>
                    </div>
                    </div>
                </div> */}
                {/* <div className="col-lg-3 ab">
                    <div className="card" >
                    <img src={Strawberry} className="card-img-top" alt="..."/>
                    <div className="card-body bd"><p className="card-text">Strawberry</p>
                    </div>
                    </div>
                </div> */}
                
            </div>
    
        </div>
        {/* <div classNameName='container im'>
            <div classNameName='row '>
                <div className="col-lg-3 cd">
                    <div className="card" >
                    <img src={apple} className="card-img-top" alt="..."/>
                    <div className="card-body yz"><p className="card-text">Apple</p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 cd">
                    <div className="card" >
                    <img src={grapes} className="card-img-top" alt="..."/>
                    <div className="card-body yz"><p className="card-text">Grapes</p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 cd">
                    <div className="card" >
                    <img src={Rasberry} className="card-img-top" alt="..."/>
                    <div className="card-body yz"><p className="card-text">Rasberry</p>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 cd">
                    <div className="card" >
                    <img src={applebar} className="card-img-top" alt="..."/>
                    <div className="card-body yz"><p className="card-text">Green apple</p>
                    </div>
                    </div>
                </div>
            </div>
        </div> */}
       
    </>
  )
}

export default Fruits