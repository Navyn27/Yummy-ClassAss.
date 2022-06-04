import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import logo  from '../../assets/yummy.png'
import Svg from './SignupSvg'
import ButtonSignUp from './ButtonSignUp'
import InputFiled from './InputFiled'

function Signup() {
  const inputCredentials1 = [{label: 'First name'}, {label: 'last name'}, {label: 'Email'}]
  const inputCredentials2 = [{label: 'Phone'}, {label: 'Password'}, {label: 'Confirm password'}]

  const inputfields1 = inputCredentials1.map((inputCredential, index)=>{
    return <InputFiled key={index} label={inputCredential.label} />
  })

  const inputfields2 = inputCredentials2.map((inputCredential, index)=>{
    return <InputFiled key={index} label={inputCredential.label} />
  })

  const buttonContents = [{content: 'Next'}, {content: 'Previous'}, {content: 'Sign up'}]

  const [swap, setSwap] = useState(false)

  const buttons = buttonContents.map((button, index)=>{
    return <ButtonSignUp key={index} content={button.content} setSwap={setSwap} swap={swap} />
  })

  return (
    <div className='w-screen h-screen  grid place-items-center bg-[#eeeeee]'>
      <div className='w-[60%] h-[75%] bg-[#f7f6f6] flex '>
          <div className='w-[50%] h-full bg-myred flex flex-col items-center justify-center'>
            <img src={logo} alt='logo' width='200px' />
            <Svg />
            <div className='flex flex-col items-start justify-center mt-[2rem]'>
              <span className='text-xl font-bold text-[white]'>Sign up inorder to </span>
              <span className='text-xl font-bold text-[white]'>increase your next profit</span>
            </div>
          </div>

          <div className='w-[55%] h-full flex flex-col items-center justify-center' >
            <h1 className='text-2xl font-bold text-myred'>Sign up</h1>
            <div className='w-[75%] h-[45%] flex items-center justify-center gap-[25rem] pl-[27rem] overflow-hidden' style={{flexDirection: swap === true ? 'row-reverse' : 'row'}}>
              <div className='w-[60%] h-full flex flex-col items-center justify-center gap-[1rem] transition-all duration-500'>
                {inputfields1}
              </div>
              <div className='w-[60%] h-full flex flex-col items-center justify-center gap-[1rem] transition-all duration-500'>
                {inputfields2}
              </div>
            </div>
            <div className='w-fit h-fit flex flex-col items-center justify-center gap-[1rem]'>
              {buttons}
              <h1>Already have an account? <Link to='/login' className='text-myred' >Login</Link></h1>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Signup
