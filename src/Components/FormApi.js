
import axios from 'axios'
import React,{useState} from 'react'
import Autosuggest from 'react-autosuggest'
import './Form.css'
import {Row,Col} from 'antd'
function FormApi(props) {
const [city,setCity] = useState("")
  const[country,setCountry] =useState("") 
  const[suggestions,setSuggestions] = useState([])
  const[haserror,setHaserror] = useState(false)
  return (
    
      <form onSubmit={props.loadweather} className="forms"> 
      <div>{props.error ? error() : ""}</div>

      {/* {!haserror && ( */}
      <Row>  
    <Col span={8} className="element">

      <Autosuggest   
      inputProps={{
        placeholder:"type your country",
        name: "country",
        id : "country",
        value : country,
        onChange:(e,{newValue}) => {
          //newvalue -> state //able to type in here
          setCountry(newValue)
        }
      }}
      suggestions={suggestions}
      onSuggestionsFetchRequested={async ({value}) => {
        if(!value ) {
          setSuggestions([]);
          return;
        }
        try {
            const result = await axios.get(
              `https://restcountries.eu/rest/v2/name/${value}`
            );
            //console.log(result.data);
            setSuggestions(result.data.map(row => ({
              name:row.name
            })))
       } catch(err) {
          setSuggestions([]);
         // alert("not valid");
          setHaserror(true)
         // err.preventDefault()
        }
      }}
      //error onsuggesr... must be implemented
      onSuggestionsClearRequested={ () =>{
         setSuggestions([]);
        }}
        onSuggestionSelected={(eve) => {
          if(!setHaserror) {eve.defaultPrevented()}
        }}
        //objects

      getSuggestionValue={suggestions =>  suggestions.name}
       renderSuggestion ={suggestions => <div>{suggestions.name}</div>}
      
      />
      </Col>
     <Col span={8}  className="element">
     <div className="error">{haserror ? error2() : ""}</div> 

       <Autosuggest  className="area-input"
     
       inputProps={{
        placeholder:"type your city",
        name: "city",
        id : "city",
        value : city,
        onChange:(e,{newValue}) => {
          //newvalue -> state //able to type in here
          setCity(newValue)
        }
      }}
      suggestions={suggestions}
      onSuggestionsFetchRequested={async ({value}) => {
        
        if(!value ) {
          setSuggestions([]);
         
          return;        }
        try {
            const result = await axios.get(
              `https://restcountries.eu/rest/v2/name/${value}`
            );
            //console.log(result.data);
            setSuggestions(result.data.map(row => ({
              name:row.name
            })))
            
       } catch(err) {
          setSuggestions([]); 
       //  alert("not valid")
       setHaserror(true)
     //  err.preventDefault()
         
      }}}
      //error onsuggesr... must be implemented
      onSuggestionsClearRequested={ () =>{
         setSuggestions([]);
        }}
        //objects
      getSuggestionValue={suggestions =>  suggestions.name}
       renderSuggestion ={suggestions => <div>{suggestions.name}</div>}
      
      />

    
           </Col>  
           <Col span={8}className="elements">  
           <div >
            <button >get weather</button>
          </div>
          </Col>
      
          </Row>   
      </form>

  
  )
}
function error() {
  return (
    <div>
      ehem! -____-
    </div>
  );
};
function error2(){
  // let error = {}
  // if (!/\S+@\S+\.\S+/.test(value.name)) {
  //   error.name = 'input is invalid';
    
  // }
 //console.log("invalid")
  return <div>invalid input </div>

}
export default FormApi



























// import React from "react";
// import { AutoComplete, Input } from "antd";

// import "antd/dist/antd.css";


// // function onSelect(value) {
// //   console.log("onSelect", value);
// // }

// export default class FormApi extends React.Component {
//   state = {
//     dataSource: [],
//     selectCountry : [],
//     selectCity: []
//   };

//   onChange = selectCountry => {
//     this.setState({
//   //   dataSource: !value ? [] : [value, value + value, value + value + value],
//       selectCountry : selectCountry || []
//     });
//   };
// loadOptions = async(inputText,callback) => {
// const response = await fetch(`https://countriesnow.space/api/v0.1/countries=${inputText}`)
// const json = await response.json()
// callback(json.map(i=>({label:i.countries})))
// console.log(callback,"call")
// }
// renderCountry = countr => {
//   return( 
//   <ul>
//     <li>{countr.country}</li>
//   </ul>)
// }
//   render() {
//     return (
//       <AutoComplete
//         loadOptions={this.loadOptions}
//         style={{ width: 200 }}

//         onSearch={this.onSearch}
//          placeholder={'SEARCH COUNTRY'}
//       >
        
//         <Input 
        
//         onChange={this.onChange}
       
//         />
//         <div className="list">
//           {this.state.selectCountry.map(this.renderCountry)}
//         </div>
//       </AutoComplete>
//     );
//   }
// }


