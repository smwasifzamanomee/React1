import React from 'react'
import { Outlet, useParams } from 'react-router-dom'
import Footer from '../Shared/Footer'
import Navbar from '../Shared/Navbar'

const Layout = () => {
  return (
    <main>
      <Navbar />

      <Outlet />

      <Footer />
    </main>
  )
}

export default Layout