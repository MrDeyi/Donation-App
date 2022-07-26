import {Container,Row} from "react-bootstrap"
import HospitalNav from "./HospitalNav"
import RecList from "./RecommendedList"
function HospitalView(){
 return(
     <Container>
      <Row>
       <HospitalNav/>
      </Row>
      <Row><h2>Available Donations</h2></Row>
      <Row>
       <RecList/>
      </Row>

     </Container>

 )
}
export default HospitalView