import React from 'react'
import "../Home/Home.css"
import { useState } from 'react'
import { servicesArray } from '../../../models/Service'
import HomeCard from './HomeCard'

export default function Home() {
  

  return (
    <>
    {/* <h1 style={{textAlign: "center"}}> Clarke Services</h1>
    <div style ={{marginLeft: "auto",marginRight: "auto", width: window.innerWidth * .75, backgroundColor: "black", height: 8, borderRadius: 4, marginBottom: 20}}></div> */}
    <div style ={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 20}}>
      
      {/* <Card service = {dryNeedling}/> */}
      {servicesArray.map((service) => {
        return (<HomeCard service = {service} />)
      })}
      
    </div>
      </>

  )
}
