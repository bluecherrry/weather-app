import React from 'react'
import './Weather.css'

export default function Weather(props) {
  function minmaxTemp(min,max) {
    return (
      <h3 className="minmax">
      <span>{min}&deg;</span>
      <span>{max}&deg;</span>
      </h3>
    );
  }
   ///*  getting data from api  *
  return (
    <div className="container">
      <div className="cards">
        <h1>
       {props.city} 
       {/* specify value to these properties (app.js) */}
       </h1>
      <h3 >
      <i className={`wi ${props.weatherIcon} we-icon`} />
      </h3>
        {/* get cel */}
       {/* <h2>{props.temp_cel} </h2>      */}
       {props.temp_cel ? (
          <h1>{props.temp_cel}&deg;</h1> 

        ) : null}
 
       {minmaxTemp(props.temp_min,props.temp_max)}
        
       <h5>{props.description}</h5>
      </div>
     
    </div>
  )
}
