import { Card,Carousel } from "react-bootstrap"

function Recommended(props){
    return(
        <div className="my-3 ">
        <Card style={{ width: '15rem' }}>
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.image1}
          alt="First view"
          height="300"
        />
     
      </Carousel.Item> 
    </Carousel>
    </Card>
    </div>
       )

}
export default Recommended