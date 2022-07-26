import {Container,Navbar,Nav,Button,Modal,Form,Card,Row,Col} from "react-bootstrap";
import { useState } from "react";
function HospitalNav(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
return(
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
          <Nav.Link ><Button variant="outline-light" size="sm" onClick={handleShow} >Make a wishlist</Button>{' '}</Nav.Link>
         
        </Nav>
      
        
      </Navbar.Collapse>
      <Modal show={show} onHide={handleClose}  dialogClassName="modal-90w">
         <Modal.Header closeButton>CREATE A  Wishlist HERE!!</Modal.Header>
         <Modal.Body>
         <Card style={{ width: '30rem', color:'white',background: '#821482'}}>
       <Card.Body>
       <form action="http://localhost:8080/upload" id="post" method="post" enctype="multipart/form-data" >
           <Row>
           <label>Product Names</label>
           <textarea rows = "5" cols = "60" name = "description">
               </textarea>
           </Row>
           <Row>
           <label>Delivary</label>
           <input type="email" name="email" placeholder="yes or no" />
           </Row>
           <Row>
           <label> Preferred pick up point </label>
           <Form.Select aria-label="Default select example">
    
  
    <option value="1">Durban</option>
    <option value="2">East Londan</option>
    <option value="3">RoseBank</option>
    <option value="3">HillBrow</option>
    
  </Form.Select>
           </Row>
         
          <Row>
          <label>  </label>
          <Button type="submit" value="Send" variant="dark" >send</Button>
          </Row>
      
    </form>
       </Card.Body>
      </Card>
         </Modal.Body>
         
       </Modal>
      
    </Container>
  </Navbar>

);
}
export default HospitalNav