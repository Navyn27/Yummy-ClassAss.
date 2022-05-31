import React from 'react'

function Sale(props) {
  return (
    <div className='w-[90%] h-[4rem] bg-lightYellow1 flex items-center justify-between px-[1.5rem] ' style={{boxShadow: '4px 10px 8px rgba(160, 146, 146, 0.17)'}}>
      <b className='font bold'>{props.name}</b>
      <b className='text-oYellow'>{props.earnings}</b>
    </div>
  )
}

export default Sale;
