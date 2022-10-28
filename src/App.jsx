import React from 'react'
import Layout from './Layout/Layout'
import Home from './Pages/Home/Main'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>} />
        </Route>

      </Routes>
    </>
  )
}

export default App