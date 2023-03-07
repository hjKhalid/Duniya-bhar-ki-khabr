import React from 'react'
import Navbar from './component/Navbar'
import Card from './component/Card'
import Sports from './component/Sports'
import axios from 'axios'
import History from './component/History'

import Curosal from './component/Curosal'

import Weather from './component/Weather'
import news from './component/api'
import Stack from '@mui/material/Stack';
import TopHeadline from './component/TopHeadline'
import Science from './component/Science'
import Meta from './component/Meta'
import AI from './component/AI'


export const WeatherIcons = {
  "01n": "./icons/night.svg",
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


function App(props) {





  //   axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=fa8a466d0617440daa4e5d4d39bba824&pageSize=6').then((response => {

  //     //  console.log(response)
  //     setNews(response.data.articles)
  //   })).catch((error) => {
  //     console.log(error.response)
  //   })


  // console.log(news)


  return (
    <div><Navbar />
      <div className='container' style={{ justifyItems: "self-end", fontStyle: "italic", color: "red" }}>{Date(Date.now()).toString().slice(0, 18)}</div>
      {/* <Curosal  imageUrl={news[1].urlToImage?news[1].urlToImage:""} alt="mala" title={news[1].title?news[1].title:""} description={news[1].description?news[1].description:""}/> */}
      <h1 className='' style={{ fontFamily: "cursive", textAlign: "center" }}>Top Headlines</h1>
      <TopHeadline />
      <Sports />
      <History/>
      <Science/>
      <Meta/>
      <AI/>
      <div>
        <Weather />
      </div>
    </div>
  )

}

export default App