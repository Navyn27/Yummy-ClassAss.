import React from 'react'

function RestoProgress(props) {
    const { number, progress, name} = props
  return (
    <div className='w-[22rem] h-[3.5rem] flex items-center gap-3'>
      <div className={`w-[4rem] h-[4rem] rounded-full bg-${'myred'} grid place-items-center `}>
          <b className={`text-[white] text-xl`}>{number}</b>
      </div>
      <h1 className='text-xl'>{name}</h1>
    </div>
  )
}

export default RestoProgress
