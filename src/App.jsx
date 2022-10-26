import React from 'react'
import Layout from './Layout/Layout'
import Home from './Pages/Home/Main'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
        </Route>

      </Routes>
    </>
  )
}

export default App