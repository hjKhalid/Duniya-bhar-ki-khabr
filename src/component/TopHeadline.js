import React from 'react'
import Card from './Card'
import axios from 'axios'

import { useState, useEffect } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';



export function TopHeadline() {
  const [news, setNews] = useState("");
  const [page, setPage] = useState(1 | (() => 1))

  const handleOnForword = () => {
    setPage(page + 1);
  }
  const handleToBackward=()=>{
    setPage(page - 1);
  }
  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=0bb476f88cb84a17b59f65753e14e9d6&page=${page}&pageSize=6`;
    async function fetchData() {
      try {
        const response = await axios.get(url);
        setNews(response.data.articles);
      } catch (error) {
        console.error(error);
      }

    }
    fetchData();
  }, [page])



  return (
    <div>
      <div className='d-flex align-content-stretch flex-wrap container my-3' style={{ justifyContent: "center" }}>
        {news ? news.map((e, i) =>
          <div className='mx-3 my-3'>
            <div className=''>
              <Card key={i} Link={e.url} author={e.author} Avatar={e.source.name} title={e.title ? e.title : ""} imageUrl={e.urlToImage ? e.urlToImage : ""} BriefDiscription={e.description ? e.description : ""} />

            </div>
          </div>

        ) : <div className='container'>
          <Card title="" imageUrl="" BriefDiscription="" />
        </div>}


      </div>
      <div className=" container d-flex justify-content-center">

        <span>

          <button className='mx-3 my-3' onClick={handleToBackward} ><ArrowBackIosNewIcon /></button>

          <button onClick={handleOnForword} ><ArrowForwardIosIcon /></button>
        </span>



      </div>
      
    </div>
  )
}

export default TopHeadline