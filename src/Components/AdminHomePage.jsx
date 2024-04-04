import React from 'react'
import AdminNavbar from './AdminNavbar'
import '../Styles/AdminHomePage.css'
import { Route, Routes } from 'react-router-dom'
import AddVideos from './AddVideos'
import DisplayVideos from './DisplayVideos'
import EditVideos from './EditVideos'

function AdminHomePage() {
  return (
    <div className='admin-home-page'>
        <AdminNavbar/>
        <Routes>
          <Route path='/' element={<DisplayVideos/>} />
          <Route path='/addvideos' element={<AddVideos/>} />
          <Route path='/editvideo/:id' element={<EditVideos/>} />
        </Routes>
    </div>
  )
}

export default AdminHomePage