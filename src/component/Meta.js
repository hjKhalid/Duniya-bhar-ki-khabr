import React, { useState, useEffect } from 'react'
import Card from './Card';
import axios from 'axios';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export function Meta() {
    const [meta, setMeta] = useState("");
    const [page, setPage] = ("");

    // const handleOnclick = async() => {

    //    const url = `https://newsapi.org/v2/top-headlines?country=in&category=bitcoin&apiKey=d8fdb92a19454a4d93f5714f2c54a1b4&page=${page+1}&pageSize=6`;

    //     try {
    //         const response = await axios.get(url);
    //         setMeta(response.data.articles);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
    function countPage(event) {
        setPage(event.target.value);
    }
    console.log(page);

    useEffect(() => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=d8fdb92a19454a4d93f5714f2c54a1b4&page=${3}&pageSize=6`;
        async function fetchData() {
            try {
                const response = await axios.get(url);
                setMeta(response.data.articles);
            } catch (error) {
                console.error(error);
            }

        }
        fetchData();
    }, [])

    return (
        <div>
            <div className='sport'>
                <h1 style={{ fontFamily: "cursive", textAlign: "center" }}>Meta</h1>
                <div className='d-flex align-content-stretch flex-wrap container my-3' style={{ justifyContent: "center" }}>
                    {meta ? meta.map((e, i) =>
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

export default Meta