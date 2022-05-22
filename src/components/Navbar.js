import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { MdNotificationsActive } from 'react-icons/md'
import { FaUserAlt } from 'react-icons/fa'

function Navbar(props) {
  return (
    <div className='w-full h-[8rem] flex items-center justify-between py-[4rem] px-[5rem] pr-[8rem]'>
      <h1 className='text-3xl font-bold'>{props.name}</h1>
      <div className='w-fit h-fit flex items-center justify-center gap-[2rem]'>
            <div className='w-fit h-[.5rem] border-r-[.2rem] border-black flex items-center justify-center gap-[2rem] p-[.8rem] pr-5 '>
                <FaSearch className='text-yellow text-2xl' />
                <MdNotificationsActive className='text-yellow text-3xl' />
            </div>
            <div className='w-fit h-fit flex items-center justify-center gap-[2rem]'>
                <b className='text-xl'>jacques Kagabo</b>
                <FaUserAlt className='text-yellow text-2xl' />
            </div>
      </div>
    </div>
  )
}

export default Navbar
