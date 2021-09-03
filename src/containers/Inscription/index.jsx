import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { textInputProps } from "../../constants";
import { buttonProps } from "../../constants";
const Inscription=()=>{
return(
    <div>
<CustomInput label={textInputProps.email.label} type={textInputProps.email.type}></CustomInput>;
<CustomInput label={textInputProps.password.label} type={textInputProps.password.type}></CustomInput>;
<CustomButton color={buttonProps.color.primary} text={buttonProps.text.submit}/>
</div>
 
);
};
export default Inscription;