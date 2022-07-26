import {Card,Carousel} from 'react-bootstrap'

function Cardd(props){

   return(
    <div className="my-3 ">
    <Card style={{ width: '18rem' }}>
<Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={props.image1}
      alt="First view"
      height="300"
    />
 
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={props.image2}
      alt="Second view"
      height="300"
    />

  </Carousel.Item>
  
</Carousel>
</Card>
</div>
   )
                
}
export default Cardd;