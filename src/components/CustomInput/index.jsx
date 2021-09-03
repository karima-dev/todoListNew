import { getByDisplayValue } from "@testing-library/react";
import Form from "react-bootstrap/Form";
import { inputProps, buttonProps, textInputProps } from "../../constants";
import Button from "../CustomButton";
import "./index.css";
const index = ({
  label = textInputProps.default.label,
  type = textInputProps.default.type,
  placeholder = textInputProps.default.placeholder,
  onChange,
  name,
  className,
  value
}) => {
  return (
    <Form>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        className={className}
        value={value}
      />
    </Form>
  );
};
export default index;

/* import { textInputProps } from "../../constants";
import { textInputProps2 } from "../../constants";

const {
  defaults: { placeholder: placeholders, type: types}
} = textInputProps2;
const index = ({
  type = types,
  placeholder = placeholders,
}) => (
  <Form>
    <Form.Control type={type} placeholder={placeholder} />
  </Form>
);

export default index;
  */
