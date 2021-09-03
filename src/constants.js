export const customNavbarProps = {
  default: {
    background: "primary",
    variant: "dark",
    navHome: "#home",
    className: "me-auto",
    logo: "My web site",
    navLink: [{ keyLink:"key5", link: "#home", text: "Homed" }],
  },
  dark: {
    background: "dark",
    variant: "dark",
    navHome: "#home",
    className: "me-auto",
  },
  light: {
    background: "light",
    variant: "light",
    navHome: "#home",
    className: "me-auto",
  },
};
export const logoProps = {
  url: "https://static.vecteezy.com/system/resources/thumbnails/002/229/196/small_2x/beauty-lotus-flowers-design-logo-template-icon-free-vector.jpg",

  default: {
    width: "50px",
    height: "50px",
  },
  smartphone: {
    width: "25px",
    height: "25px",
  },
  tablette: {
    width: "30px",
    height: "30px",
  },
};
export const navLinks = [
  { keyLink: "key1", link: "#home", text: "Home" },
  { keyLink: "key2", link: "#about", text: "About" },
  { keyLink: "key3", link: "#hfeatures", text: "Features" },
];

export const cardProps = {
  default: {
    width: "18em",
    place: "top",
    urlImage:
      "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg",
    titre: "Pas d'image",
    text: "Pas d'image",
  },
  cardtodo: {
    width: "",
    place: "top",
    urlImage:
      "",
    titre: "",
    text: "",
  },
  poiSenteur: {
    width: "8em",
    place: "top",
    urlImage:
      "https://www.flower.fr/ddoc-316-46d494e60e2c202c41d2e328a2010fb4-abc-pois-senteur-jpg",
    titre: "Pois de Senteur",
    text: "Le Pois de senteur (Lathyrus odoratus) est une espèce de plante herbacée annuelle de la famille des Fabaceae originaire du sud-est de l'Italie et de la Sicile.",
  },
  agerate: {
    width: "8em",
    place: "top",
    urlImage:
      "https://static.aujardin.info/cache/th/img10/ageratum-houstonianum-150x112.jpg",
    titre: "Agérate",
    text: "L'agérate est une plante herbacée originaire d'une région qui s'étend de l'est de Belize, sur la mer des Caraïbes, au sud du Mexique, sur la côte Pacifique, en passant par le Guatemala.",
  },
};
export const buttonProps={
  default:{
    color:"secondary",
    text:"bien",
    type:"text"
  },
  color:{
  primary: "primary",
  success: "success",
  info: "info",
  secondary: "secondary",
  outlineSuccess:"outline-success",
  outlineDanger:"outline-danger",
  warning:"warning",
  },
  text:{
    submit:"Se connecter",
    ajouter:"Add",
    todoDone:"✔",
    todosupp:"X",
  },
  type:{
    submit:"submit",
    
  },
  className:{
    classpad:"pad",
  },
};
export const slidesProps={
  default:{
    className:"d-block w-100",
     
    url: "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg",
    
    alt:"No-image",
    
    titre:"No-image",
    text:"No-image",
    slides: [{ className:"d-block w-90", url:"https://images8.alphacoders.com/594/thumb-1920-594870.jpg",  alt:"Fleur",titre:"Fleur 2",text:"Fleur 2" }],
  },
  
  firstSlide:{
     
    url:"https://images8.alphacoders.com/594/thumb-1920-594870.jpg",
    alt:"Fleur",
    
    titre:"Fleur rose",
    text:"Fleur rose",
  },
  secondSlide:{
    
    url:"https://images3.alphacoders.com/162/thumbbig-162205.webp",
    alt:"Fleur",
    
    titre:"Fleur 2",
    text:"Fleur 2",
  },
  thirdSlide:{
    
    url:"https://images5.alphacoders.com/373/thumbbig-373630.webp",
    alt:"Coquelicot",
    
    titre:"Fleur 3",
    text:"Fleur 3",
  },
  
};
export const lesSlides=[
  { className:"d-block w-100", url:"https://images8.alphacoders.com/594/thumb-1920-594870.jpg",  alt:"Fleur",titre:"Fleur 2",text:"Fleur 2" },
  { className:"d-block w-100", url:"https://images8.alphacoders.com/594/thumb-1920-594870.jpg",  alt:"Fleur",titre:"Fleur 3",text:"Fleur 2"  },
   
];

export const textInputProps={
default:{
  label:"text",
  placeholder:"Enter text",
  type:"text",
},
email:{
  label:"Saisir Email",
  placeholder:"Saisir Email",
  type:"email",
  name:"email",
},
password:{
  label:"Saisir Password",
  placeholder:"Saisir Password",
  type:"password",
  name:"password",
},
texttodo:{
  label:"Plan your day",
  placeholder:"Add a task",
  type:"text",
  name:"texttodo",
  className:"classtext",
},
timeTodo:{
  label:"Time task",
  placeholder:"",
  type:"time",
  name:"timetodo",
  className:"classtime",
},

};
export const listeEmailPassword=[

  { email: "a@a.com", password: "p1"},
  { email: "b@b.com", password: "p2"},
  { email: "c@c.com", password: "p3"},
];