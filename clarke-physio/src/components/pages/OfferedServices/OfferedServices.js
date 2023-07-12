import React from 'react'
import Card from './ServiceCard'
import { dryNeedling, massages, servicesArray } from './Service'



export default function OfferedServices() {
  return (
    <>
    <h1 style={{textAlign: "center"}}> Our services</h1>
    <div style ={{marginLeft: "auto",marginRight: "auto", width: window.innerWidth * .75, backgroundColor: "black", height: 8, borderRadius: 4, marginBottom: 20}}></div>
    <div style ={{marginLeft: 15, marginRight: 15, display: "flex", justifyContent: "center"}}>
      
      {/* <Card service = {dryNeedling}/> */}
      {servicesArray.map((service) => {
        return (<Card service = {service} />)
      })}
      
    </div>
    
    </>
  )
}
