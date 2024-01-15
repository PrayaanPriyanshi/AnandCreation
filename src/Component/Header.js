// import React from 'react'
// import { FiPhoneCall } from "react-icons/fi";
// import { HiOutlineMailOpen } from "react-icons/hi";
// import { FaFacebook } from "react-icons/fa";
// import { FaSquareInstagram } from "react-icons/fa6";
// import './Header.css'; 
// function Header() {
//   return (
//     <div className='main div'>
//     <div className='pleft'>
//     <div className='phoneIcon'><FiPhoneCall /></div>
//     <div className='phoneNo'>+919871094410,+91 9958088403</div>
//     <div className='email'><HiOutlineMailOpen />arancianoidancr@gmail.com</div></div>
   
//    <div className='firight'>
//     <div className='facebooklogo'><FaFacebook /></div>
//     <div className='instalogo'><FaSquareInstagram /></div>
//     </div>
     
//     </div>
//   )
// }

// export default Header



import React from 'react';
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import './Header.css'; // Import your existing CSS file

function Header() {
  return (
    <div className='main div flex justify-between items-center p-4'>
      <div className='pleft flex items-center'>
        <div className='phoneIcon'><FiPhoneCall /></div>
        <div className='phoneNo ml-2'>+919871094410, +91 9958088403</div>
        <div className='email ml-2'><HiOutlineMailOpen />arancianoidancr@gmail.com</div>
      </div>

      <div className='firight flex items-center'>
        <div className='facebooklogo mx-2'><FaFacebook /></div>
        <div className='instalogo mx-2'><FaSquareInstagram /></div>
      </div>
    </div>
  );
}

export default Header;

