
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
// import product1 from '../card/image/product1.jpg'; 
// import product2 from '../card/image/product2.jpg'; 
// import product3 from '../card/image/product3.jpg'; 
// import product4 from '../card/image/product4.jpg'; 
// import product5 from '../card/image/product5.jpg'; 
import { useEffect, useState } from 'react';
import axios from 'axios';

function CustomCard() {
  const [data,setData] = useState([]);
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
    .then(res=>setData(res.data)
    )
  })
  return (
    <div>
      <h1>Popular Products</h1>
      <Container className="my-4"> {/* Adds margin to the top and bottom */}
      <Row>
        {
          data.map(i=>{
            return(
              <>
<Col className="mb-4"> {/* mb-4 adds margin-bottom */}
          <Card style={{ width: '14rem' , border: "none" }}>
            <Card.Img  style={{height:'12rem'}} variant="top" src={i.image} />
            {/* <Card.Body>
              <Card.Title>Card 1</Card.Title>
              <Card.Text>Seeds of Change Organic Quinoa, Brown</Card.Text>
            </Card.Body> */}
            {/* <ListGroup className="list-group-flush"> */}
              <ListGroup.Item >{i.title}</ListGroup.Item> <br />
              <ListGroup.Item>By <span style={{color :'#3bb77e'}}>{i.category}</span></ListGroup.Item> <br />
              <ListGroup.Item> <span style={{color :'#3bb77e', fontWeight : '700'}}>$ {i.price}</span>
                   <Button  style={{margin:'0 50px'  , background:'#3bb77e' , border : 'none'}}> Add</Button>
            </ListGroup.Item>
              {/* <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
            {/* </ListGroup> */}
            {/* <Card.Body>
           
            
             
            </Card.Body> */}
          </Card>
        </Col></>)
          })
        
}
       
      </Row>
    </Container>
    </div>
    

    
  );
}

export default CustomCard;