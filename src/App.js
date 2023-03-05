import React from 'react'
import Navbar from './component/Navbar'
import Card from './component/Card'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Curosal from './component/Curosal'
import Pagination from '@mui/material/Pagination';
import Weather from './component/Weather'
import news from './component/api'
import Stack from '@mui/material/Stack';


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
  const [news, setNews] = useState("");
  const [crypto, setCrypto] = useState("");

  useEffect(() => {

    axios.get('https://newsapi.org/v2/everything?q=tesla&from=2023-02-05&sortBy=publishedAt&apiKey=7e1aec59a251435dbe386f7ff6b7656f').then((response => {

      //  console.log(response)
      setNews(response.data.articles)
    })).catch((error) => {
      console.log(error.response)
    })


  })
  console.log(news);



  const handleOnClick = () => {

  }


  return (
    <div><Navbar />

      <div className='container' style={{ justifyItems: "self-end", fontStyle: "italic", color: "red" }}>{Date(Date.now()).toString()}</div>
      {/* <Curosal imageUrl={news.imageUrl} alt="" title="" description=""/> */}
      <h1 className='' style={{ fontFamily: "cursive", textAlign: "center" }}>Top Headlines</h1>

      <div className='d-flex align-content-stretch flex-wrap container my-3' style={{ justifyContent: "center" }}>
        {news ? news.map((e, i) =>
          <div className='mx-3 my-3'>
            <div className=''>
              <Card key={i} title={e.title ? e.title : ""} imageUrl={e.urlToImage ? e.urlToImage : ""} BriefDiscription={e.description ? e.description : ""} />

            </div>
          </div>

        ) : <div className='container'>
          <Card title="" imageUrl="" BriefDiscription="" />
        </div>}
        <div className='container my-4' style={{ justifyContent: "center" }}>
          <Pagination count={10} color="primary" onClick={handleOnClick} />
        </div>

        <div>
          <Weather />
        </div>

      </div>



    </div>
  )

}

export default App