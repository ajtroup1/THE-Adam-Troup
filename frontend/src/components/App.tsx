import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '../assets/css/main.css'
import '../assets/css/fontawesome-all.min.css'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './LandingPage'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  )
}

export default App
