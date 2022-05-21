import React from 'react'
import { BsCheck } from 'react-icons/bs'

function NewResto(props) {
  console.log(props.id)
  return (
    <div className='w-[21rem] h-[4rem] bg-lightYellow1 flex items-center justify-between px-[1.5rem] ' style={{boxShadow: '4px 10px 8px rgba(160, 146, 146, 0.17)'}}>
      <div className='flex items-center justify-center gap-[1rem]'>
          <div className='w-[1rem] h-[1rem] rounded-full border flex items-center justify-center ' style={{ boxShadow: '4px 10px 8px rgba(160, 146, 146, 0.17)', background: props.checked ? 'red' : 'white' }} onClick={()=>props.handleCheck(props.id)} >
            {props.checked && <BsCheck className='text-[white]'/>}
          </div>
          <h2 className='font-bold'>{props.type}</h2>
      </div>
      <button className='py-[.2rem] px-[2rem] bg-myred text-[white] rounded-[.2rem] font-bold '>new</button>
    </div>
  )
}

export default NewResto
