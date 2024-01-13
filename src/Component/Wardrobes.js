import React from 'react';
import './Wardrobe.css';

function Wardrobes() {
  return (
    <div className='MainWardrobe'>
      <div className="WardrobeHeader">
        <h2>Wardrobes</h2>
      </div>
      <div className="WardrobesContainer">
        <div className='WardrobesImage'>
          <div className='Wimg1'><img src='https://watermark.lovepik.com/photo/20211119/large/lovepik-warm-color-bedroom-wardrobe-picture_500297856.jpg' alt="wardrobe 1" /></div>
        
          <div className='Wimg3'><img src='https://images.unsplash.com/photo-1672137233327-37b0c1049e77?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdhcmRyb2JlJTIwZGVzaWdufGVufDB8fDB8fHww' alt="wardrobe 3" /></div>
          <div className='Wimg4'><img src='https://images.unsplash.com/photo-1611048268330-53de574cae3b?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2FyZHJvYmV8ZW58MHx8MHx8fDA%3D' alt="wardrobe 4" /></div>
        </div>
      </div>
    </div>
  );
}

export default Wardrobes;
