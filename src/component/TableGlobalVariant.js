import * as React from 'react';
import axios from 'axios'
import AspectRatio from '@mui/joy/AspectRatio';
import Typography from '@mui/joy/Typography';
import Textarea from '@mui/joy/Textarea';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';

export default function TableGlobalVariant(props) {
   const [city,setChange]=React.useState("");
   const [userCity,setUserCity]=React.useState("");
   const [userState,setUserState]=React.useState("");
   const [inState,setInState]=React.useState("");
   const [fuel,setFuel]=React.useState("");
   const [cityName,setCityName]=React.useState("");
   const [petrol,setPetrol]=React.useState("");
   const [diesel,setDiesel]=React.useState("");
   const [cng,setCng]=React.useState("");
   const [lpg,setlpg]=React.useState("");
  

  const handleOnStateChange=(event)=>{
    setUserState(event.target.value);

  }

  const handleOnchange=(event)=>{
   setChange(event.target.value);
  }
  console.log(userCity);
    
//  React.useEffect(() => {
    const options = {
      method: 'GET',
      url: `https://daily-petrol-diesel-lpg-cng-fuel-prices-in-india.p.rapidapi.com/v1/fuel-prices/today/india/${inState}/${userCity}`,
      headers: {
        'X-RapidAPI-Key': '7e3a69d1f7mshed072df5bd903ddp1aa64cjsnebe547687d1f',
        'X-RapidAPI-Host': 'daily-petrol-diesel-lpg-cng-fuel-prices-in-india.p.rapidapi.com'
      }
    };
    
   
    async function fetchData() {
        try {
            const response = await axios.request(options);
            setFuel(response.data);
            setCityName(response.data.cityName);
            setPetrol(response.data.fuel.petrol.retailPrice);
            setDiesel(response.data.fuel.diesel.retailPrice);
            setCng(response.data.fuel.cng.retailPrice);
            setlpg(response.data.fuel.lpg.retailPrice);
        } catch (error) {
            console.error(error);
        }

    }
    fetchData();
// }, []);
const handleOnClick=()=>{
  setUserCity(city);
  setInState(userState);
}
console.log(fuel);
console.log(inState);
  return (


    <AspectRatio
    variant="outlined"
    ratio="4/5"
    sx={{
      width: 300,
      bgcolor: 'background.level2',
      borderRadius: 'md',
    }}
  >
    <Typography level="h5" component="div" className='my-5'>
     
     Fuel price in india

    </Typography>
    <Typography level="h6" component="div" className='mx-3 my-3'>
    
       City : {cityName}

      
    </Typography>
 
    <Typography level="h6" component="div" className='mx-3'>
      Petrol: {petrol}<br/>
      Diesel: {diesel}<br/>
      Cng: {cng}<br/>
      Lpg: {lpg}<br/>

   
    </Typography>
    <Typography level="h6" component="div" className='mx-3'>

   
    </Typography>
    <div className='my-4 mx-2'>
    <Textarea placeholder="Enter your city name"  onChange={handleOnchange}/>
    <Textarea placeholder="Enter your State"  onChange={handleOnStateChange}/>
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
      <Button className='my-2 mx-3' onClick={handleOnClick}> fetch fuel price</Button>
     </Box>
    </div>
    
  </AspectRatio>
   
  );
}