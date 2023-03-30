import React, { useState } from 'react'

import Navbar from './component/Navbar'
import Sports from './component/Sports'
import History from './component/History'

import Weather from './component/Weather'
import TopHeadline from './component/TopHeadline'
import Science from './component/Science'
import Meta from './component/Meta'
import AI from './component/AI'
import Footer from './component/Footer'
import Curosal from './component/Curosal'
import Crypto from './component/Crypto'
import TableGlobalVariant from './component/TableGlobalVariant'
import Finance from './component/Finance'





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
return (
    <>
      <div><Navbar />

        <div  style={{ margin:"0 1rem 1rem", fontStyle: "italic", color: "red" }}>{Date(Date.now()).toString().slice(0, 16)}</div>

        {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleOnChange}></input>
         */}
        <h1 className='' style={{ fontFamily: "cursive", textAlign: "center" }}>Top Headlines</h1>
        <Curosal />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <TopHeadline />
          <span className='my-1'><Weather />
            <TableGlobalVariant />
          </span>
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
        <div id='section_meta' style={{ display: "flex", justifyItems: "baseline" }}>
          <Meta />
          <div style={{ margin: "1rem 1rem 1rem 1rem  ", padding: "2.5rem" }}><Crypto /></div>

        </div>
        <div id='section_ai'>
          <AI />
        </div>
        <div id='section_finance'>
          <Finance />
        </div>


      </div>
      <Footer />
    </>
  )

}

export default App