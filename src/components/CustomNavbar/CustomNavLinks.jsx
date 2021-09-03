import { Link } from "react-router-dom";
const CustomNavLinks = ({ href, text }) => {
  console.log("test", href, text);
  return <Link to={href}>{text}</Link>;
};
export default CustomNavLinks;
