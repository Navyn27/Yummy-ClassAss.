import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import logo  from '../../assets/yummy.png'
import Svg from './SignupSvg'
import ButtonSignUp from './ButtonSignUp'
import InputField from './InputField'

function ResetPassword() {
  const [formData, setformData] = useState({ 
    email: '',
    username: ''
  })

  function handleChange(e){ 
    e.preventDefault()
    const { value, name } = e.target
      setformData(prevFormData=>{ 
      return { 
        ...prevFormData,
        [name]: value
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
            <img src={logo} alt='logo' width='200px' />
            <Svg />
            <div className='flex flex-col items-start justify-center mt-[2rem]'>
              <span className='text-xl font-bold text-[white]'>reset your password  </span>
              <span className='text-xl font-bold text-[white]'>inorder to login</span>
            </div>
          </div>


            <form action="" className='w-[55%] h-full flex flex-col items-center justify-center' onSubmit={handleSubmit}>
              <div className='flex flex-col items-center justify-center gap-[1rem]'>
              <h1 className='text-2xl font-bold text-myred'>Reset your account's password</h1>
              </div>
              
              <div className='w-[75%] h-[30%] flex flex-col items-center justify-center gap-[1rem] transition-all duration-500'>
                <InputField label='Email' type='email'  name='email' handleChange={ handleChange } value={ formData.email } />
                <InputField label='Username' type='text'  name='username' handleChange={ handleChange } value={ formData.username } />
              </div>
              
              <div className='w-fit h-fit flex flex-col items-center justify-center gap-[1rem]'>
                <button type='submit' className={ `px-[9rem] py-[.75rem] bg-myred text-[white] font-bold` } >send code</button>
                <h1>Go back to <Link to='/register' className='text-myred underline font-bold text-[.9rem]' >Sign up</Link> or <Link to='/login' className='text-myred underline font-bold text-[.9rem]' >Log in</Link></h1>
              </div>
            </form>
      </div>
    </div>
  )
}

export default ResetPassword
