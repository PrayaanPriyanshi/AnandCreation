import React from 'react';
import './Contact.css';
import { FaPhoneVolume, FaLocationArrow } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { MdOutlinePhoneAndroid, MdAttachEmail } from 'react-icons/md';

function Contact() {
  return (
    <div className="ContactMain">
      <div className="ContactHeader">
        <h2>Contact Us</h2>
      </div>
      <div className='Bottom1'>
      <div className="BottomLeft">
        <h2  style={{
          fontSize: '30px',
          color: 'orange',
          fontWeight: 'bold',
          marginLeft: '40px'}}>Contact Us</h2>
        <div className="Bottom1">
          <FaLocationArrow />
          <p>Upper Ground Floor, Khan Market, Barola Main Market, Sector-49 Noida, UP 201301</p>
        </div>
        <div className="Bottom2">
          <FaPhoneVolume />
          <span>Call Now</span>
          <span>+91-9958088403</span>
          <span>+91-9871094410</span>
        </div>
        <div className="Bottom3">
          <MdAttachEmail />
          <span>Email</span>
          <p>arancianoidancr@gmail.com</p>
        </div>
      </div>
      <div className="BottomRight">
        <h1 style={{
          fontSize: '30px',
          color: 'orange',
          fontWeight: 'bold',
          marginLeft: '40px'}}>Write US</h1>
        <br></br>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Mobile No." />
        <input type="textarea" placeholder="Message" />
        <button>Send</button>
      </div>
      </div>
      
    </div>
  );
}

export default Contact;
