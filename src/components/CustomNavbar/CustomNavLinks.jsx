import Nav from "react-bootstrap/Nav";
const CustomNavLinks = ({ keyLink, link, text }) => {
  return <Nav.Link key={keyLink} href={link}>{text}</Nav.Link>;
};
export default CustomNavLinks;
