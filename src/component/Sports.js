import React from 'react'
import Card from './Card'
import axios from 'axios'
import { useState, useEffect } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export function Sports(props) {
  const [sport, setSport] = useState("");
  const [page, setPage] = useState(1 | (() => 1))

    const handleOnForword = () => {
        setPage(page + 1);
    }
  useEffect(() => {
    const url = ` https://newsapi.org/v2/everything?q=sport&apiKey=0ff15cccf51746e9b8f3da55666fff2a&page=${3}&pageSize=6`;
    async function fetchData() {
      try {
        const response = await axios.get(url);
        setSport(response.data.articles);
      } catch (error) {
        console.error(error);
      }

    }
    fetchData();
  }, [])


  return (
    <div>
      <div className='sport'>
        <h1 style={{ fontFamily: "cursive", textAlign: "center" }}>Sport</h1>
        <div className='d-flex align-content-stretch flex-wrap container my-3' style={{ justifyContent: "center" }}>
          {sport ? sport.map((e, i) =>
            <div className='mx-3 my-3'>
              <div className=''>
                <Card key={i}  Link={e.url} author={e.author} Avatar={e.source.name} title={e.title ? e.title : ""} imageUrl={e.urlToImage ? e.urlToImage : ""} BriefDiscription={e.description ? e.description : ""} />

              </div>
            </div>

          ) : <div className='container'>
            <Card title="" imageUrl="" BriefDiscription="" />
          </div>}
        </div>
        <div className='container' >

          <span class="d-flex justify-content-start">
            <button onClick={handleOnForword} ><ArrowForwardIosIcon /></button>

          </span>
          <span class="d-flex justify-content-end">
            <button  ><ArrowBackIosNewIcon /></button>
          </span>



        </div>
      </div>
    </div>
  )
}

export default Sports