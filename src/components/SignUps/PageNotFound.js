import React from 'react'
import NotFoundSvg from './NotFoundSvg'
import { Link } from 'react-router-dom'

function PageNotFound() {
  

  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center ' style={{ background: 'linear-gradient(to bottom,#FFDFE1,white)' }}>
      <div className='w-fit h-fit  flex flex-col items-center justify-center gap-[1rem]'>
        <NotFoundSvg />
        <div className='w-fit h-fit flex flex-col items-center justify-center gap-[.5rem]'>
          <b className='font-black text-xl'>The page you are looking for is not available</b>
          <h2 className='font-bold'>However, You may want to go back to the homepage</h2>
        </div>
        <button className='py-[.75rem] px-[4rem] bg-[#ff8800] text-white rounded-[2rem] '><Link to='/'>Go back</Link> </button>
      </div>
    </div>
  )
}

export default PageNotFound
