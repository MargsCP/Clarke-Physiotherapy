import React, { useState } from 'react';
import "../Home/Home.css"



export default function HomeCard (props){
  
  const [flipped, setFlipped] = useState(false)

  return (
    <div  className="mainContainer">
      <div onClick={() => {
      setFlipped(!flipped)
      
    }}
    className = {`theCard ${flipped ? ('isFlipped') : ('')}`}>
         
        <div className="theFront" style={{backgroundImage: `url( ${props.service.image})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.75,}}>
            <h3 style={{ textAlign: "center", justifyContent: "center", alignItems: "center", fontWeight: "bold", fontFamily: 'Prompt', marginTop: 20}}>{props.service.name}</h3>
          
        </div>
        <div className="theBack" style={{objectFit: "cover"}} > 
          <h4 style={{textAlign: "center", fontFamily: "Changa One"}}> {props.service.name}</h4>
          <p style={{textAlign: "center"}}> {props.service.description}</p>
        </div>
      </div>
    </div>
    
)};


