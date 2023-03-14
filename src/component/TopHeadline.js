import React from 'react'
import Card from './Card'
import axios from 'axios'
import { useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';



export  function TopHeadline() {
    const [news, setNews] = useState("");
    async function getTop() {
        try {
          const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=bfe95d1f7a6840ab81cb77d2dc80414e&pageSize=6');
          setNews(response.data.articles);
        } catch (error) {
          console.error(error);
        }
      }
  getTop();
  
      
  return (
    <div>
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

<ArrowForwardIosIcon />


<ArrowBackIosNewIcon />



</div>
      </div>
    </div>
  )
}

export default TopHeadline