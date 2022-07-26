import { Container, Row } from "react-bootstrap"
import DonorNav from "./DonorNav"
import RecList from "./RecommendedList"


function DonorHome(){
 return(
    <Container>
    <Row>
     <DonorNav/>
    </Row>
    
    <Row>
    <h2>RECOMMENDED TYPES OF DONATIONS</h2>
    </Row>
    <Row>
      <RecList/>  
    </Row>
</Container>
 )
}
export default DonorHome