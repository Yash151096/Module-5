import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import logo from '../footer/image/logo.svg'

const Footer = () => {
  return (
    <Container fluid className="py-3">
      <Row>
        <Col md={4}>
        <img src={logo} alt="Logo" className="footer-logo" />
        <p>Awesome grocery store website template</p>
        <p><i style={{color : '#3bb77e'}} class="bi bi-pin-map"></i>&nbsp;<span style={{fontWeight :'500'}}>Address:</span> 5171 W Campbell Ave undefined Kent, Utah 53127 United States</p>
        <p><i style={{color : '#3bb77e'}} class="bi bi-telephone"></i>&nbsp;<span style={{fontWeight :'500'}}>Call Us:</span> (+91) - 540-025-124553</p>
        <p><i style={{color : '#3bb77e'}} class="bi bi-send"></i>&nbsp;<span style={{fontWeight :'500'}}>Email:</span> sale@Nest.com</p>
        <p><i style={{color : '#3bb77e'}} class="bi bi-watch"></i>&nbsp;<span style={{fontWeight :'500'}}>Hours:</span> 10:00 - 18:00, Mon - Sat</p>
        </Col>
        <Col md={2}>
          <h3>Company</h3>
          <p><a href="" className="footer-link" >About Us</a></p>
          <p><a href="" className="footer-link" >Delivery Information</a></p>
          <p><a href="" className="footer-link" >Privacy Policy</a></p>
          <p><a href="" className="footer-link" >Terms & Conditions</a></p>
          <p><a href="" className="footer-link" >Contact Us</a></p>
          <p><a href="" className="footer-link" >Support Center</a></p>
          <p><a href="" className="footer-link" >Careers</a></p>

        </Col>
        <Col md={2}>
        <h3>Account</h3>
        <p><a href="" className="footer-link" >Sign In</a></p>
          <p><a href="" className="footer-link" >View Cart</a></p>
          <p><a href="" className="footer-link" >My Wishlist</a></p>
          <p><a href="" className="footer-link" >Track My Order</a></p>
          <p><a href="" className="footer-link" >Help Ticket</a></p>
          <p><a href="" className="footer-link" >Shipping Details</a></p>
          <p><a href="" className="footer-link" >Compare products</a></p>
        </Col>
        <Col md={2}>
        <h3>Corporate</h3>
        <p><a href="" className="footer-link" >Become a Vendor</a></p>
          <p><a href="" className="footer-link" >Affiliate Program</a></p>
          <p><a href="" className="footer-link" >Farm Business</a></p>
          <p><a href="" className="footer-link" >Farm Careers</a></p>
          <p><a href="" className="footer-link" >Our Suppliers</a></p>
          <p><a href="" className="footer-link" >Accessibility</a></p>
          <p><a href="" className="footer-link" >Promotions</a></p>
        </Col>
        <Col md={2}>
        <h3>Popular</h3>
        <p><a href="" className="footer-link" >Milk & Flavoured Milk</a></p>
          <p><a href="" className="footer-link" >Butter and Margarine</a></p>
          <p><a href="" className="footer-link" >Eggs Substitutes</a></p>
          <p><a href="" className="footer-link" >Marmalades</a></p>
          <p><a href="" className="footer-link" >Sour Cream and Dips</a></p>
          <p><a href="" className="footer-link" >Tea & Kombucha</a></p>
          <p><a href="" className="footer-link" >Cheese</a></p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;