import { Card,Row,Col,Form,Button } from "react-bootstrap";
function Donate(){
    return(
        <Card style={{ width: '30rem', color:'white',background: '#821482'}}>
       <Card.Body>
       <form action="http://localhost:8080/upload" id="post" method="post" enctype="multipart/form-data" >
           <Row>
           <label>Product Name</label>
           <input type="text" name="name" />
           </Row>
           <Row>
           <label>Quantity</label>
           <input type="email" name="email" />
           </Row>
           <Row>
           <label> Select Drop OFF </label>
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
    );
}

export default Donate