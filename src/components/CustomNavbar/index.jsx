import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { customNavbarProps, navLinks } from "../../constants";
import CustomNavLinks from "./CustomNavLinks";

const index = ({
  background = customNavbarProps.default.background,
  variant = customNavbarProps.default.variant,
  navHome = customNavbarProps.default.navHome,
  className = customNavbarProps.default.className,
  logo = customNavbarProps.default.logo,
  navLinks = customNavbarProps.default.navLinks
}) => {
  return (
    <Navbar bg={background} variant={variant}>
      <Container>
        <Navbar.Brand href={navHome}>{logo}</Navbar.Brand>
        <Nav className={className}>
          {navLinks.map((i) => (
            <CustomNavLinks
              key={i.keyLink}
              href={i.link}
              text={i.text}
            ></CustomNavLinks>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
};
export default index;
