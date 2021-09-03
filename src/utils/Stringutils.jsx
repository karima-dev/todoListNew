 export const isTextExist = (text) => {
  return text ? true : false;
};
export const searchInDatabase = (text1, text2,liste) => {
  if (isTextExist(text1) === true && isTextExist(text2) === true) {
     return liste.find(text=>text.email===text1)
      
  } else if (isTextExist(text1) === false && isTextExist(text2) === false ) {
   return "deux text requis";
     
  } else if(isTextExist(text2) === false){
    return "text2 requis";
  }
  else if(isTextExist(text1) === false){
    return " text1 requis";
  }
};
export const isValidEmail = (text) => {
  const textRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return textRegExp.test(text);
};
