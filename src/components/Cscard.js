import React from 'react'
import SalesData from './salesData';

function Cscard(props) {
  const salesData = [{name: 'La lune de couer', earnings: '190000frs'}, {name: 'La lune de couer', earnings: '90000frs'}]

  const sales = salesData.map((salesdata, index)=>{
    return <SalesData key={index} name={salesdata.name} earnings={salesdata.earnings} />
  })

  return (
    <div className='w-[28rem] h-[18rem] bg-[white] flex flex-col items-center justify-between gap-[1rem] relative '>
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