
import { Navbar, Container, Nav,Form, FormControl, Button } from 'react-bootstrap';
import { useContext } from 'react';
function Navigation(props) {
  
    return ( 
        
    <Navbar  expand="lg" variant="dark" style={{ background: '#821482' }}>
    <Container fluid>
      <Navbar.Brand href="#"  className="my-2 mx-6 my-lg-0"><img src='Mylogo.png'width='50px' height='50px'/><b>WITS DONATION</b><i>We Care !!!</i> </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="/Login" > <Button variant="outline-light" size="sm">LOGIN</Button>{' '}</Nav.Link>
          <Nav.Link href="/SignUp"><Button variant="outline-light" size="sm">SIGNUP</Button>{' '}</Nav.Link>
         
        </Nav>
      
        
      </Navbar.Collapse>
    </Container>
  </Navbar>
    );
}
export default Navigation;