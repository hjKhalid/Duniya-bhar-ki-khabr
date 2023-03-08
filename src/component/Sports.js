import React from 'react'
import Card from './Card'
import axios from 'axios'
import { useState } from 'react'

export function Sports() {
  const [sport, setSport] = useState("");
  async function GetUser() {

    try {
      const response = await axios.get(' https://newsapi.org/v2/everything?q=sport&from=2023-02-07&sortBy=publishedAt&apiKey=bfe95d1f7a6840ab81cb77d2dc80414e&pageSize=6');
      setSport(response.data.articles);
    } catch (error) {
      console.error(error);
    }
  }

  GetUser()
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
      </div>
    </div>
  )
}

export default Sports