import React from 'react'
import Sale from './Sale';

function Cscard(props) {
  const sale = [{name: 'La lune de couer', earnings: '190000frs'}, {name: 'La lune de couer', earnings: '90000frs'}]

  const sales = sale.map((sale, index)=>{
    return <Sale key={index} name={sale.name} earnings={sale.earnings} />
  })

  return (
    <div className='w-[28rem] h-[18rem] bg-[white] flex flex-col items-center justify-between gap-[1rem] relative overflow-auto '>
      <div className='w-full h-[6rem] bg-lightRed grid grid-cols-2 gap-[.5rem] gap-x-10 p-[1.5rem] '>
          <b className='text-xl font-bold'>{props.type}</b>
          <b className='text-lg text-myred font-bold '>View details</b>
          <b>Sales</b>
      </div>
      <div className='w-full h-fit flex flex-col items-center justify-center gap-[1rem] mb-[1rem] '>
        {sales}
      </div>
    </div>
  )
}

export default Cscard;