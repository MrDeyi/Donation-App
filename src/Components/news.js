import { Navbar, Container, Nav,Form, FormControl, Button,Card,Row,Col } from 'react-bootstrap';
function News(props){
    return(
        <>
        <Card className="d-flex my-2 mx-3 " style={{ width: '40rem',background: '#b5aeb2'  }}>
     <Card.Body className="d-flex">
     <img variant="bottom" src={props.image1} width="150px" height="150px"  />
      <Container>
          <Row>
          <Card.Text>
        {props.name}
       </Card.Text>
          </Row>
          <Row>
          <Card.Text>
         {props.description}
       </Card.Text>
          </Row>
         
      </Container>
     </Card.Body>
     
     </Card>
     </>
    )
}
export default News