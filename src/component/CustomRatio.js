import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Typography from '@mui/joy/Typography';

export default function CustomRatio(props) {
  return (
    <AspectRatio
      variant="outlined"
      ratio="4/3"
      sx={{
        width: 300,
        bgcolor: 'background.level2',
        borderRadius: 'md',
      }}
    >
      <Typography level="h5" component="div" className='my-5'>
       
       {props.matches}        
      </Typography>
      <Typography level="h6" component="div" className='mx-3 my-3'>
      
      {props.matchesBetween}
        
      </Typography>
      <Typography level="h6" component="div" className='mx-3'>
       Run:{props.Run} Wicket:{props.wicket} Over:{props.over} 
     
      </Typography>
      <Typography level="h6" component="div" className='mx-3'>
       Status:{props.status}
     
      </Typography>
    </AspectRatio>
  );
}