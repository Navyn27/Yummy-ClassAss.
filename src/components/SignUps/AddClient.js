import React, { useState } from 'react'
import logo  from '../../assets/yummy.png'
import InputField from './InputField'
import Svg from './AddSvg'

const AddClient = () =>{
const [swap, setSwap] = useState(false)
  const [formData, setformData] = useState({
    clientName: '',
    category: '',
    representative: '',
    dob: '',
    adress: '',
    email: '',
    phone: '',
    backAccount: ''
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
    console.log(formData)
  }

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
            <form action="/login" className='h-full w-full flex flex-col items-center justify-center' onSubmit={handleSubmit} >
              <h1 className='text-2xl font-bold text-myred'>Add your client</h1>
              <div className='w-[70%] h-[60%] flex items-center justify-center gap-[25rem] pl-[27rem] overflow-hidden' style={{flexDirection: swap === true ? 'row-reverse' : 'row'}}>
                <div className='w-[60%] h-full flex flex-col items-center justify-center gap-[1.5rem] transition-all duration-500'>
                  <InputField label='Client name' name='clientName' onChange={handleChange} value={formData.clientName} />
                  <InputField label='Category' name='category' onChange={handleChange} value={formData.category} />
                  <InputField label='Representative' name='representative' onChange={handleChange} value={formData.representative} />
                  <InputField label='Date of birth' name='dob' onChange={handleChange} value={formData.dob} />
                </div>
                <div className='w-[60%] h-full flex flex-col items-center justify-center gap-[1.5rem] transition-all duration-500'>
                  <InputField label='Adress' name='adress' onChange={handleChange} value={formData.adress} />
                  <InputField label='Email' name='email' onChange={handleChange} value={formData.email} />
                  <InputField label='Phone' name='phone' onChange={handleChange} value={formData.phone} />
                  <InputField label='Bank account' name='backAccount' onChange={handleChange} value={formData.backAccount} />
                </div>
              </div>
              <div className='flex flex-col items-center justify-center gap-[1rem]'>
                <button type='button'  className={`px-[10rem] py-[.75rem] bg-myred text-[white] font-bold`} style={{display: !swap ? 'none' : null }} onClick={()=>setSwap(false)}>
                    Previous
                </button>
                <button type='button'  className={`px-[10rem] py-[.75rem] bg-myred text-[white] font-bold`} style={{display: swap ? 'none' : null }} onClick={()=>setSwap(true)}>
                    Next
                </button>
                <button type='submit'  className={`px-[10rem] py-[.75rem] bg-myred text-[white] font-bold`} style={{display: !swap ? 'none' : null }} >
                    Submit
                </button>
              </div>
            </form>
          </div>
          
      </div>
    </div>
  )
}

export default AddClient
