import * as React from 'react';
// import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import ScienceIcon from '@mui/icons-material/Science';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));



export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
 

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
// const [sport,setSport]=useState(""); 
const handleOnClickSport=(props)=>{
//   setSport("sport")
}


const scrollHistory = () => {
  const element2 = document.getElementById('section_history');
  if (element2) {
    // 👇 Will scroll smoothly to the top of the next section
    element2.scrollIntoView({ behavior: 'smooth' });
  }

}
const scrollSport  = () => {
  const element = document.getElementById('section_sport');
  if (element) {
    // 👇 Will scroll smoothly to the top of the next section
    element.scrollIntoView({ behavior: 'smooth' });
  }

}

const scrollMeta = () => {
  const element3 = document.getElementById('section_meta');
  if (element3) {
    // 👇 Will scroll smoothly to the top of the next section
    element3.scrollIntoView({ behavior: 'smooth' });
  }

}
const scrollScience = () => {
  const element4 = document.getElementById('section_science');
  if (element4) {
    // 👇 Will scroll smoothly to the top of the next section
    element4.scrollIntoView({ behavior: 'smooth' });
  }

}
const scrollAi = () => {
  const element1 = document.getElementById('section_ai');
  if (element1) {
    // 👇 Will scroll smoothly to the top of the next section
    element1.scrollIntoView({ behavior: 'smooth' });
  }

}
const scrollFinance = () => {
  const element = document.getElementById('section_finance');
  if (element) {
    // 👇 Will scroll smoothly to the top of the next section
    element.scrollIntoView({ behavior: 'smooth' });
  }

}

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Duniya Bhar ki Khabar 
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        
        <DrawerHeader>
         
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
          
        </DrawerHeader>
        <Divider />
        <h6 className='mx-4'>Hot-Topics</h6>
        <List>
          {['Sport', 'History'].map((text,index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={handleOnClickSport}>
                <ListItemIcon>
                  {index % 3 === 0 ? <SportsKabaddiIcon onClick={scrollSport} />: <HistoryEduIcon  onClick={scrollHistory}/>}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Science', 'Metaverse'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <ScienceIcon onClick={scrollScience }/> :<CurrencyBitcoinIcon onClick={scrollMeta}/> }
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <List>
          {['AI','Finance'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <SatelliteAltIcon onClick={scrollAi}/>:<CandlestickChartIcon onClick={scrollFinance}/> }
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
       
      </Main>
    </Box>
  );
}