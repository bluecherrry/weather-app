import React,{useState,useEffect} from 'react'
import './Form.css'
import { AutoComplete } from 'antd';
  async function area() {
    const api_call = await fetch('https://countriesnow.space/api/v0.1/countries')
    const responses = await api_call.json()
    return responses
  }

function Form(props) {
const [finallArray,setFinallArray] = useState([{
  value : 'iran',
  },{
  value : 'italy'
  },{
  value : 'uk'
  },{
  value : 'us'
  },
 { value : 'afghanestan'}
])
// const filterFunction = () => {
  
// }
const onChange = async (value) => {
 // setFinallArray()
  const responses = await area()
    let optionArray= []
    for(let responseItem of responses.data) {
 if  ( responseItem.country.includes(value) && optionArray.length < 6 ) {
    optionArray.push({value: responseItem.country}) 
    console.log(value ,responseItem.country,"aa")
   }
   else if (optionArray.length === 6  ) { 
    
      break 
  }
  } 
  setFinallArray(optionArray)
};
  const asyncSetFinallArray = async () => {
   
    const responses = await area()
      let optionArray= []
      console.log(responses,'responses')
        responses.data.map((data) => {
          optionArray = [...optionArray,
          {value : data.country} ]

          // data.cities.map((city) => {
          //   //  optionArray = [...optionArray,
          //   //    {value : city } ]
          //   console.log(city,'city')
          // })
        })
        setFinallArray(optionArray)
        console.log(optionArray,'optionArray')
    }
  
  useEffect(() => {

   // asyncSetFinallArray()
  },[])  
  return (
    <div>
      <form onSubmit={props.loadweather}> 
    <div>{props.error ? error() : ""}</div>
    <AutoComplete
    options={finallArray}
      onChange={onChange}
    placeholder="country"
  //   filterOption={(inputValue, option) => filterFunction((inputValue,option))
  />
  <AutoComplete 
  placeholder="city"/>
       {/* <div>

        <div>
          <input type="text"  placeholder="city"  className="form-control" name="city" autoComplete="on"/>
        </div>
        <div>
        <input type="text" placeholder="country"  className="form-control" name="country" autoComplete="on"/>
        </div>
          <div>
            <button>get weather</button>
          </div>

        </div> */}
                 <button>get weather</button>

        </form> 
    </div>
  )
}

export default Form

function error() {
  return (
    <div>
      ehem! -____-
    </div>
  );
};
// function validation(input) {
//   input !=  ? <div>
//         validation is not correct
//       </div>
//     : " ";
//   } 


