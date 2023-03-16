

import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import CityComponent from "./CityComponent";
import WeatherComponent from "./WeatherInfoComponent";




export const WeatherIcons = {
    "01n": "./icons/night.svg",
   
    "02d": "./icons/day.svg",
    "02n": "./icons/cloudy-night.svg",
    "03d": "./icons/cloudy.svg",
    "03n": "./icons/cloudy.svg",
    "04d": "./icons/perfect-day.svg",
    "04n": "./icons/cloudy-night.svg",
    "09d": "./icons/rain.svg",
    "09n": "./icons/rain-night.svg",
    "10d": "./icons/rain.svg",
    "10n": "./icons/rain-night.svg",
    "11d": "./icons/storm.svg",
    "11n": "./icons/storm.svg",
    "01d": "./icons/sunny.svg"
  };
  
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    
    padding: 0px 0px;
    margin: auto;
    
    

    font-family: Montserrat;
  `;
  
  // const AppLabel = styled.span`
  //   color: black;
  //   margin: 20px auto;
  //   font-size: 18px;
  //   font-weight: bold;
  // `;
  // const CloseButton = styled.span`
  //   padding: 2px 3px;
  //   background-color: black;
  //   border-radius: 50%;
  //   color: white;
  //   position: absolute;
  // `;
  
export const Weather = () => {
    const [city, updateCity] = useState();
    const [weather, updateWeather] = useState();
    const fetchWeather = async (e) => {
      e.preventDefault();
      const response = await Axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`,
      );
      updateWeather(response.data);
    };
  return (
    <Container>
      {/* <AppLabel> Weather App.io</AppLabel> */}
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
      
     
    </Container>  
  )
}

export default Weather