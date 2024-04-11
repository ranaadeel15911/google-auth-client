import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import GoogleAuth from './Components/GoogleAuth '
// import Gmail from './Components/Gmail'
// import GoogleAuth from './Components/GoogleAuth '
import Abc from './Components/Abc'
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home'
function App() {
  return (
    <>
    <Routes>
      <Route path="/login" element={<Abc/>} />
      <Route path="/" element={<Home/>} />
    </Routes>
{/* <Abc/> */}
    </>
  )
}

export default App
