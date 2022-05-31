import React from 'react'

function Order(props) {
  const { name, customerName, orderContent, tableNumber, cost, customerType } = props

  const newOrderContent = orderContent.map((item, index)=>{
    if(index !== orderContent.length -1) {
      return item+', '
    }else{
      return item
    }
  })

  console.log(customerType)
  return (
    <div className='w-[60rem] h-[8rem] bg-lightYellow1 flex items-center justify-center gap-[2rem] hover:scale-[1.01] hover:transition-ease duration-200 ' style={{boxShadow: '4px 10px 8px rgba(160, 146, 146, 0.17)'}}>
      <div className='w-[20%] h-full flex items-center justify-center '>
        <b className='text-myred font-bold'>{name}</b>
      </div>
      <div className='w-[50%] h-full flex flex-col items-start justify-center gap-[1rem]'>
        <div className='flex flex-col gap-[.1rem] '>
          <b className='font-bold'>{customerName}</b>
          <small className='font-bold'>{newOrderContent}</small>
        </div>
        <small className='text-myred font-bold'>--{tableNumber}--</small>
      </div>
      <div className='w-[20%] h-full flex flex-col items-start justify-center gap-[1rem] '>
        <b className='text-yellow font-bold'>{cost} frs</b>
        <b className='font-bold'>--{customerType}--</b>
      </div>
    </div>
  )
}

export default Order