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
          {news ? news.map((e, i) => {
            return <div className="carousel-item active"  style={{height: "400px"}} key={i} >
              <img  style={{top:"0",left:"0",minHeight:"400px"}} src={e.urlToImage ? e.urlToImage : ""} className="d-block w-100 h-50" alt="..." />
              <div className="carousel-caption d-light d-md-block" style={{background:"white"}}>

              <h2 style={{color:"black"}}>{e.title ? e.title : ""}</h2>
              </div>
           
            </div>
          }) :
            <div className="carousel-item active"  >
              <img src="" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">

                <h2> title</h2>
                <p></p>
              </div>
            </div>
          }

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





  )
}

export default Curosal