import React from 'react'
import { GrFormView } from 'react-icons/gr'

function Order(props) {
  const {name, earnings, type} = props
  return (
    <div className='w-[65rem] h-[6rem] bg-lightYellow1 flex items-center justify-center gap-[12rem] ' style={{boxShadow: '4px 10px 8px rgba(160, 146, 146, 0.17)'}}>
      <b className='text-myred'>{name}</b>
      <small className='font-bold'>{earnings}frs</small>
      <GrFormView className='text-xl' />
      <button className='font-bold bg-btnYellow rounded-full py-2 px-[4rem]'>{type}</button>
    </div>
  )
}

export default Order
