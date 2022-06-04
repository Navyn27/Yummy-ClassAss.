import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import logo  from '../../assets/yummy.png'
import Svg from './SignupSvg'
import ButtonSignUp from './ButtonSignUp'
import InputFiled from './InputFiled'
import { BsCheck } from 'react-icons/bs'

function ResetPassword() {
  const inputCredentials1 = [{label: 'Email'}, {label: 'Password'}]

  const inputfields1 = inputCredentials1.map((inputCredential, index)=>{
    return <InputFiled key={index} label={inputCredential.label} />
  })

  const [swap, setSwap] = useState(false)

  const [remember, setRemember] = useState(false)

  return (
    <div className='w-screen h-screen  grid place-items-center bg-[#eeeeee]'>
      <div className='w-[60%] h-[75%] bg-[#f7f6f6] flex '>
          <div className='w-[50%] h-full bg-myred flex flex-col items-center justify-center'>
            <img src={logo} alt='logo' width='200px' />
            <Svg />
            <div className='flex flex-col items-start justify-center mt-[2rem]'>
              <span className='text-xl font-bold text-[white]'>reset your password  </span>
              <span className='text-xl font-bold text-[white]'>inorder to login</span>
            </div>
          </div>

          <div className='w-[55%] h-full flex flex-col items-center justify-center' >
            <div className='flex flex-col items-center justify-center gap-[1rem]'>
              <h1 className='text-2xl font-bold text-myred'>Reset your account's password</h1>
            </div>
            
            <div className='w-[75%] h-[30%] flex items-center justify-center gap-[25rem] overflow-hidden' style={{flexDirection: swap === true ? 'row-reverse' : 'row'}}>
              <div className='w-[80%] h-full flex flex-col items-center justify-center gap-[1rem] transition-all duration-500'>
                {inputfields1}
              </div>
            </div>
            
            <div className='w-fit h-fit flex flex-col items-center justify-center gap-[1rem]'>
                <form action="">
                    <ButtonSignUp content='reset' setSwap={setSwap} swap={swap} />
                </form>
              <h1>Go back to <Link to='/register' className='text-myred underline font-bold text-[.9rem]' >Sign up</Link> or <Link to='/login' className='text-myred underline font-bold text-[.9rem]' >Log in</Link></h1>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ResetPassword
