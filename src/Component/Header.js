import React from 'react'
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import './Header.css'; 
function Header() {
  return (
    <div className='main div'>
    <div className='pleft'>
    <div className='phoneIcon'><FiPhoneCall /></div>
    <div className='phoneNo'>+919871094410,+91 9958088403</div>
    <div className='email'><HiOutlineMailOpen />arancianoidancr@gmail.com</div></div>
   
   <div className='firight'>
    <div className='facebooklogo'><FaFacebook /></div>
    <div className='instalogo'><FaSquareInstagram /></div>
    </div>
     
    </div>
  )
}

export default Header
