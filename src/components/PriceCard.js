import React from 'react'

function PriceCard(props) {
  return (
    <div className='w-[18rem] h-[10rem] bg-lightYellow flex flex-col items-center justify-center gap-[1rem] ' style={{boxShadow: '4px 10px 8px rgba(160, 146, 146, 0.17)'}}>
      <h1 className='text-xl font-black'>{props.name}</h1>
      <b className='text-myred text-2xl font-black font-[Nunito]'>{props.amount}</b>
    </div>
  )
}

export default PriceCard;