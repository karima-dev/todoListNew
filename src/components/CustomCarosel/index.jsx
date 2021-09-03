import { Carousel } from "react-bootstrap";
import Slidess from "./Slides";
import { slidesProps,lesSlides } from "../../constants";
const index = ({lesSlides=slidesProps.default.slides}) => {
  return (
     <Carousel>
   
   {lesSlides.map((i)=>(
       
            <Slidess className={i.className} url={i.url} alt={i.alt} titre={i.titre} text={i.text}></Slidess>
             
        ))}
  
  
</Carousel> 
  );
};
export default index;
