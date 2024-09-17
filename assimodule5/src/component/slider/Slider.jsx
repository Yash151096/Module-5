import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import image1 from './images/image1.png'
import image2 from './images/image2.png'


const Slider = () => {
  return (
    <div>
    <Carousel data-bs-theme="dark">
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={image1}
        alt="First slide"
      />
      <Carousel.Caption>
        {/* <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={image2}
        alt="Second slide"
      />
      <Carousel.Caption>
        {/* <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
      </Carousel.Caption>
    </Carousel.Item>
   
  </Carousel>
    </div>
    
  )
}

export default Slider