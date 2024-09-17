
// import styles from './Header.module.css'; 
import './Style.css'
// import logo from '../../assets/logo.svg';
import logo from '../../assets/logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import compareIcon from '../../assets/image/icon-compare.svg'; // Adjust the path as necessary
import heartIcon from '../../assets/image/icon-heart.svg';
import cartIcon from '../../assets/image/icon-cart.svg';
import accountIcon from '../../assets/image/icon-user.svg';
import hotIcon from '../../assets/image/icon-hot.svg';
import headphoneIcon from '../../assets/image/icon-headphone.svg';
//import slider from '../slider/silder';
import Button from 'react-bootstrap/Button';

const Header = () => {
    return (
        <>
            {/* <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                    </Navbar.Collapse>          
                </Container>
            </Navbar> */}
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Row className="align-items-center w-100">
                            <Col>
                                <Nav>
                                    <Form.Select aria-label="Default select example" style={{width:'100px',height:'50px'}}>
                                        <option>Home</option>
                                        <option value="1">Home 1</option>
                                        <option value="2">Home 2</option>
                                        <option value="3">Home 3</option>
                                        <option value="4">Home 4</option>
                                    </Form.Select>
                                    <Nav.Link href="#About" style={{ margin: '10px' }}>About</Nav.Link>
                                    <Form.Select aria-label="Default select example" style={{width:'100px',height:'50px'}}>
                                        <option>Shop</option>
                                        <option value="1">Shop Grid Right Sidebar</option>
                                        <option value="2">Shop Grid Left Sidebar</option>
                                        <option value="3">Shop List Left Sidebar</option>
                                        <option value="4">Shop List Left Sidebar</option>
                                        <option value="5">Shop Wide</option>
                                        <option value="6">Shop Filter</option>
                                        <option value="7">Shop WishList</option>
                                        <option value="8">Shop Cart</option>
                                        <option value="9">Shop Checkout</option>
                                        <option value="10">Shop Compare</option>
                                    </Form.Select>
                                    <Form.Select aria-label="Default select example" style={{width:'110px',height:'50px'}}>
                                        <option>Vendros</option>
                                        <option value="1">Vendros Grid</option>
                                        <option value="2">Vendros List</option>
                                        <option value="3">Vendro Dashboard</option>
                                        <option value="4">Vendro Guide</option>
                                    </Form.Select>
                                    <Form.Select aria-label="Default select example" style={{width:'140px',height:'50px'}}>
                                        <option>Mega Menu</option>
                                        <option value="1">Fruit & Vegetables</option>
                                        <option value="2"> Meat & Poultry</option>
                                        <option value="3">Herbs & Seasoning</option>
                                        <option value="4">Cuts & Sprouts </option>
                                        <option value="5">Exotic Fruits & Veggis</option>
                                        <option value="6">Milks & Flavoured Milk</option>
                                        <option value="7">Butter and Margrine</option>
                                        <option value="8">Eggs Substitutes</option>
                                        <option value="9">Chicken</option>
                                    </Form.Select>
                                    <Form.Select aria-label="Default select example" style={{width:'80px',height:'50px'}}>
                                        <option>Blog</option>
                                        <option value="1">Blog Category Grid</option>
                                        <option value="2">Blog Category List</option>
                                        <option value="3">Blog Category Big</option>
                                        <option value="4">Blog Category Wide</option>
                                        <option value="5">Single Post</option>
                                    </Form.Select>
                                    <Form.Select aria-label="Default select example" style={{width:'100px',height:'50px'}}>
                                        <option>pages</option>
                                        <option value="1">About Us</option>
                                        <option value="2">Contact</option>
                                        <option value="3">My Account</option>
                                        <option value="4">Login</option>
                                        <option value="5">Regiter</option>
                                        <option value="6">Purchase Guide</option>
                                        <option value="7">Privacy Police</option>
                                        <option value="8">Terms of Service</option>
                                        <option value="8">404 Page</option>
                                    </Form.Select>
                                </Nav>
                            </Col>
                            <Col className="d-flex justify-content-end">
                                <Nav>
                                    <Nav.Link href="#Wishlist" style={{ margin: '10px' }}>
                                        <Image src={heartIcon} alt="Wishlist" width="24" height="24" /> Wishlist
                                    </Nav.Link>
                                    <Nav.Link href="#Cart" style={{ margin: '10px' }}>
                                        <Image src={cartIcon} alt="Cart" width="24" height="24" /> Cart
                                    </Nav.Link>
                                    <Nav.Link href="#Account" style={{ margin: '10px' }}>
                                        <Image src={accountIcon} alt="Account" width="24" height="24" /> Account
                                    </Nav.Link>
                                </Nav>
                            </Col>
                        </Row>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;