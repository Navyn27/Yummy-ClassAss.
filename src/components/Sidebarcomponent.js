import React from 'react'
import { Link } from 'react-router-dom'

function Sidebarcomponent(props) {
  console.log(props.link)
  return (
    <Link to={`/${props.link}`}>
      <div className='SidebarComponent w-[15rem] h-[3rem] flex items-center justify-start gap-[1rem] rounded-[.2rem]'>
          <div className='text-[white] text-3xl font-bold'>{props.icon}</div>
          <b className='text-[white]'>{props.name}</b>
      </div>
    </Link>
  )
}

export default Sidebarcomponent
