import React from 'react'
import './Weather.css'

import {WiCloudy } from 'weather-icons-react'
export default function Weather(props) {
  function minmaxTemp(min,max) {
    return (
      <h3 className="minmax">
      <span>{min}&deg;</span>
      <span>{max}&deg;</span>
      </h3>
    );
  }
  return (
    <div className="container">
      <div className="cards">
        <h1>
       {props.city} , {props.country}
       </h1>
      <h5 >
         <WiCloudy size={200} color="#ffff" >{props.cloud}</WiCloudy>
      </h5>
        
       <h2>{props.temp_cel}</h2>     
       {minmaxTemp(props.temp_min,props.temp_max)}
        
       <h5>{props.description}</h5>
      </div>
     
    </div>
  )
}
