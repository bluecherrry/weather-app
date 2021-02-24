import React from 'react'
import './Form.css'
const Form = props => {
  return (
   
    <div className="container">
       
    <form onSubmit={props.loadweather}>
    <div>{props.error ? error() : ""}</div>
      <div>
        <div>
          <input type="text"  placeholder="city"  className="form-control" name="city" autoComplete="on"/>
        </div>
        <div>
        <input type="text" placeholder="country"  className="form-control" name="country" autoComplete="on"/>
        </div>
          <div>
            <button>get weather</button>
          </div>

        </div></form>
      </div>
  
  )
}
function error() {
  return (
    <div>
      ehem! -____-
    </div>
  );
};
export default Form