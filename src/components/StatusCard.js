import React from 'react'

function StatusCard(props) {
  return (
    <div className='w-[15rem] h-[10rem] bg-[white] flex flex-col items-center justify-center ' style={{boxShadow: '0px 1px 2px rgba(160, 146, 146, 0.17)'}} >
      <b className='text-xl font-black font-Ninut'>{props.statusName}</b>
      <b className='text-3xl text-oYellow'>{props.statusValue}</b>
    </div>
  )
}

export default StatusCard;
