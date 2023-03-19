import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
const Curosal = (props) => {
  const [news, setNews] = useState("");
  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=c510fef9b03a499b84073f9c14b3dca7&page=${1}&pageSize=3`;
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
    <div className='container' > 
    
      <div id="carouselExampleCaptions" className="carousel slide" >
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div className="carousel-inner" >

          <div className="carousel-item active"  >
            <img src={news[0].urlToImage?news[0].urlToImage:""} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
          
            </div>
            <h2>{news[0].title?news[0].title:""}</h2>
              <p></p>
          </div>
         
          <div className="carousel-item active" >
            <img src={news[1].urlToImage?news[1].urlToImage:""} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
             
            </div>
            <h2>{news[1].title?news[1].title:""}</h2>
              <p></p>
          </div>
          
          <div className="carousel-item active" >
            <img src={news[2].urlToImage?news[2].urlToImage:""} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
             
            </div>
            <h2>{news[2].title?news[2].title:""} </h2>
              <p></p>
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