import React, { useState } from 'react'
import logo from './../assets/logo.png'
import { SiAirtable } from 'react-icons/si'
import { FaFirstOrder } from 'react-icons/fa'
import { MdOutlineViewInAr } from 'react-icons/md'
import { HiViewGrid } from 'react-icons/hi'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'
import useDarkMode from '../Hooks/useDarkMode'
import { Link } from 'react-router-dom'

import Sidebarcomponent from './Sidebarcomponent'

function Sidebar() {

  const [theme, setTheme] = useDarkMode()

  const sidebarComponentsData1 = [
    {
      icon: <HiViewGrid />,
      content: 'Menu'
    },
    {
      icon: <SiAirtable />,
      content: 'Tables'
    },
    {
      icon: <MdOutlineViewInAr />,
      content: 'overview'
    },
    {
      icon: <FaFirstOrder />,
      content: 'Orders'
    },
  ]

  const sidebarComponents1 = sidebarComponentsData1.map((sidebarcomponentData, index)=>{
    return <Sidebarcomponent key={index} icon={sidebarcomponentData.icon} name={sidebarcomponentData.content} link={sidebarcomponentData.content}  />
  })

  return (
    <div className='w-[25rem] h-[100vh] bg-myred dark:bg-[orange] flex flex-col items-center justify-between fixed z-[1] '>
      <div className='w-full h-[50%] flex flex-col items-center justify-around '>
        <div className='logo w-[15rem] h-fit flex items-center justify-start '>
            <img src={logo} alt="logo" />
        </div>
        <div className='w-full h-fit flex flex-col items-center justify-center gap-[2rem]' >
          {sidebarComponents1}
        </div>
      </div>
      <div className='w-full h-[20%]  flex flex-col items-center justify-center gap-[2rem]'>
        <div className='SidebarComponent w-[15rem] h-[3rem] flex items-center justify-start gap-[1rem] rounded-[.2rem]'>
            <div className='text-[white] text-3xl font-bold'>{theme === 'dark' ? <MdDarkMode onClick={()=>setTheme(theme)}  /> : <MdLightMode onClick={()=>setTheme(theme)} />}</div>
            <b className='text-[white]'>{theme === 'dark' ? 'Darkmode' : 'Lightmode'}</b>
        </div>
        <Link to='/profile'>
          <div className='SidebarComponent w-[15rem] h-[3rem] flex items-center justify-start gap-[1rem] rounded-[.2rem]'>
              <div className='text-[white] text-3xl font-bold'><CgProfile /></div>
              <b className='text-[white]'>Profile</b>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar;
