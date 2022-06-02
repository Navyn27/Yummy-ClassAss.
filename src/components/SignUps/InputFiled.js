import React from 'react'
import { TextField } from '@mui/material'

function InputFiled(props) {
    const { label }= props
  return (
    <div>
      <div className='w-[23rem] h-[4rem] '>  
        <TextField label={label} id="outlined-basic" fullWidth />
      </div>
    </div>
  )
}

export default InputFiled
