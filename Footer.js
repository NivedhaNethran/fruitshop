import React from 'react'
import './Footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div >
        <section className='blue'>
        <div className='container'>
            <div className='row '>
                <div className='col-lg-6'>
                    <div className='hat'>
                    <h4> About us</h4>
                    <h5>Sina Fruit Shop<b/></h5>
                    <h5>162 GN Mills<b/></h5>
                    <h5>Coimbatore<b/></h5>
                    </div>
                </div>
        <div className='col-lg-6 bat'>
            <FaFacebook />  
            <FaInstagram /> 
            <FaYoutube />
        </div>
    </div>
</div>
</section>
</div>
  )
}

export default Footer