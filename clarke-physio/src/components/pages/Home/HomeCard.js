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
         
        <div className="theFront" style={{backgroundImage: `url( ${props.service.image})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.80}}>
          <div className= "serviceTitle" style={{textAlign: "center", objectFit: "cover" }}>
            <h3 style={{display: "grid", justifyContent: "center",alignItems: "center", fontWeight: "bold", marginTop: 20, opacity: 1.1}}>{props.service.name}</h3>
          </div>
        </div>
        <div className="theBack" style={{objectFit: "cover"}} > 
          <h4 style={{textAlign: "center", fontFamily: "Changa One"}}> {props.service.name}</h4>
          <p style={{textAlign: "center"}}> {props.service.description}</p>
        </div>
      </div>
    </div>
    
)};


