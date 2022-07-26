import { Col, Container, Row,Table,Button } from "react-bootstrap"
import CollectNav from "./collectNav"

function CollectionCenter(){
    return(
        <Container>
            <Row>
            <CollectNav/>
            </Row>
            <Row>
                <Col><Table striped bordered hover>
  <thead> <tr>
      <th>WISH LIST</th>
     
    </tr>

    <tr>
      <th>#</th>
      <th>Full Name</th>
      <th>Location</th>
      <th>Detailed View</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>hope child center</td>
      <td>ParkTown</td>
      <td><Button variant="primary" size="sm" >View</Button></td>
    </tr>
    <tr>
      <td>2</td>
      <td>Mandela Hospital</td>
      <td>Soweto</td>
      <td><Button variant="primary" size="sm" >View</Button></td>
    </tr>
    <tr>
      <td>3</td>
      <td>st mary Hospital</td>
      <td>Mtata</td>
      <td><Button variant="primary" size="sm" >View</Button></td>
    </tr>
  </tbody>
</Table></Col>
                <Col>
                <Table striped bordered hover>
  <thead> <tr>
      <th>DONATIONS</th>
     
    </tr>

    <tr>
      <th>#</th>
      <th>Full Name</th>
      <th>Location</th>
      <th>Detailed view</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark lane</td>
      <td>Cape Town</td>
      <td><Button variant="primary" size="sm" >View</Button></td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob Joseph</td>
      <td>KZN</td>
      <td><Button variant="primary" size="sm" >View</Button></td>
    </tr>
    <tr>
      <td>3</td>
      <td>Larry Bird</td>
      <td>Sandton</td>
      <td><Button variant="primary" size="sm" >View</Button></td>
    </tr>
  </tbody>
</Table>
                </Col>





                
            </Row>



        </Container>

    )
}
export default CollectionCenter