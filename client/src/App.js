import React from 'react'
import { Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/style.css'
import Home from './Component/Home'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
