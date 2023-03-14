import React from 'react'
import Card from './Card'
// import axios from 'axios'
import { useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export function Sports(props) {
  const [sport, setSport] = useState("");
  let page=1

  // const [page,setPage]=(1);
  // async function GetUser() {

  //   try {
  //     const response = await axios.get(' https://newsapi.org/v2/everything?q=sport&from=2023-02-07&sortBy=publishedAt&apiKey=bfe95d1f7a6840ab81cb77d2dc80414e&pageSize=6');
  //     setSport(response.data.articles);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // GetUser()
  
  const fetchMoreData = async () => {   
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=sport&apiKey=f0fbe658187c430594be37270ae7d5c1&page=${page+1}&pageSize=6`;
     
    let data = await fetch(url);
    let parsedData = await data.json()
    setSport(parsedData.articles)
    // setTotalResults(parsedData.totalResults)
  };
  // fetchMoreData();
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