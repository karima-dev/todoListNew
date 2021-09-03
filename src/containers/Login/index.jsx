//todo: setInputs({...inputs,email:event.target.value}); ??????????????
//todo: css div les deux ne fonctionnenet pas
//todo: router pb /
import  "./index.css";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { textInputProps, listeEmailPassword, buttonProps } from "../../constants";
import React, { useState } from "react";
import { searchInDatabase } from "../../utils/Stringutils";
 const Login = () => {
  const [inputs, setInputs] = useState({email:"",password:""});
  const [emailErreur,setemailErreur]=useState("");
  const [passwordErreur,setpasswordErreur]=useState("");
  const [success,setsuccess]=useState("");
  const handleChange = (event) => {
    
    switch (event.target.name){
      case textInputProps.email.name:
        setInputs({...inputs,email:event.target.value});
        setemailErreur("");
        break;
        case textInputProps.password.name:
        setInputs({...inputs,password:event.target.value});
        setpasswordErreur("");
        break;
        default:
          break;
    }
  };
   
   const handleClick=(event)=>{
    event.preventDefault();
    if (searchInDatabase(inputs.email,inputs.password,listeEmailPassword)===undefined)
    setemailErreur("Email inexistant");
    else if(searchInDatabase(inputs.email,inputs.password,listeEmailPassword)==='text1 requis'){
      setemailErreur("champ requis: Email");
    }
    else if(searchInDatabase(inputs.email,inputs.password,listeEmailPassword)==='text2 requis'){
      setpasswordErreur("champ requis: Password");
      
    }
    else if(searchInDatabase(inputs.email,inputs.password,listeEmailPassword)==='deux text requis'){
      setpasswordErreur("champ requis: Password");
      setemailErreur("champ requis: Email");
    }
    else if(searchInDatabase(inputs.email,inputs.password,listeEmailPassword).password===inputs.password){
       setsuccess("Connexion réussie");
    }
    else{
      setpasswordErreur("Password incorect");
    }
   };
    
  return (
    <div className='stylediv'>
      <h3>Login Form</h3>
      
      {<h4 className='stylediv2'>{success}</h4>}
      <CustomInput
        label={textInputProps.email.label}
        type={textInputProps.email.type}
        name={textInputProps.email.name}
        placeholder={textInputProps.email.placeholder}
        onChange={handleChange}
        
      ></CustomInput>
      <h6>{emailErreur}</h6>
      <CustomInput
        label={textInputProps.password.label}
        type={textInputProps.password.type}
        name={textInputProps.password.name}
        placeholder={textInputProps.password.placeholder}
        onChange={handleChange}
        
      ></CustomInput>
      <h6>{passwordErreur}</h6>
      <CustomButton color={buttonProps.color.success} text={buttonProps.text.submit} onClick={handleClick}/>
       
       
    </div>
  );
};
export default Login;
