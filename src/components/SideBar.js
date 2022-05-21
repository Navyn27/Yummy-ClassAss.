import React from 'react'
import logo from './../assets/logo.png'
import { SiAirtable } from 'react-icons/si'
import { FaFirstOrder } from 'react-icons/fa'
import { MdOutlineViewInAr } from 'react-icons/md'
import { HiViewGrid } from 'react-icons/hi'
import { FiSettings } from 'react-icons/fi'
import { CgProfile } from 'react-icons/cg'

import Sidebarcomponent from './Sidebarcomponent'

function Sidebar() {

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

  const sidebarComponentsData2 = [
    {
      icon: <FiSettings />,
      content: 'Settings'
    },
    {
      icon: <CgProfile />,
      content: 'Profile'
    }
  ]


  const sidebarComponents1 = sidebarComponentsData1.map((sidebarcomponentData, index)=>{
    return <Sidebarcomponent key={index} icon={sidebarcomponentData.icon} name={sidebarcomponentData.content} link={sidebarcomponentData.content} />
  })

  const sidebarComponents2 = sidebarComponentsData2.map((sidebarcomponentData, index)=>{
    return <Sidebarcomponent key={index} icon={sidebarcomponentData.icon} name={sidebarcomponentData.content} />
  })


  return (
    <div className='w-[25rem] h-[100vh] bg-myred flex flex-col items-center justify-between fixed z-[1] '>
      <div className='w-full h-[50%] flex flex-col items-center justify-around '>
        <div className='logo w-[15rem] h-fit flex items-center justify-start '>
            <img src={logo} alt="logo" />
        </div>
        <div className='w-full h-fit flex flex-col items-center justify-center gap-[2rem]' >
          {sidebarComponents1}
        </div>
      </div>
      <div className='w-full h-[20%]  flex flex-col items-center justify-center gap-[2rem]'>
        {sidebarComponents2}
      </div>
    </div>
  )
}

export default Sidebar;
