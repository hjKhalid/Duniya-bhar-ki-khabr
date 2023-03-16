import React, { useEffect, useState } from 'react'
import DividedList from './DividedList';
import axios from 'axios'


function Crypto() {
    const [crypto,setCrypto]=useState("");
  
    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://coinranking1.p.rapidapi.com/coins',
            params: {
              referenceCurrencyUuid: 'yhjMzLPhuIDl',
              timePeriod: '24h',
              'tiers[0]': '1',
              orderBy: 'marketCap',
              orderDirection: 'desc',
              limit: '6',
              offset: '0'
            },
            headers: {
              'X-RapidAPI-Key': '7e3a69d1f7mshed072df5bd903ddp1aa64cjsnebe547687d1f',
              'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
            }
          };
          
        async function fetchData() {
          try {
            const response = await axios.request(options);
            setCrypto(response.data.data.coins);
          } catch (error) {
            console.error(error);
          }
    
        }
        fetchData();
      }, [])
    console.log(crypto);

  return (
    <div>
        {crypto?crypto.map((e,i)=>{
           return <DividedList key={i} imgUrl={e.iconUrl?e.iconUrl:""} Price={e.price?e.price:""} coin={e.name?e.name:""}/>
        }):<DividedList imgUrl="" Price=""/>}
        {/* <DividedList imgUrl="sjdfsjdgf" Price="khallid fdsf"/> */}
    </div>
  )
}

export default Crypto