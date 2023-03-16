import React from 'react'
import { useRef, useState } from 'react'
import Box from '@mui/material/Box'
import Navbar from './component/Navbar'
import Sports from './component/Sports'
import History from './component/History'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Weather from './component/Weather'
import TopHeadline from './component/TopHeadline'
import Science from './component/Science'
import Meta from './component/Meta'
import AI from './component/AI'
import Footer from './component/Footer'
import Curosal  from './component/Curosal'
import Crypto from './component/Crypto'





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


function App(props) {




  // const lat = useRef(null);
  // const long = useRef(null);
  // navigator.geolocation.getCurrentPosition(function (position) {
  //   lat.current = position.coords.latitude;
  //   long.current = position.coords.longitude;
  //   console.log(lat);
  //   console.log(long);
  // })


  const scrollAi = () => {
    const element1 = document.getElementById('section_ai');
    if (element1) {
      // 👇 Will scroll smoothly to the top of the next section
      element1.scrollIntoView({ behavior: 'smooth' });
    }

  }

  const scrollHistory = () => {
    const element2 = document.getElementById('section_history');
    if (element2) {
      // 👇 Will scroll smoothly to the top of the next section
      element2.scrollIntoView({ behavior: 'smooth' });
    }

  }

  const scrollMeta = () => {
    const element3 = document.getElementById('section_meta');
    if (element3) {
      // 👇 Will scroll smoothly to the top of the next section
      element3.scrollIntoView({ behavior: 'smooth' });
    }

  }

  const scrollScience = () => {
    const element4 = document.getElementById('section_science');
    if (element4) {
      // 👇 Will scroll smoothly to the top of the next section
      element4.scrollIntoView({ behavior: 'smooth' });
    }

  }

  const scrollSport = () => {
    const element = document.getElementById('section_sport');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }

  }



  return (
    <>
      <div><Navbar />

        <div className='container' style={{ justifyItems: "self-end", fontStyle: "italic", color: "red" }}>{Date(Date.now()).toString().slice(0, 18)}</div>
        <div className=' container btn' style={{ alignItems: "center", margin: "0rem 3rem 5rem", padding: "0rem 2rem 0rem 5rem" ,display:"flex"}}>
          <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button className='mx-2' onClick={scrollSport}>Sport</Button>
            <Button className='mx-2' onClick={scrollHistory}>History</Button>
            <Button className='mx-2' onClick={scrollScience}>Science</Button>
            <Button className='mx-2' onClick={scrollAi}>AI</Button>
            <Button className='mx-2' onClick={scrollMeta}>Meta</Button>
          </ButtonGroup>
          
        </div>

        <Curosal/>
        <h1 className='' style={{ fontFamily: "cursive", textAlign: "center" }}>Top Headlines</h1>
        <div style={{display:"flex",justifyContent:"space-between"}}>
        <TopHeadline />
        <span><Weather/></span>
        </div>
        
        <div id='section_sport'>
          <Sports />

        </div>

        <div id='section_history'>
          <History />
        </div>
        <div id='section_science'>
          <Science />


        </div>
        <div id='section_meta' style={{display:"flex",justifyItems:"baseline"}}>
          <Meta />
          <div style={{margin:"1rem 1rem 1rem 1rem  ",padding:"2.5rem"}}><Crypto/></div>
          
        </div>
        <div id='section_ai'>
          <AI />
        </div>


      </div>
      <Footer />
    </>
  )

}

export default App