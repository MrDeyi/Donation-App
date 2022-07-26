import { Navbar, Container, Nav,Form, FormControl, Button,Row,Col } from 'react-bootstrap';
import { useContext } from 'react';

function SignUp() {
 
    return ( 
        
        <Container className="my-5"style={{ width: '25rem',height:'28rem',background: '#821482',color:'white'  }}>
        <Row>
            <Col></Col>
            <Col>   <Form >
   <Form.Group className="mb-3" controlId="formBasicEmail">
     <Form.Label>First Name</Form.Label>
     <Form.Control type="text" placeholder="firstName" />
     <Form.Label>Last Name</Form.Label>
     <Form.Control type="text" placeholder="LastName" />
     <Form.Label>Type of User</Form.Label>
     <Form.Select aria-label="Default select example">
    
  
  <option value="1">DONOR</option>
  <option value="2">DROPOFF</option>
  <option value="3">HOSPITAL</option>
</Form.Select>
     
     <Form.Label>Email address</Form.Label>
     <Form.Control type="email" placeholder="Enter email" />
     
   </Form.Group>
 
   <Form.Group className="mb-3" controlId="formBasicPassword">
     <Form.Label>Password</Form.Label>
     <Form.Control type="password" placeholder="Password" />
   </Form.Group>
   <Form.Group className="w-5" controlId="formBasicCheckbox">
     
   </Form.Group>
   <Button variant="primary" type="submit">
     Register
   </Button>
 </Form></Col>
 <Col></Col>
        </Row>
         </Container>
     );
    
}
export default SignUp;