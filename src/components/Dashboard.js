import React from 'react'
import SideBar from './SideBar'
import Main from './Main'
import Main2 from './Main2'
import ClientsOverview from './ClientsOverview'

import { Routes, Route } from 'react-router-dom'

function Dashboard() {
  return (
    <div className='w-[100vw] h-full flex justify-between '>
      <SideBar />
      <Routes>
        <Route path='/dashboard' element={<Main />} />
        <Route path='/orders' element={<Main2 />} />
        <Route path='/overview' element={<ClientsOverview />} />
      </Routes>
    </div>
  )
}

export default Dashboard
