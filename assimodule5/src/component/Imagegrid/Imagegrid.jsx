import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import banner1 from '../Imagegrid/image/banner1.png'; 
import banner2 from '../Imagegrid/image/banner2.png';
import banner3 from '../Imagegrid/image/banner3.png';  


const Imagegrid = () => {
  return (
    <div>
      <Container className="my-4">  {/* Adds margin to the top and bottom */}
        <Row>
          <Col className="p-2">  {/* Adds padding to each column */}
            <img src={banner1} alt="Image 1" className="img-fluid" />
            
          </Col>
          <Col className="p-2">
            <img src={banner2} alt="Image 2" className="img-fluid" />
          </Col>
          <Col className="p-2">
            <img src={banner3} alt="Image 3" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Imagegrid;