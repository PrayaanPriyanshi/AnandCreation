// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import ac2Image from './ac2.jpg'; 


function Navbar() {
  return (
    <div>
      <nav className='nav'>
      <div className="navimg1" style={{ textAlign: 'center', padding: '5px' }}>
      <img src={ac2Image} alt="AC2 Image" style={{ width: '320px', borderRadius: '2px' ,height:'80px'}} />
    </div>
    
        <div className="nav-items">
          <Link to="/" className='home'>HOME</Link>
          <Link to="/about-us" className='same'>ABOUT US</Link>
          <Link to="/kitchens" className='same'>KITCHENS</Link>
          <Link to="/wardrobes" className='same1'>WARDROBES</Link>
          <Link to="/contact" className='contact'>CONTACT US</Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;







// import React from 'react'
// import './Navbar.css';
// function Navbar() {

//     return (
//         <div>
//             <nav className='nav'>
//                 <div className="navimg1">
//                     <h1>AanandCreation</h1>
//                 </div>
//                 <div className="nav-items">
//                     <div className='home'>HOME</div>
                    
//                     <div className='same'>ABOUT US</div>
//                     <div className='same'>KITCHENS</div>
//                     <div className='same1'>WARDROBES</div>
//                     <div className='contact'>CONTECT US</div>
                   
//                 </div>
//             </nav>
            
//         </div>



//     )

// }
// export default Navbar;
