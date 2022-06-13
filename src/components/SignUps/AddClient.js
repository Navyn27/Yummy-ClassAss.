import React, { useState } from 'react'
import logo  from '../../assets/yummy.png'
import Svg from './AddSvg'
import ButtonSignUp from './ButtonSignUp'
import { TextField } from '@mui/material'
function AddClient() {
  const [swap, setSwap] = useState(false)
  const [textfieldsValue, setTextFieldsValue] = useState({
    clientName: '',
    category: '',
    representative: '',
    dob: '',
    adress: '',
    email: '',
    phone: '',
    backAccount: ''
  })

  function handleSubmit(e){
    e.preventDefault()
    const {value} = e.target
    console.log(value)
  }

  const buttonContents = [{content: 'Next', type: 'button'}, {content: 'Previous', type: 'button'}, {content: 'register', type: 'submit'}]

  const buttons = buttonContents.map((button, index)=>{
    return <ButtonSignUp key={index} content={button.content} setSwap={setSwap} handleSubmit={handleSubmit} type={button.type} swap={swap} />
  })

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

          <div className='w-[60%] h-full' >
            <form action="" className='h-full w-full flex flex-col items-center justify-center' onSubmit={handleSubmit}>
              <h1 className='text-2xl font-bold text-myred'>Add your client</h1>
              <div className='w-[70%] h-[60%] flex items-center justify-center gap-[25rem] pl-[27rem] overflow-hidden' style={{flexDirection: swap === true ? 'row-reverse' : 'row'}}>
                <div className='w-[60%] h-full flex flex-col items-center justify-center gap-[1.5rem] transition-all duration-500'>
                    <div className='w-[23rem] h-[4rem]'>
                      <TextField label='Client name' id="outlined-basic" fullWidth name='clientName' onChange={(event)=>handleSubmit(event)} />
                    </div>
                    <div className='w-[23rem] h-[4rem]'>
                      <TextField label='Category' id="outlined-basic" fullWidth name='category' onChange={(event)=>handleSubmit(event)} />
                    </div>
                    <div className='w-[23rem] h-[4rem]'>
                      <TextField label='Representative' id="outlined-basic" fullWidth name='representative' onChange={(event)=>handleSubmit(event)} />
                    </div>
                  <div className='w-[23rem] h-[4rem] '>
                    <TextField label='Date of birth' id="outlined-basic" fullWidth name='dob' onChange={(event)=>handleSubmit(event)} />
                  </div>
                </div>
                <div className='w-[60%] h-full flex flex-col items-center justify-center gap-[1.5rem] transition-all duration-500'>
                  <div className='w-[23rem] h-[4rem]'>
                    <TextField label='Adress' id="outlined-basic" fullWidth name='adress' onChange={(event)=>handleSubmit(event)} />
                  </div>
                  <div className='w-[23rem] h-[4rem]'>
                    <TextField label='Email' id="outlined-basic" fullWidth name='email' onChange={(event)=>handleSubmit(event)} />
                  </div>
                  <div className='w-[23rem] h-[4rem]'>
                    <TextField label='Phone' id="outlined-basic" fullWidth name='phone' onChange={(event)=>handleSubmit(event)} />
                  </div>
                  <div className='w-[23rem] h-[4rem]'>
                    <TextField label='Bank account' id="outlined-basic" fullWidth name='backAccount' onChange={(event)=>handleSubmit(event)} />
                  </div>

                </div>
              </div>
              <div className='flex flex-col items-center justify-center gap-[1rem]'>
                {buttons}
              </div>
            </form>
          </div>
      </div>
    </div>
  )
}

export default AddClient
