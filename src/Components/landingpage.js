import { Container,Row,Col } from "react-bootstrap";
import Navigation from "./Navigation";
import Cardd from "./card";
import NewsList from "./newsList";
function LandingPage(){
    return(
        <Container>
        <Row> <Navigation/></Row>
        <Row>
            <Col xs lg="3"><Cardd image2={'data:image/jpeg;base64,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'}image1={'data:image/jpeg;base64,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'}/>
            
            
            <Cardd
            image1={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS87b0FVshHaYcIj55tUhEV5oDe4cI7VTPmvg&usqp=CAU'}
            image2={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXUt42zF8aGFWBrDpZWZo9JRiLKofhNVjeuA&usqp=CAU'}
            />
            </Col>

            
            <Col><NewsList/></Col>
        </Row>
        

        </Container>
       
    );
}
export default LandingPage;