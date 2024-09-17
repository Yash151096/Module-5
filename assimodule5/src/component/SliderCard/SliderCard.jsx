
import Slider from 'react-slick';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import product1 from '../card/image/product1.jpg'; 
import product2 from '../card/image/product2.jpg'; 
import product3 from '../card/image/product3.jpg'; 
import product4 from '../card/image/product4.jpg'; 
import product5 from '../card/image/product5.jpg'; 
import product6 from '../card/image/product6.jpg'; 
import product7 from '../card/image/product7.jpg'; 
import product8 from '../card/image/product8.jpg'; 
import product9 from '../card/image/product9.jpg'; 
import product10 from '../card/image/product10.jpg'; 
// import ProgressBar from 'react-bootstrap/ProgressBar';

const SliderCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    className: 'aero-slider'
  };

  return (
    <div>
      {/* <h1>Popular Products</h1> */}
      
      <Container className="my-3">
        <Slider {...settings} >
          <div className="d-flex justify-content-center">
            <Card style={{ width: '14rem' , border: "none"}}>
              <Card.Img variant="top" src={product1} />
              {/* <ListGroup className="list-group-flush"> */}
                <ListGroup.Item>Seeds of Change Organic Quinoa, Brown</ListGroup.Item>
                <ListGroup.Item>By <span style={{ color: '#3bb77e' }}>NestFood</span></ListGroup.Item>
                <ListGroup.Item>
                  <span style={{ color: '#3bb77e', fontWeight: '700' }}>$238.85</span>
                 
                </ListGroup.Item>
                {/* <ProgressBar variant="success" now={40} /> */}
                <ListGroup.Item>
                  
                  <Button style={{  background: '#3bb77e', border: 'none',padding :'10px 50px' }}>Add To Cart</Button>
                </ListGroup.Item>
              {/* </ListGroup> */}
              
            </Card>
          </div>

          <div className="d-flex justify-content-center">
            <Card style={{ width: '14rem', border: "none" }}>
              <Card.Img variant="top" src={product2} />
              {/* <ListGroup className="list-group-flush"> */}
                <ListGroup.Item>All Natural Italian-Style Chicken Meatballs</ListGroup.Item> 
                <ListGroup.Item>By <span style={{ color: '#3bb77e' }}>NestFood</span></ListGroup.Item> 
                <ListGroup.Item>
                  <span style={{ color: '#3bb77e', fontWeight: '700' }}>$78</span>
                  
                </ListGroup.Item>
                <ListGroup.Item>
                  
                  <Button style={{ background: '#3bb77e', border: 'none' ,padding :'10px 50px' }}>Add To Cart</Button>
                </ListGroup.Item>
              {/* </ListGroup> */}
            </Card>
          </div>

          {/* Add more slides here */}
          {/* Example: */}
          <div className="d-flex justify-content-center">
            <Card style={{ width: '14rem', border: "none" }}>
              <Card.Img variant="top" src={product3} />
              {/* <ListGroup className="list-group-flush"> */}
                <ListGroup.Item>Angie’s Boomchickapop Sweet & Salty</ListGroup.Item>
                <ListGroup.Item>By <span style={{ color: '#3bb77e' }}>NestFood</span></ListGroup.Item>
                <ListGroup.Item>
                  <span style={{ color: '#3bb77e', fontWeight: '700' }}>$35</span>
                 
                </ListGroup.Item>
                <ListGroup.Item>
                  
                  <Button style={{  background: '#3bb77e', border: 'none' ,padding :'10px 50px' }}>Add To Cart</Button>
                </ListGroup.Item>
              {/* </ListGroup> */}
            </Card>
          </div>
          <div className="d-flex justify-content-center">
            <Card style={{ width: '14rem', border: "none" }}>
              <Card.Img variant="top" src={product4} />
              {/* <ListGroup className="list-group-flush"> */}
                <ListGroup.Item>Foster Farms Takeout Crispy Classic</ListGroup.Item>
                <ListGroup.Item>By <span style={{ color: '#3bb77e' }}>NestFood</span></ListGroup.Item>
                <ListGroup.Item>
                  <span style={{ color: '#3bb77e', fontWeight: '700' }}>$55</span>
                  
                </ListGroup.Item>
                <ListGroup.Item>
                 
                  <Button style={{ background: '#3bb77e', border: 'none' ,padding :'10px 50px' }}>Add To Cart</Button>
                </ListGroup.Item>
              {/* </ListGroup> */}
            </Card>
          </div>
          <div className="d-flex justify-content-center">
            <Card style={{ width: '14rem', border: "none" }}>
              <Card.Img variant="top" src={product5} />
              {/* <ListGroup className="list-group-flush"> */}
                <ListGroup.Item>Green Diamond Almonds Lightly From Oska</ListGroup.Item>
                <ListGroup.Item>By <span style={{ color: '#3bb77e' }}>NestFood</span></ListGroup.Item>
                <ListGroup.Item>
                  <span style={{ color: '#3bb77e', fontWeight: '700' }}>$110</span>
                  
                </ListGroup.Item>
                <ListGroup.Item>
                  
                  <Button style={{  background: '#3bb77e', border: 'none' ,padding :'10px 50px'  }}>Add To Cart</Button>
                </ListGroup.Item>
              {/* </ListGroup> */}
            </Card>
          </div>
          <div className="d-flex justify-content-center">
            <Card style={{ width: '14rem', border: "none" }}>
              <Card.Img variant="top" src={product6} />
              {/* <ListGroup className="list-group-flush"> */}
                <ListGroup.Item>Chobani Complete Vanilla Greek Yogurt</ListGroup.Item>
                <ListGroup.Item>By <span style={{ color: '#3bb77e' }}>NestFood</span></ListGroup.Item>
                <ListGroup.Item>
                  <span style={{ color: '#3bb77e', fontWeight: '700' }}>$150</span>
                  
                </ListGroup.Item>
                <ListGroup.Item>
                 
                  <Button style={{  background: '#3bb77e', border: 'none' ,padding :'10px 50px' }}>Add To Cart</Button>
                </ListGroup.Item>
              {/* </ListGroup> */}
            </Card>
          </div>
          <div className="d-flex justify-content-center">
            <Card style={{ width: '14rem', border: "none" }}>
              <Card.Img variant="top" src={product7} />
              {/* <ListGroup className="list-group-flush"> */}
                <ListGroup.Item>Canada Dry Ginger Ale – 2 L Bottle</ListGroup.Item>
                <ListGroup.Item>By <span style={{ color: '#3bb77e' }}>NestFood</span></ListGroup.Item>
                <ListGroup.Item>
                  <span style={{ color: '#3bb77e', fontWeight: '700' }}>$98</span>
                  
                </ListGroup.Item>
                <ListGroup.Item>
                 
                  <Button style={{  background: '#3bb77e', border: 'none' ,padding :'10px 50px' }}>Add To Cart</Button>
                </ListGroup.Item>
              {/* </ListGroup> */}
            </Card>
          </div>
          <div className="d-flex justify-content-center">
            <Card style={{ width: '14rem', border: "none" }}>
              <Card.Img variant="top" src={product8} />
              {/* <ListGroup className="list-group-flush"> */}
                <ListGroup.Item>Encore Seafoods Stuffed Alaskan</ListGroup.Item>
                <ListGroup.Item>By <span style={{ color: '#3bb77e' }}>NestFood</span></ListGroup.Item>
                <ListGroup.Item>
                  <span style={{ color: '#3bb77e', fontWeight: '700' }}>$24</span>
                 
                </ListGroup.Item>
                <ListGroup.Item>
                 
                  <Button style={{  background: '#3bb77e', border: 'none' ,padding :'10px 50px' }}>Add To Cart</Button>
                </ListGroup.Item>
              {/* </ListGroup> */}
            </Card>
          </div>
          <div className="d-flex justify-content-center">
            <Card style={{ width: '14rem', border: "none" }}>
              <Card.Img variant="top" src={product9} />
              {/* <ListGroup className="list-group-flush"> */}
                <ListGroup.Item>Gorton’s Beer Battered Fish Fillets</ListGroup.Item>
                <ListGroup.Item>By <span style={{ color: '#3bb77e' }}>NestFood</span></ListGroup.Item>
                <ListGroup.Item>
                  <span style={{ color: '#3bb77e', fontWeight: '700' }}>$146</span>
                  
                </ListGroup.Item>
                <ListGroup.Item>
                  
                  <Button style={{  background: '#3bb77e' ,padding :'10px 50px' }}>Add To Cart</Button>
                </ListGroup.Item>
              {/* </ListGroup> */}
            </Card>
          </div>
          <div className="d-flex justify-content-center">
            <Card style={{ width: '14rem', border: "none" }}>
              <Card.Img variant="top" src={product10} />
              {/* <ListGroup className="list-group-flush"> */}
                <ListGroup.Item>Haagen-Dazs Caramel Cone Ice Cream</ListGroup.Item>
                <ListGroup.Item>By <span style={{ color: '#3bb77e' }}>NestFood</span></ListGroup.Item>

                <ListGroup.Item>
                  <span style={{ color: '#3bb77e', fontWeight: '700' }}>$67</span>
                  
                </ListGroup.Item>
                <ListGroup.Item>
                 
                  <Button style={{ background: '#3bb77e', border: 'none' ,padding :'10px 50px' }}>Add To Cart</Button>
                </ListGroup.Item>
              {/* </ListGroup> */}
            </Card>
          </div>
        </Slider>
      </Container>
    </div>
  );
}

export default SliderCard;