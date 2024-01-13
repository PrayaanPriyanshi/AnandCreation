import React from 'react';
import './Footer.css'; 
import ac2Image from './ac2.jpg'; 
function Footer() {
  return (
    <div className='footerMain'>
      <div className='footer'>
        <div className='fdiv1'>
         
          <div className="navimg1" style={{ textAlign: 'center', padding: '5px',marginLeft:'5px' }}>
      <img src={ac2Image} alt="AC2 Image" style={{ width: '320px', borderRadius: '2px' ,height:'80px'}} />
    </div>
          <p>AanandCraetion understands the importance of the Kitchen and is responsible for redefining the Kitchen culture, contributing to an improved lifestyle.</p>
        </div>

        <div className='fdiv2'>
          <h4 className='fh2'>Get Started</h4>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Kitchen</li>
            <li>Wardrobes</li>
          </ul>
        </div>

        <div className='fdiv3'>
          <h4 className='fh3'>Contact Us</h4>
          <p>Phone: +919871094410</p>
          <p>Phone: +919958088403</p>
          <p>Email: 
          arancianoidancr@gmail.com</p>
          <p>Upper Ground Floor, Khan Market , Barola Main Market , Sector -49 Noida, UP 201301
          </p>
        </div>

        <div className='fdiv4'>
          <h4 className='fh4'>Powered By:</h4>
          <p style={{ fontSize: '16px', color: 'orange', fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }}>
          Aanand Creation
        </p>
        </div>
        </div>
    </div>
  );
}

export default Footer;
