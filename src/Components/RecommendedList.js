import { Container,Row,Col } from "react-bootstrap";
import Recommended from "./Recommended";
function RecList(){
    const recData=[{image1:'rice.jpg',name:'RICE'},
    {image1:'potapoes.jpg',name:'POTATOES'},
    {image1:'meat.jpg',name:'MEAT'},
    {image1:'maize meal.jpg',name:'MAIZE MEAL'},
    {image1:'mixed vegetable.jpg',name:'MIXED VEGETABLE'},
    {image1:'hamper.jpg',name:'HAMPER'},
    {image1:'canned food.jpg',name:'CANNED FOOD'},
    {image1:'bread.jpg',name:'BREAD'},
]
    return(
        <Container>
        <Row>
         
         {recData.map(data => <Col><Recommended
           image1={data.image1}
           name={data.name}
          /></Col>)}
         
        </Row>
        
        
         </Container>
    );
}
export default RecList