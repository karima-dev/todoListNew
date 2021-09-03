import CustomNavbar from "../../components/CustomNavbar";
import "./index.css";
import { customNavbarProps } from "../../constants";
const Header = () => {
  return <CustomNavbar {...customNavbarProps.default} />;
};
export default Header;
