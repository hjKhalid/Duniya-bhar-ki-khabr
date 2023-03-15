import React, { useState ,useEffect} from 'react'
import  Card from './Card';
import axios from 'axios';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export  function AI() {
    const [ai, setAi] = useState("");
    useEffect(() => {
        const url = ` https://newsapi.org/v2/everything?q=ai&apiKey=d8fdb92a19454a4d93f5714f2c54a1b4&page=${3}&pageSize=6`;
        async function fetchData() {
            try {
                const response = await axios.get(url);
                setAi(response.data.articles);
            } catch (error) {
                console.error(error);
            }

        }
        fetchData();
    }, [])
    return (
        <div>
            <div className='sport'>
                <h1 style={{ fontFamily: "cursive", textAlign: "center" }}>AI</h1>
                <div className='d-flex align-content-stretch flex-wrap container my-3' style={{ justifyContent: "center" }}>
                    {ai ? ai.map((e, i) =>
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
       
      </div>
            </div>
        </div>
    )
}

export default AI