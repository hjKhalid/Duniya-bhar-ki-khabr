import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
const Curosal = (props) => {
  const [news, setNews] = useState("");
  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=0bb476f88cb84a17b59f65753e14e9d6&page=${3}&pageSize=6`;
    async function fetchData() {
      try {
        const response = await axios.get(url);
        setNews(response.data.articles);
      } catch (error) {
        console.error(error);
      }

    }
    fetchData();
  }, [])
  console.log(news)

  return (
    <div>
    
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div className="carousel-inner">

          <div className="carousel-item active" >
            <img src="..." className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>the hero</h5>
              <p></p>
            </div>
          </div>
         
          <div className="carousel-item active" >
            <img src="" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>the zero</h5>
              <p></p>
            </div>
          </div>
          
          <div className="carousel-item active" >
            <img src="" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>the love</h5>
              <p></p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>


    </div>

  )
}

export default Curosal