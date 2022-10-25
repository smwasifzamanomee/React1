import React from 'react'
import Layout from './Layout/Layout'
import Home from './Pages/Home/Main'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Layout />}></Route>
      <Route index element={ <Home />}></Route>
    </Routes>
    </div>    
  )
}

export default App