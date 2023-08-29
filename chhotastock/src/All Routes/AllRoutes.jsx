import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/HomePageComponents/Home'
import SecondPage from '../Components/SecondPageComponents/SecondPage'


function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/secondpage' element={<SecondPage/>}/>
    </Routes>
  )
}

export default AllRoutes