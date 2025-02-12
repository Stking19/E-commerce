import React from 'react'
import Header from './Header/Header'
import Loadscreen from './Loadscreen'
import Footer from './footer/Footer'
import { Outlet } from 'react-router-dom'


const LandingPage = () => {
  return (
    <>  
    <Loadscreen />
    <Header/>
    <Outlet />
    <Footer />
    </>


  )
}

export default LandingPage