import React, { useState, useEffect } from 'react'
import Card from './Card';
import axios from 'axios';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


export function Science(props) {
    const [finance, setFinance] = useState("");
    const [page, setPage] = useState(1)

    useEffect(() => {
        const url = ` https://newsapi.org/v2/everything?q=finance&apiKey=a579b0b0293e41fd8dd42d2420dac883&page=${page}&pageSize=6`;
        async function fetchData() {
            try {
                const response = await axios.get(url);
                setFinance(response.data.articles);
            } catch (error) {
                console.error(error);
            }

        }
        fetchData();
    }, [page])
    const handleOnForword = () => {
        setPage(page + 1);
      }
      const handleToBackward=()=>{
        setPage(page-1)
      }
      console.log(page)
    return (
        <div>
            <div className='sport'>
                <h1 style={{ fontFamily: "cursive", textAlign: "center" }}>Finance</h1>
                <div className='d-flex align-content-stretch flex-wrap container my-3' style={{ justifyContent: "center" }}>
                    {finance ? finance.map((e, i) =>
                        <div className='mx-3 my-3'>
                            <div className=''>
                                <Card key={i} Link={e.url} author={e.author} Avatar={e.source.name} title={e.title ? e.title : ""} imageUrl={e.urlToImage ? e.urlToImage : ""} BriefDiscription={e.description ? e.description : ""} />

                            </div>
                        </div>

                    ) : <div className='container'>
                        <Card title="" imageUrl="" BriefDiscription="" />
                    </div>}
                </div>

               
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

export default Science;