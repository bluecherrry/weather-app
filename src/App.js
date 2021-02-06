
import React from 'react'
import './App.css';
import {WiCloudy } from 'weather-icons-react'
import Weather from './Components/Weather';
const API = 'd8c0fb6daff301af1f50b218cedde999'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      country : undefined,
      icon : undefined,
      main :undefined,
      temp_cel:undefined,
      temp_max:undefined,
      temp_min : undefined,
      description : "",
      error:false
    }
    this.getWeather();
    // this.weatherIcon = {
    //   cloud: {WiCloud}
    //     }
  }
  calCelsius(temp) {
   let cel=Math.floor(temp - 273.15);
   return cel

  }
   getWeather = async () => {
     const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API}`)
    const response = await api_call.json()
    console.log(response)
    this.setState ({
      city: response.name,
      country : response.sys.country,
      temp_cel : this.calCelsius(response.main.temp),
      temp_max:this.calCelsius(response.main.temp_max),
      temp_min:this.calCelsius(response.main.temp_min),
      description:response.weather[0].description,
      // icon :response.weatherIcon.cloud
     })
    }
  render() {
     return (
    <div className="App">
      <Weather city={this.state.city} country={this.state.country} temp_cel={this.state.temp_cel}
      temp_max={this.state.temp_max} temp_min={this.state.temp_min} description={this.state.description}
      // weatherIcon={this.state.icon}
      
      />
    </div>
     )
}}


 export default App
  