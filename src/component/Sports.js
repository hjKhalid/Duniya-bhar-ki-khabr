import React from 'react'
import Card from './Card'
import axios from 'axios'
import { useState, useEffect } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CustomRatio from './CustomRatio';

export function Sports(props) {
  const [sport, setSport] = useState("");
  const [current,setCurrent]=useState("");
  const [currentMatch,setCurrentMatch]=useState("");
  const [currentStatus,setCurrentStatus]=useState("");
  const [currentOver,setCurrentOver]=useState("");
  const [currentRun,setCurrentRun]=useState("");
  const [currentWicket,setCurrentWicket]=useState("");
  const [page, setPage] = useState(1 | (() => 1))
  const handleOnForword = () => {
    setPage(page + 1);
  }
  const handleToBacward=()=>{
    setPage(page-1)
  }

  useEffect(() => {
    const url = ` https://newsapi.org/v2/everything?q=sport&apiKey=a579b0b0293e41fd8dd42d2420dac883&page=${page}&pageSize=6`;
    async function fetchData() {
      try {
        const response = await axios.get(url);
        setSport(response.data.articles);
      } catch (error) {
        console.error(error);
      }

    }
    fetchData();
  }, [page])
   
  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://livescore6.p.rapidapi.com/matches/v2/list-live',
      params: {Category: 'cricket', Timezone: '-7'},
      headers: {
        'X-RapidAPI-Key': '7e3a69d1f7mshed072df5bd903ddp1aa64cjsnebe547687d1f',
        'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
      }
    };
    
    async function fetchData() {
      try {
        const response = await axios.request(options);
        setCurrent(response.data.Stages[0].Cnm);
        setCurrentMatch(response.data.Stages[0].Scd);
        setCurrentStatus(response.data.Stages[0].Events[0].ECo)
        setCurrentOver(response.data.Stages[0].Events[0].Tr1CO1)
        setCurrentRun(response.data.Stages[0].Events[0].Tr1C1)
        setCurrentWicket(response.data.Stages[0].Events[0].Tr1CW1)
      } catch (error) {
        console.error(error);
      }

    }
    fetchData();
  }, [])
console.log(current)
console.log(currentMatch);
console.log(currentStatus);
console.log(currentOver);
console.log(currentRun);
console.log(currentWicket);


  return (
    <div style={{display:"flex"  }}>
      <div className='sport'>
        <h1 style={{ fontFamily: "cursive", textAlign: "center" }}>Sport</h1>
        <div className='d-flex align-content-stretch flex-wrap container my-3' style={{ justifyContent: "center" }}>
          {sport ? sport.map((e, i) =>
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

            <button className='mx-3 my-3' onClick={handleToBacward}  ><ArrowBackIosNewIcon /></button>

            <button onClick={handleOnForword} ><ArrowForwardIosIcon /></button>
          </span>



        </div>
        
      </div>
      <div style={{margin:"5rem 0 0 1rem",padding:"0 2rem 0 0"}}>
          <CustomRatio matches={current} Run={currentRun} wicket={currentWicket} over={currentOver} status={currentStatus} matchesBetween={currentMatch} />
        </div>
    </div>
  )
}

export default Sports