import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import blueberry from '../images/blueberry.jpg'


const Navbar = () => {
  return (
    <div className='pat'>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
<div className="logo"><img src={blueberry}alt=""/></div>
  <div className="container-fluid">
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav bat">
        <li className="nav-item">
          <Link className="nav-link active one" aria-current="page" href="#" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link one" href="#" to="/fruits" >Fruits</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link one" href="#"to="/cart">Cart</Link >
        </li>
        <li className="nav-item">
          <Link  className="nav-link one" href="#" to="/admin">Admin</Link >
        </li>
        <li className="nav-item">
          <Link  className="nav-link one" href="#" to="/update">Update</Link >
        </li>
      
      </ul>
    </div>
  </div>
</nav>



    </div>
  )
}

export default Navbar