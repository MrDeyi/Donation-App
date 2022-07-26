import { Navbar, Container, Nav,Form, FormControl, Button,Modal } from 'react-bootstrap';
import { useContext,useState } from 'react';
import Donate from './Donate';
function DonorNav(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
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
          <Nav.Link href="/Logout" > <Button variant="outline-light" size="sm">LOGOUT</Button>{' '}</Nav.Link>
          <Nav.Link href="/About"><Button variant="outline-light" size="sm">ABOUT US</Button>{' '}</Nav.Link>
          <Nav.Link ><Button variant="outline-light" size="sm" onClick={handleShow}>Donate</Button>{' '}</Nav.Link>
         
        </Nav>
      
        
      </Navbar.Collapse>
      <Modal show={show} onHide={handleClose}  dialogClassName="modal-90w">
         <Modal.Header closeButton>CREATE A Donation HERE!!</Modal.Header>
         <Modal.Body>
          <Donate/>
         </Modal.Body>
         
       </Modal>
        
     
    </Container>
  </Navbar>

    
    );
}
export default DonorNav;