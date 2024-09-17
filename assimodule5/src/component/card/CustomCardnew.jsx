
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import product6 from '../card/image/product6.jpg'; 
import product7 from '../card/image/product7.jpg'; 
import product8 from '../card/image/product8.jpg'; 
import product9 from '../card/image/product9.jpg'; 
import product10 from '../card/image/product10.jpg'; 



const CustomCardnew = () => {
 
  return (
    <div>
     <div>
     
      <Container className="my-4"> {/* Adds margin to the top and bottom */}
      <Row>
        <Col className="mb-4"> {/* mb-4 adds margin-bottom */}
          <Card style={{ width: '14rem' , border: "none" }}>
            <Card.Img variant="top" src={product6} />
            {/* <Card.Body>
              <Card.Title>Card 1</Card.Title>
              <Card.Text>Seeds of Change Organic Quinoa, Brown</Card.Text>
            </Card.Body> */}
            {/* <ListGroup className="list-group-flush"> */}
              <ListGroup.Item >Chobani Complete Vanilla Greek Yogurt</ListGroup.Item> <br />
              <ListGroup.Item>By <span style={{color :'#3bb77e'}}>NestFood</span></ListGroup.Item> <br />
              <ListGroup.Item > <span style={{color :'#3bb77e', fontWeight : '700'}}>$150</span>
                   <Button  style={{margin:'0 50px'  , background:'#3bb77e' , border : 'none'}}> Add</Button>
            </ListGroup.Item>
              {/* <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
            {/* </ListGroup> */}
            {/* <Card.Body>
           
            
             
            </Card.Body> */}
          </Card>
        </Col>

        <Col className="mb-4"> {/* mb-4 adds margin-bottom */}
          <Card style={{ width: '14rem' , border: "none" }}>
            <Card.Img variant="top" src={product7} />
            {/* <Card.Body>
              <Card.Title>Card 2</Card.Title>
              <Card.Text>This is some text for card 2.</Card.Text>
            </Card.Body> */}
            {/* <ListGroup className="list-group-flush"> */}
              <ListGroup.Item>Canada Dry Ginger Ale – 2 L Bottle</ListGroup.Item> <br />
              <ListGroup.Item>By <span style={{color :'#3bb77e'}}>NestFood</span> </ListGroup.Item> <br />
              <ListGroup.Item><span style={{color :'#3bb77e', fontWeight : '700'}}>$98</span>
              <Button  style={{margin:'0 70px'  , background:'#3bb77e' , border : 'none'}}> Add</Button>
              </ListGroup.Item>
             
              {/* <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
            {/* </ListGroup> */}
            {/* <Card.Body>
           
              <Card.Link href="#">Card Link 2</Card.Link>
              <Card.Link href="#">Another Link 2</Card.Link>
            </Card.Body> */}
          </Card>
        </Col>

        <Col className="mb-4"> {/* mb-4 adds margin-bottom */}
          <Card style={{ width: '14rem' , border: "none" }}>
            <Card.Img variant="top" src={product8} />
            {/* <Card.Body>
              <Card.Title>Card 3</Card.Title>
              <Card.Text>This is some text for card 3.</Card.Text>
            </Card.Body> */}
            {/* <ListGroup className="list-group-flush"> */}
              <ListGroup.Item>Encore Seafoods Stuffed Alaskan</ListGroup.Item> <br />
              <ListGroup.Item>By <span style={{color :'#3bb77e'}}>NestFood</span> </ListGroup.Item> <br />
              <ListGroup.Item><span style={{color :'#3bb77e', fontWeight : '700'}}>$24</span>
              <Button  style={{margin:'0 50px'  , background:'#3bb77e' , border : 'none'}}> Add</Button>
              </ListGroup.Item>
              {/* <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
            {/* </ListGroup> */}
            {/* <Card.Body> */}
            {/* <ListGroup.Item><span style={{color :'#3bb77e', fontWeight : '700'}}>$35</span></ListGroup.Item> */}
              {/* <Card.Link href="#">Card Link 3</Card.Link>
              <Card.Link href="#">Another Link 3</Card.Link> */}
            {/* </Card.Body> */}
          </Card>
        </Col>

        <Col className="mb-4"> {/* mb-4 adds margin-bottom */}
          <Card style={{ width: '14rem' , border: "none" }}>
            <Card.Img variant="top" src={product9} />
            {/* <Card.Body>
              <Card.Title>Card 4</Card.Title>
              <Card.Text>This is some text for card 4.</Card.Text>
            </Card.Body> */}
            {/* <ListGroup className="list-group-flush"> */}
              <ListGroup.Item>Gorton’s Beer Battered Fish Fillets</ListGroup.Item> <br />
              <ListGroup.Item>By <span style={{color :'#3bb77e'}}>NestFood</span> </ListGroup.Item> <br />
              <ListGroup.Item><span style={{color :'#3bb77e', fontWeight : '700'}}>$146</span>
              <Button  style={{margin:'0 50px'  , background:'#3bb77e' , border : 'none'}}> Add</Button>
              </ListGroup.Item>
              {/* <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
            {/* </ListGroup> */}
            {/* <Card.Body> */}
            {/* <ListGroup.Item><span style={{color :'#3bb77e', fontWeight : '700'}}>$55</span></ListGroup.Item> */}
              {/* <Card.Link href="#">Card Link 4</Card.Link>
              <Card.Link href="#">Another Link 4</Card.Link> */}
            {/* </Card.Body> */}
          </Card>
        </Col>

        <Col className="mb-4"> {/* mb-4 adds margin-bottom */}
          <Card style={{ width: '14rem' , border: "none" }}>
            <Card.Img variant="top" src={product10} />
            {/* <Card.Body>
              <Card.Title>Card 5</Card.Title>
              <Card.Text>This is some text for card 5.</Card.Text>
            </Card.Body> */}
            {/* <ListGroup className="list-group-flush"> */}
              <ListGroup.Item>Haagen-Dazs Caramel Cone Ice Cream</ListGroup.Item> <br />
              <ListGroup.Item>By <span style={{color :'#3bb77e'}}>NestFood</span> </ListGroup.Item> <br />
              <ListGroup.Item><span style={{color :'#3bb77e', fontWeight : '700'}}>$67</span>
              <Button  style={{margin:'0 50px'  , background:'#3bb77e' , border : 'none'}}> Add</Button>
              </ListGroup.Item>
              {/* <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
            {/* </ListGroup> */}
            {/* <Card.Body> */}
            {/* <ListGroup.Item><span style={{color :'#3bb77e', fontWeight : '700'}}>$110</span></ListGroup.Item> */}
              {/* <Card.Link href="#">Card Link 5</Card.Link>
              <Card.Link href="#">Another Link 5</Card.Link> */}
            {/* </Card.Body> */}
          </Card>
        </Col>
      </Row>
    </Container>
    </div>

    </div>
  )
}

export default CustomCardnew