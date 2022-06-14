import React, { useState, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import logo  from '../../assets/yummy.png'
import Svg from './SignupSvg'
import ButtonSignUp from './ButtonSignUp'
import InputField from './InputField'
import { BsCheck } from 'react-icons/bs'
import { TextField } from '@mui/material'
function Login() {
  const [remember, setRemember] = useState(false)

  const [formData, setformData] = useState({
    email: '',
    phone: '',
    password: ''
  })

  function handleChange(e){
    e.preventDefault()
    const {value, name} = e.target

    setformData(prevFormData=>{
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    
  }

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
            <div className='flex flex-col items-center justify-center gap-[1rem]'>
              <h1 className='text-xl font-bold '>Welcome back</h1>
              <h1 className='text-2xl font-bold text-myred'>Login to your account</h1>
            </div>
            
            <div className='w-[75%] h-[45%] flex items-center justify-center gap-[25rem] overflow-hidden' >
                <form action="" className='w-[80%] h-full flex flex-col items-center justify-center gap-[1rem] transition-all duration-500' onSubmit={handleSubmit} >
                  <div className='w-[23rem] h-[4rem]'>
                    <TextField label='Email' id="outlined-basic" fullWidth name='email' onChange={handleChange} value={formData.email} />
                  </div>

                  <div className='w-[23rem] h-[4rem]'>
                    <TextField label='Phone' type='number' id="outlined-basic" fullWidth name='phone' onChange={handleChange} value={formData.phone} />
                  </div>

                  <div className='w-[23rem] h-[4rem]'>
                    <TextField label='Password'  id="outlined-basic" fullWidth name='password' onChange={handleChange} value={formData.password} />
                  </div>
                  
                  <div className='w-full h-[10%] flex items-center justify-between'>
                    <div className='flex items-center justify-center gap-2'>
                    <div className={`flex items-center justify-center w-[1rem] h-[1rem] border bg-${remember ? 'myred' : '[white]' } border-[${!remember ? 'black' : null}]`} onClick={()=>setRemember(()=>{return !remember})} >
                        <BsCheck className='text-[white]'/>
                    </div>
                      <b className='text-xs'>Remember me</b>
                    </div>
                    <Link to='/resetPassword' className='text-myred text-xs font-bold'>forgot password ?</Link>
                  </div>
                </form>
            </div>
            
            <div className='w-fit h-fit flex flex-col items-center justify-center gap-[1rem]'>
              <button type='submit'  className={`px-[10rem] py-[.75rem] bg-myred text-[white] font-bold`} >
                login
              </button>
              <h1>Don't have an account? <Link to='/register' className='text-myred font-bold' >Sign up</Link></h1>
              <div className='w-full h-[4rem] flex flex-col items-center justify-center'>
                <span>or</span>
                <Link to='/signin' className='text-myred font-semibold text-[.9rem] underline'>sign in with google</Link>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Login
