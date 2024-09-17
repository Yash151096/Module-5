import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import sliderimage1 from './images/sliderimage1.png';
import sliderimage2 from './images/sliderimage2.png';
import sliderimage3 from './images/sliderimage3.png';
import sliderimage4 from './images/sliderimage4.png';
import sliderimage5 from './images/sliderimage5.png';
import sliderimage6 from './images/sliderimage6.png';
import sliderimage7 from './images/sliderimage7.png';
import sliderimage8 from './images/sliderimage8.png';
import sliderimage9 from './images/sliderimage9.png';
import sliderimage10 from './images/sliderimage10.png';
import sliderimage11 from './images/sliderimage11.png';
//import './sliderimage.css';

const Slider1 = () => {
  return (
    <div>
      <h1>Featured Categories</h1>
      
       <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <div className="col-md-auto text-center">
          <div className="image-container">
            <img src={sliderimage1} alt="Image 1" className="grid-image" />
            <div className="caption">
              <h2>Cake & Milks</h2>
              <p>26 items</p>
            </div>
          </div>
          <div className="image-container">
            <img src={sliderimage2} alt="Image 2" className="grid-image" />
            <div className="caption">
              <h2>Organic KiWi</h2>
              <p>26 items</p>
            </div>
          </div>
          <div className="image-container">
            <img src={sliderimage3} alt="Image 3" className="grid-image" />
            <div className="caption">
              <h2>Peach</h2>
              <p>26 items</p>
            </div>
          </div>
          <div className="image-container">
            <img src={sliderimage4} alt="Image 4" className="grid-image" />
            <div className="caption">
              <h2>Red Apple</h2>
              <p>26 items</p>
            </div>
          </div>
          <div className="image-container">
            <img src={sliderimage5} alt="Image 5" className="grid-image" />
            <div className="caption">
              <h2>Snack</h2>
              <p>26 items</p>
            </div>
          </div>
          <div className="image-container">
            <img src={sliderimage6} alt="Image 6" className="grid-image" />
            <div className="caption">
              <h2>Strawberry</h2>
              <p>26 items</p>
            </div>
          </div>
          <div className="image-container">
            <img src={sliderimage7} alt="Image 7" className="grid-image" />
            <div className="caption">
              <h2>Black plum</h2>
              <p>26 items</p>
            </div>
          </div>
          <div className="image-container">
            <img src={sliderimage8} alt="Image 8" className="grid-image" />
            <div className="caption">
              <h2>Crustard apple</h2>
              <p>26 items</p>
            </div>
          </div>
          <div className="image-container">
            <img src={sliderimage9} alt="Image 9" className="grid-image" />
            <div className="caption">
              <h2>Coffe & Tea</h2>
              <p>26 items</p>
            </div>
          </div>
        </div>
    
        
        
      </Carousel.Item>
      
      <Carousel.Item>
      <div className="col-md-auto text-center">
     
     <div className="image-container">
    <img src={sliderimage10} alt="Image 10" className="grid-image" />
    <div className="caption">
      <h2>Headphone</h2>
      <p>26 items</p>
    </div>
  </div>
  <div className="image-container">
    <img src={sliderimage11} alt="Image 11" className="grid-image" />
    <div className="caption">
      <h2>Vegetebles</h2>
      <p>26 items</p>
    </div>
  </div>
      
       
 
</div>
      </Carousel.Item>
      
    </Carousel> 
    </div>
  )
}

export default Slider1