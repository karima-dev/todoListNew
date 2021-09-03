import { Carousel } from "react-bootstrap";
const Slides = ({ className, url, alt, titre, text }) => {
  return (
    <Carousel.Item>
      <img
        className={className}
        src={url}
        alt={alt}
      />
      <Carousel.Caption>
        <h3>{titre}</h3>
        <p>{text}</p>
      </Carousel.Caption>
    </Carousel.Item>
  );
};
export default Slides;
