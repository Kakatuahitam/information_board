import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@fontsource-variable/plus-jakarta-sans'
import VideoJS from './components/VideoJS'

import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

const theme = createTheme({
  palette: {
    primary: {
      main: '#007C6C',
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
  },
  typography: {
    fontFamily: [
      '"Plus Jakarta Sans"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(',')
  },
});

function App() {
  // const [width, setWidth] = useState(window.innerWidth);
  const [width, setWidth] = useState(window.innerWidth);
  const drawerWidth = width*(3/12);

  const playerRef = useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      type: 'video/mp4'
    }]
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{
          display: 'flex'
        }}>
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
          >
            <Toolbar>
              <Typography variant="h5" noWrap component="div">
                SD Islam Pembangunan
              </Typography>
            </Toolbar>
          </AppBar>

          <Drawer
            sx={{
              width: drawerWidth/2,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
              },
            }}
            variant="permanent"
            anchor="left"
          >

            <Divider />
            <List>
              <ListItem><img src={'SD Islam Pembangunan.png'}/></ListItem>
              <Divider />
              <ListItem>

                <Typography variant="h3" component="div">
                  Today's Statistics
                </Typography>
              </ListItem>


            </List>
          </Drawer>
          <Box
            gap={1}
            component="main"
            sx={{
              bgcolor: 'background.default',
              minWidth: 1200,
            }}
          >

          <>
            <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
          </>

          </Box>
        </Box>

      </ThemeProvider>
    </>
  )
}

export default App
