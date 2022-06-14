import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo  from '../../assets/yummy.png'
import Svg from './SignupSvg'
import ButtonSignUp from './ButtonSignUp'
import InputField from './InputField'
import { BsCheck } from 'react-icons/bs'

function Login() { 
  const [remember, setRemember] = useState(false)

  const [formData, setformData] = useState({ 
    email: '',
    phone: 0,
    password: '',
    rememberMe: false
  })

  
  function handleChange(e){ 
    e.preventDefault()
    const { value, name, type, checked } = e.target
      setformData(prevFormData=>{ 
      return { 
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value
      }
    })
  }

  const handleSubmit = (e) =>{ 
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className='w-screen h-screen  grid place-items-center bg-[#eeeeee]'>
      <div className='w-[60%] h-[75%] bg-[#f7f6f6] flex '>
          <div className='w-[50%] h-full bg-myred flex flex-col items-center justify-center'>
            <img src={ logo } alt='logo' width='200px' />
            <Svg />
            <div className='flex flex-col items-start justify-center mt-[2rem]'>
              <span className='text-xl font-bold text-[white]'>Sign up inorder to </span>
              <span className='text-xl font-bold text-[white]'>increase your next profit</span>
            </div>
          </div>

          <form action="/ishi" className='w-[55%] h-full' onSubmit={ handleSubmit }>
            <div className='w-full h-full flex flex-col items-center justify-center' >
              <div className='flex flex-col items-center justify-center gap-[1rem]'>
                <h1 className='text-xl font-bold '>Welcome back</h1>
                <h1 className='text-2xl font-bold text-myred'>Login to your account</h1>
              </div>
              
              <div className='w-[75%] h-[45%] flex items-center justify-center gap-[25rem] overflow-hidden' >
                  <div className='w-[80%] h-full flex flex-col items-center justify-center gap-[1rem] transition-all duration-500' >
                      <InputField label='Email'  name='email' handleChange={ handleChange } value={ formData.email } />

                      <InputField label='Phone' type='number'  name='phone' handleChange={ handleChange } value={ formData.phone } />

                      <InputField label='Password' type='password'   name='password' handleChange={ handleChange } value={ formData.password } />

                    <div className='w-[25rem] h-[10%] flex justify-between items-center '>
                      <div className='w-[10rem] h-[2rem] flex items-center justify-center gap-2'>
                          <input type='checkbox' checked={ formData.rememberMe } id='rememberMe' handleChange={handleChange} name='rememberMe' className='opacity-0' />

                        <label htmlFor='rememberMe' onClick={ ()=>setRemember(()=>{ return !remember }) } className='text-xs absolute flex items-center justify-center gap-[.2rem]' ><BsCheck className={`text-[${remember ? 'white' : 'white'}] bg-${remember && 'myred'} border border-black`}  />Remember me</label>
                      </div>
                      <Link to='/resetPassword' className='text-myred text-xs font-bold'>forgot password ?</Link>
                    </div>
                  </div>
              </div>
              
              <div className='w-fit h-fit flex flex-col items-center justify-center gap-[1rem]'>
                <button className={ `px-[10rem] py-[.75rem] bg-myred text-[white] font-bold` } >
                  login
                </button>
                <h1>Don't have an account? <Link to='/register' className='text-myred font-bold' >Sign up</Link></h1>
                <div className='w-full h-[4rem] flex flex-col items-center justify-center'>
                  <span>or</span>
                  <Link to='/signin' className='text-myred font-semibold text-[.9rem] underline'>sign in with google</Link>
                </div>
              </div>
            </div>
          </form>
      </div>
    </div>
  )
 }

export default Login
