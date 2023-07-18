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
         
        <div  className="theFront" style={{ postion: "absolute", color: "black"}}>
        <img src= {props.service.image}
      width= "100%"
      height= "100%"
      alt= "dryNeedling"
      position= "absolute"
      style={{opacity: .65, objectFit: "cover",background: "white"}}/>
              <h3 style={{position: "absolute",top: 0, textAlign: "center", fontFamily: 'Abhaya Libre', marginTop: "15%", color: "white ", fontSize: 45, opacity: 1, width: "100%", alignItems: "center"}}>{props.service.name}</h3>
            
          
        </div>
        <div className="theBack" style={{objectFit: "cover"}} > 
          <div style={{padding: 8}}>
            <h4 style={{textAlign: "center", fontFamily: "Abhaya Libre"}}> {props.service.name}</h4>
            <p style={{textAlign: "center", fontFamily: 'Kanit'}}> {props.service.description}</p>
          </div>
        </div>
      </div>
    </div>
    
)};


