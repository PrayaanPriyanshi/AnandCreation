





import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import AboutUs from './Component/AboutUs';
import Kitchens from './Component/Kitchens';
import Wardrobes from './Component/Wardrobes';
import Contact from './Component/Contact';
import Header from './Component/Header';
import RangeCharme from './Component/RangeCharme';
import RangeArmoise from './Component/RangeArmoise';
import RangeAcacia from './Component/RangeAcacia';
import RangeArgentine from './Component/RangeArgentine';
import RangeCeramic from './Component/RangeCeramic';
import RangeRonce from './Component/RangeRonce';
import RangeVeneris from './Component/RangeVeneris';
import Footer from './Component/Footer';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Navbar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/kitchens" element={<Kitchens />} />
          <Route path="/wardrobes" element={<Wardrobes />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/range-charme" element={<RangeCharme></RangeCharme>} />
          <Route path="/range-acacia" element={<RangeAcacia></RangeAcacia>} />
          <Route path="/range-argentine" element={<RangeArgentine></RangeArgentine>} />
          <Route path="/range-aromise" element={<RangeArmoise></RangeArmoise>} />
          <Route path="/range-ceramic" element={<RangeCeramic></RangeCeramic>} />
          <Route path="/range-ronce" element={<RangeRonce></RangeRonce>} />
          <Route path="/range-veneris" element={<RangeVeneris></RangeVeneris>} />
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;






// import React from 'react'
// import Header from './Component/Header'
// import Navbar from './Component/Navbar'
// import ImageSlider from './Component/ImageSlider'
// import Info from './Component/Info'
// import Footer from './Component/Footer'

// function App() {
//   return (
//     <div>
//     <Header></Header>
//     <Navbar></Navbar>
//     <ImageSlider></ImageSlider>
//     <Info></Info>
//     <Footer></Footer>
   
  
//     </div>
//   )
// }

// export default App
