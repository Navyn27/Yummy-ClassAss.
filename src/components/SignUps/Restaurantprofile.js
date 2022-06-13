import React from 'react'
import RestoProgress from './restoProgress'
import { FaUser } from 'react-icons/fa'
import { IconButton } from '@mui/material'
import logo from '../../assets/yummy.png'
import PProInput from './PProInput'
function Restaurantprofile() {
    const sidebarProgressData = [{number: 1, name: 'Restaurant Info'}, {number: 2, name: 'Restaurant type & Timings'}, {number: 3, name: 'Create your menu'}]

    const sidebarProgresses = sidebarProgressData.map((sidebarProgressData, index) =>{
        return <RestoProgress name={sidebarProgressData.name} number={sidebarProgressData.number} key={index} />
    })

    const parentProInputsData = [ {name: 'Contacts number @ Restaurant', id: 2}, {name: 'Restaurant owner details', id: 3}, {name: 'Opening hours', id: 4},{name: 'Upload images(pictures or logo)', id: 5}, {name: 'Name', id: 6}, {name: 'Price', id: 7}, {name: 'Image', id: 8}]

    const parentProInputs = parentProInputsData.map((parentProInputData)=>{
        return <PProInput key={parentProInputData.id} name={parentProInputData.name} />
    })
    console.log(parentProInputs.slice(0, 2))

  return (
    <div className='w-screen h-screen grid place-items-center   '>
        <div className='w-[80%] h-[80%]  flex items-center justify-center gap-[2rem]'>
            <div className='w-[33.3333%] h-full flex flex-col items-center justify-center gap-[8rem] '>
                <div className='profile w-[22rem] flex items-center justify-start gap-4'>
                    <IconButton>
                        <div className='w-16 h-16 rounded-full bg-btnYellow grid place-items-center'>
                            <FaUser className='text-white' /> 
                        </div>
                    </IconButton>
                    <h1 className='font-bold'>Imanishimwe Emmanuel</h1>
                </div>
                <div className='sideprogress flex flex-col items-center justify-center gap-10 '>
                    {sidebarProgresses}
                </div>
            </div>
            <div className='w-2/3 h-full flex flex-col items-start justify-center gap-[2rem] '>
                <img src={logo} alt="logo" width='200px' className='' />
                <h1 className='text-myred self-center text-2xl font-semibold'>Restaurant Profile</h1>
                <div className='w-full h-2/3 bg-btnYellow'>
                    {parentProInputs.slice(0, 1)}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Restaurantprofile
