import * as React from 'react';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Typography from '@mui/joy/Typography';

export default function DividedList(props) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 4,
      }}
    >
      {['gutter'].map((inset) => (
        <Box key={inset || 'default'}>
          <Typography level="body3" mb={2}>
           
          </Typography>
          <List
            variant="outlined"
            sx={{
              bgcolor: 'background.body',
              minWidth: 240,
              borderRadius: 'sm',
              boxShadow: 'sm',
              '--List-decoratorSize': '48px',
              '--ListItem-paddingLeft': '1.5rem',
              '--ListItem-paddingRight': '1rem',
            }}
          >
            <ListItem>
              <ListItemDecorator sx={{ alignSelf: 'flex-start' }}>
              <Avatar size="sm" src={props.imgUrl}  />
              </ListItemDecorator>
              {props.coin}
            </ListItem>
            <ListDivider inset={inset} />
            <ListItem>
              <ListItemDecorator sx={{ alignSelf: 'flex-start',display:"flex" }}>
              USD:
                {/* <span>{props.coin}</span> */}
              </ListItemDecorator>
             {props.Price} 
            </ListItem>
            {/* <ListItem>
              <ListItemDecorator sx={{ alignSelf: 'flex-start' }}>
                <Avatar size="sm" src="./public/icons/eth.jpg"/>
              </ListItemDecorator>
              
            </ListItem>
            <ListItem>
              <ListItemDecorator sx={{ alignSelf: 'flex-start' }}>
                <Avatar size="sm" src="./public/icons/images (2).jpg" />
              </ListItemDecorator>
             like th at 
            </ListItem> */}
          </List>
        </Box>
      ))}
    </Box>
  );
}
