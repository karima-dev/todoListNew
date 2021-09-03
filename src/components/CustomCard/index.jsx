import { Card } from "react-bootstrap";
import { cardProps,buttonProps } from "../../constants";
import bouton from '../CustomButton';
const index = ({
  width = cardProps.default.width,
  place = cardProps.default.place,
  url = cardProps.default.urlImage,
  titre=cardProps.default.titre,
  text=cardProps.default.text,
  boutonprop=buttonProps,
}) => {
  return (
    <div style={{marginLeft:'10px'}}>
    <Card style={{ width: width}}>
      <Card.Img variant={place} src={url} />
      <Card.Body>
        <Card.Title>{titre}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
         
        <bouton color={boutonprop.color} text={boutonprop.text}/>
      </Card.Body>
    </Card>
    </div>
  );
};
export default index;
