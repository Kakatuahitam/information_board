import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Button from '@mui/material/Button';

import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header title="My header" subtitle="subtitle2" />
      <Main message="My content" />
      <Button variant="contained">Hello world</Button>
      <Footer note="Footer Note" />
    </>
  )
}

export default App
