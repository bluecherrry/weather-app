
import React from 'react'
import './App.css';
import Weather from './Components/Weather';
import FormApi from './Components/FormApi'
import Form from './Components/Form'
import "weather-icons/css/weather-icons.css";
//api key
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
      description : "", //empty string
      error:false
    }
    //this.getWeather();// console-> object of current data
    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    };
  
  }

  get_WeatherIcon(icons, rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId < 232:
        this.setState({ icon: icons.Thunderstorm });
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({ icon: icons.Drizzle });
        break;
      case rangeId >= 500 && rangeId <= 521:
        this.setState({ icon: icons.Rain });
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({ icon: icons.Snow });
        break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({ icon: icons.Atmosphere });
        break;
      case rangeId === 800:
        this.setState({ icon: icons.Clear });
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: icons.Clouds });
        break;
      default:
        this.setState({ icon: icons.Clouds });
    }
  }
    calCelsius(temp) {
    return Math.floor(temp - 273.15);
  }
  getWeather = async (e) => {
        e.preventDefault();
      const city =e.target.elements.city.value;
      const country =e.target.elements.country.value;
      if(city && country) {
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API}`)
        const response = await api_call.json()
         // console.log(response)
        this.setState ({
           city: `${response.name},${response.sys.country}`,
           country : response.sys.country,
           temp_cel : this.calCelsius(response.main.temp),
           temp_max:this.calCelsius(response.main.temp_max),
           temp_min:this.calCelsius(response.main.temp_min),
           description:response.weather[0].description,
           error : false,
           icon :response.weatherIcon
     });
     this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);
    // console.log(this.state.city)
    } else {
      this.setState({
        error:true
      });
    }
  }
  render() {
     return (
    <div className="countainer">
      
      {this.state.city ? "" : 
      <p>please select your city and country</p>
      }
      {/* <Form loadweather={this.getWeather} 
      error={this.state.error}/> */}
       
       <FormApi loadweather={this.getWeather} error={this.state.error}/>
      
       
      <Weather city={this.state.city}
       country={this.state.country}
        temp_cel={this.state.temp_cel}
      temp_max={this.state.temp_max} 
      temp_min={this.state.temp_min} 
      description={this.state.description}
       weatherIcon={this.state.icon}
      />
    </div>
     )
}}


 export default App
  