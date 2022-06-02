import React from 'react'
import logo  from '../../assets/yummy.png'
import Svg from './AddSvg'
import { TextField } from '@mui/material'
function AddClient() {
  return (
    <div className='w-screen h-screen  grid place-items-center bg-[#eeeeee]'>
      <div className='w-[60%] h-[75%] bg-[#f7f6f6] flex '>
          <div className='w-[45%] h-full bg-myred flex flex-col items-center justify-center'>
            <img src={logo} alt='logo' width='200px' />
            <Svg />
            <div className='flex flex-col items-start justify-center mt-[2rem]'>
              <span className='text-xl font-bold text-[white]'>Enlarge your business by</span>
              <span className='text-xl font-bold text-[white]'>adding a new client</span>
            </div>
          </div>

          <div className='w-[60%] h-full flex flex-col items-center justify-center'>
            <h1 className='text-2xl font-bold text-myred'>Add your client</h1>
            <div className='w-[60%] h-[60%] flex flex-col items-center justify-center gap-[2rem]'>
              <div className='w-[23rem] h-[4rem] '>  
                <TextField label='Client Name' id="outlined-basic" fullWidth />
              </div>

              <div className='w-[23rem] h-[4rem] '>
                <TextField label='Category' id="outlined-basic" fullWidth />
              </div>

              <div className='w-[23rem] h-[4rem] '>
                <TextField label='Representative' id="outlined-basic" fullWidth />
              </div>

              <div className='w-[23rem] h-[4rem] '>
                <TextField label='Date of birth' id="outlined-basic" fullWidth />
              </div>
            </div>
            <button className='px-[10rem] py-[1rem] rounded-[.2rem]  bg-myred text-[white] font-bold'>Next</button>
          </div>
      </div>
    </div>
  )
}

export default AddClient
