import React, { useState } from 'react'
import  Card  from './Card';
import axios from 'axios';
import Pagination from '@mui/material/Pagination';

export  function Science() {
    const [science, setSeince] = useState("");
    async function GetUser() {

        try {
          const response = await axios.get(' https://newsapi.org/v2/everything?q=sceince&from=2023-02-07&sortBy=publishedAt&apiKey=bfe95d1f7a6840ab81cb77d2dc80414e&pageSize=6');
          setSeince(response.data.articles);
        } catch (error) {
          console.error(error);
        }
      }
    
      GetUser()
    return (
        <div>
            <div className='sport'>
                <h1 style={{ fontFamily: "cursive", textAlign: "center" }}>Science</h1>
                <div className='d-flex align-content-stretch flex-wrap container my-3' style={{ justifyContent: "center" }}>
                    {science ? science.map((e, i) =>
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
        <Pagination count={10} color="primary"  />
      </div>
            </div>
            </div>
            )
}

            export default Science;