import React from 'react'
import { TextField } from '@mui/material'
function InputField(props) {
    const { label, name, handleChange } = props
  return (
    <div className='w-[23rem] h-[4rem]'>
        <TextField label={label} id="outlined-basic" fullWidth name={name} onChange={ handleChange } />
    </div>
  )
}

export default InputField
