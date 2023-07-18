import React from 'react'
import dryNeedlingImage from "../../images/DryNeedling.jpeg"

export default function About() {
  return (
    
    <div
      style={{
        position: 'relative',
        width: '400px', // Adjust the width as needed
        height: '200px', // Adjust the height as needed
      }}
    >
      <img src= {dryNeedlingImage}
      width= "100%"
      alt= "dryNeedling"
      position= "absolute"
      style={{opacity: .7}}/>
      <div
        style={{
          position: 'absolute',
          top: 0,
          padding: '20px',
          color: 'white',
        }}
      >
        <h3 style={{color: "black"}}>Card Title</h3>
        <p>This is the card content.</p>
      </div>
    </div>


    
  )
}
