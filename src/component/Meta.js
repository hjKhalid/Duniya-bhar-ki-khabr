import React, { useState, useEffect } from 'react'
import Card from './Card';
import axios from 'axios';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


export function Meta() {
    const [meta, setMeta] = useState("");
    const [page, setPage] = useState(1 | (() => 1))

    const handleOnForword = () => {
        setPage(page + 1);
    }
    const handleToBackward=()=>{
        setPage(page-1)
    }

    useEffect(() => {
        const url = ` https://newsapi.org/v2/everything?q=bitcoin&apiKey=a579b0b0293e41fd8dd42d2420dac883&page=${page}&pageSize=6`;
        async function fetchData() {
            try {
                const response = await axios.get(url);
                setMeta(response.data.articles);
            } catch (error) {
                console.error(error);
            }

        }
        fetchData();
    }, [page])

    return (
        <div>

            <h1 style={{ fontFamily: "cursive", textAlign: "center" }}>Meta</h1>
            <div className='d-flex align-content-stretch flex-wrap container my-3' style={{  justifyContent: "center" }}>

                {meta ? meta.map((e, i) =>
                    <div className='mx-3 my-3'>
                        <div className=''>
                            <Card key={i} Link={e.url} author={e.author} Avatar={e.source.name} title={e.title ? e.title : ""} imageUrl={e.urlToImage ? e.urlToImage : ""} BriefDiscription={e.description ? e.description : ""} />

                        </div>
                    </div>

                ) : <div className='container'>
                    <Card title="" imageUrl="" BriefDiscription="" />
                </div>
                }
               

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

export default Meta