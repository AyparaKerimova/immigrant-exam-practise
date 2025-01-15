import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const MainLayout = () => {
  return (
    <>
        <Header/>
        <Navbar/>
        <Outlet/>
    </>
  )
}

export default MainLayout