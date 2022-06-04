import React, { useState } from 'react'
import logo  from '../../assets/yummy.png'
import Svg from './AddSvg'
import ButtonSignUp from './ButtonSignUp'
import InputFiled from './InputFiled'

function AddClient() {
  const inputCredentials1 = [{label: 'Client name'}, {label: 'Category'}, {label: 'Representative'}, {label: 'Date of birth'}]
  const inputCredentials2 = [{label: 'Adress'}, {label: 'Email'}, {label: 'Phone'}, {label: 'Bank account'}]

  const inputfields1 = inputCredentials1.map((inputCredential, index)=>{
    return <InputFiled key={index} label={inputCredential.label} />
  })

  const inputfields2 = inputCredentials2.map((inputCredential, index)=>{
    return <InputFiled key={index} label={inputCredential.label} />
  })

  const buttonContents = [{content: 'Next'}, {content: 'Previous'}, {content: 'register'}]

  const [swap, setSwap] = useState(false)

  const buttons = buttonContents.map((button, index)=>{
    return <ButtonSignUp key={index} content={button.content} setSwap={setSwap} swap={swap} />
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

          <div className='w-[60%] h-full flex flex-col items-center justify-center' >
            <h1 className='text-2xl font-bold text-myred'>Add your client</h1>
            <div className='w-[70%] h-[60%] flex items-center justify-center gap-[25rem] pl-[27rem] overflow-hidden' style={{flexDirection: swap === true ? 'row-reverse' : 'row'}}>
              <div className='w-[60%] h-full flex flex-col items-center justify-center gap-[2rem] transition-all duration-500'>
                {inputfields1}
              </div>
              <div className='w-[60%] h-full flex flex-col items-center justify-center gap-[2rem] transition-all duration-500'>
                {inputfields2}
              </div>
            </div>
            <div className='w-fit h-fit flex flex-col items-center justify-center gap-[1rem]'>
              {buttons}
            </div>
          </div>
      </div>
    </div>
  )
}

export default AddClient
