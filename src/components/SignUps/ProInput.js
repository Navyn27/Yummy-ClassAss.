import React, { useState } from 'react'
import { TextField, MenuItem, Select,  InputLabel } from '@mui/material'

function ProInput(props) {
    const [type, setType] = useState('')
    const { name, id, values } = props
    console.log(id)
    const valuesItems = values && values.map((value, index)=>{
        return <MenuItem value={ value } >{ value }</MenuItem>
    })

  return (
    <div className='w-[23rem] h-[2rem]'>
      {id !== 7 && id !== 8 ? <TextField label={name} fullWidth /> :
            <>
                <InputLabel id='type' >{name}</InputLabel>
                <Select labelId='type' value={type} >
                    {valuesItems}
                </Select>
            </>
       }
    </div>
  )
}

export default ProInput
