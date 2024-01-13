import React from 'react'
import './Contact.css';
import { TfiEmail } from "react-icons/tfi";

import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa6";
function Contact() {
  return (
    <div className='ContactMain'>
    <div className="ContactHeader">
    <h2>Contact</h2>
  </div>
  <div className='BottomLeft'>
  <h2>Contact Us</h2>
  <div className='Bottom1'>
 
  <FaLocationArrow />
  <p>Upper Ground Floor , Khan Market , Barola Main Market , Sector-49 Noida , UP 201301</p>
  </div>
<div className='Bottom2'>
<FaPhoneVolume />
<span>Call Now</span>
<span>+91- 9958088403</span>
<span>+91- 9871094410</span>
</div>
<div className='Bottom3'><TfiEmail />
<span>Email</span>
<p>arancianoidancr@gmail.com</p>
</div>
</div>
  <div className='BottomRight'>
  <h1>Contact</h1><br></br>
<input type='text' placeholder='Name'></input>
<input type='text' placeholder='Email'></input>
<input type='text' placeholder='Mobile No.'></input>
<input type='textarea' placeholder='Message'></input>
<button>Send</button></div>
    </div>
  )
}

export default Contact
