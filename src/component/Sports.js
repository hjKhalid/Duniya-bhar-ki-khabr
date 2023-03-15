import React from 'react'
import Card from './Card'
import axios from 'axios'
import { useState,useEffect } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export function Sports(props) {
  const [sport, setSport] = useState("");
  useEffect(() => {
    const url = ` https://newsapi.org/v2/everything?q=sport&apiKey=d8fdb92a19454a4d93f5714f2c54a1b4&page=${3}&pageSize=6`;
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
                <Card key={i} title={e.title ? e.title : ""} imageUrl={e.urlToImage ? e.urlToImage : ""} BriefDiscription={e.description ? e.description : ""} />

              </div>
            </div>

          ) : <div className='container'>
            <Card title="" imageUrl="" BriefDiscription="" />
          </div>}
        </div>
        <div className='container my-4' style={{ justifyContent: "center" }}>

<ArrowForwardIosIcon />


<ArrowBackIosNewIcon />



</div>
      </div>
    </div>
  )
}

export default Sports