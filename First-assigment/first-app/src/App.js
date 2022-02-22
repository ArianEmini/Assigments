import React from "react";
import './App.css';
// import image1  from "./DotCom_Logo_OnWhite.jpg"
import Card from "./Components/Card/card";

const list=[
  {
    image:"https://www.affixspace.com/img/tlds/dom.com.svg",
    Title:"The TLD",
    paragraf:"Does the domain extension math the language of the domain name"

  },
  {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPJ4-BKrLIUSB_kNWRX5BpMV0qYoLqAo8qtzBSFdKsb7cyy6tkSfvlAV0xsFynyuWLUxk&usqp=CAU",
    // image:"https://www.verisign.com/en_US/resources/img/VRSN_SocialShare-com-Logo_201712.png",

    Title:"Domain Length",
    paragraf:"is the domain short enaugh to rember? "

  },
  {
    image:"https://cdn2.iconfinder.com/data/icons/flat-design-basic-set-6-1/24/language-languages-512.png",
    // image:"https://www.verisign.com/en_US/resources/img/VRSN_SocialShare-com-Logo_201712.png",
    // image:{image1},
    Title:"Language",
    paragraf:"How complte is the actual domain name? "

  },
  {
    image:"https://icon-library.com/images/recognition-icon/recognition-icon-11.jpg",
    Title:"The TLD",
    paragraf:"Does the domain extension math the language of the domain name"

  },
  {
    image:"https://cdn4.vectorstock.com/i/1000x1000/16/98/search-tools-icon-vector-6201698.jpg",
    // image:"https://www.verisign.com/en_US/resources/img/VRSN_SocialShare-com-Logo_201712.png",

    Title:"Domain Length",
    paragraf:"is the domain short enaugh to rember? "

  },
  {
    image:"https://wearedapa.co.uk/wp-content/uploads/2017/06/outreach-icon.jpg",
    // image:"https://www.verisign.com/en_US/resources/img/VRSN_SocialShare-com-Logo_201712.png",
    // image:{image1},
    Title:"Language",
    paragraf:"How complte is the actual domain name? "

  },
  {
    image:"https://cdn4.vectorstock.com/i/1000x1000/77/58/costs-optimization-efficiency-icon-vector-23097758.jpg",
    Title:"The TLD",
    paragraf:"Does the domain extension math the language of the domain name"

  },
  {
    image:"https://www.shareicon.net/data/512x512/2016/10/20/846415_blue_512x512.png",
    // image:"https://www.verisign.com/en_US/resources/img/VRSN_SocialShare-com-Logo_201712.png",

    Title:"Domain Length",
    paragraf:"is the domain short enaugh to rember? "

  },
  {
    image:"https://img.favpng.com/2/14/25/skill-icon-boosting-potential-icon-business-motivation-icon-HydUTqU5.jpg",
    // image:"https://www.verisign.com/en_US/resources/img/VRSN_SocialShare-com-Logo_201712.png",
    // image:{image1},
    Title:"Language",
    paragraf:"How complte is the actual domain name? "

  }
];

const cards=[
  {
     date:"3.3.0(14/5/2018)",
     color:"#01C853",
     nameColor:"New",
     photo:"https://cdn1.vectorstock.com/i/1000x1000/99/80/female-avatar-without-a-face-flat-vector-22999980.jpg",
     name:"Kevin Joe",
     description:"A description file is an ASCII text file that contains descriptions of file and key specifications that the Maintenance tool can use to create data files and indexes. Some users employ description",
     button:"Donwload"
  },
  {
    date:"3.1.0(20/05/2015)",
    color:"#2961FF",
    nameColor:"Hix",
    photo:"https://cdn1.vectorstock.com/i/1000x1000/99/80/female-avatar-without-a-face-flat-vector-22999980.jpg",
    name:"Kevin Joe",
    description:"Description files contain one or more elements. An element consists of a keyword, followed by an equal sign (=), followed by a value (with no space). Each element in a description file corresponds to a particular characteristic",
    button:"Donwload"
  },
  {
    date:"3.3.0(14/5/2018)",
    color:"#C35BFF",
    nameColor:"Improvenent",
    photo:"https://cdn1.vectorstock.com/i/1000x1000/99/80/female-avatar-without-a-face-flat-vector-22999980.jpg",
    name:"Kevin Joe",
    description:"We can see the same thing happening with columns. The container will need to have a height in order that the items will start wrapping and creating new columns, and items will stretch taller to fill each column completely.",
    button:"Donwload"
  },
  {
    date:"3.3.0(14/5/2018)",
    color:"#01C853",
    nameColor:"New",
    photo:"https://cdn1.vectorstock.com/i/1000x1000/99/80/female-avatar-without-a-face-flat-vector-22999980.jpg",
    name:"Kevin Joe",
    description:"A description file is an ASCII text file that contains descriptions of file and key specifications that the Maintenance tool can use to create data files and indexes. Some users employ description",
    button:"Donwload"
 },
 {
   date:"3.1.0(20/05/2015)",
   color:"#2961FF",
   nameColor:"Hix",
   photo:"https://cdn1.vectorstock.com/i/1000x1000/99/80/female-avatar-without-a-face-flat-vector-22999980.jpg",
   name:"Kevin Joe",
   description:"Description files contain one or more elements. An element consists of a keyword, followed by an equal sign (=), followed by a value (with no space). Each element in a description file corresponds to a particular characteristic",
   button:"Donwload"
 },
 {
   date:"3.3.0(14/5/2018)",
   color:"#C35BFF",
   nameColor:"Improvenent",
   photo:"https://cdn1.vectorstock.com/i/1000x1000/99/80/female-avatar-without-a-face-flat-vector-22999980.jpg",
   name:"Kevin Joe",
   description:"We can see the same thing happening with columns. The container will need to have a height in order that the items will start wrapping and creating new columns, and items will stretch taller to fill each column completely.",
   button:"Donwload"
 }


];



function App() {
  return (
    <div className="App">
      
     
      <div className="List-app">
      {list.map((lis)=>(
            <div className="List-app">
         
            <div>
                  <img src={lis.image}/>

                  <strong>{lis.Title}</strong>
                  <p>{lis.paragraf} </p>
                  
    
            </div>
            
           
    
    
        </div>



      ))
     
    }
  </div>
    
   
 
  <div className="Card-app">
      {cards.map((card)=>(
            <div className="Card-app">
         
            
                 
                  <Card  key={card.date}  Datee={card.date} Color={card.color} Photo={card.photo}  Name={card.name}  Description={card.description}  Button={card.button} ColorName={card.nameColor} />
                  
               
            </div>



      ))
     
    }
  </div>

  







    </div>
  );
}

export default App;
