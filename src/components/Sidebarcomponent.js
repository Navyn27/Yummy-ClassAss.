import React from 'react'

function Sidebarcomponent(props) {
  return (
    <div className='w-[15rem] h-fit flex items-center justify-start gap-[1rem]'>
        <div className='text-white text-3xl font-bold'>{props.icon}</div>
        <b className='text-white text-xl'>{props.name}</b>
    </div>
  )
}

export default Sidebarcomponent
