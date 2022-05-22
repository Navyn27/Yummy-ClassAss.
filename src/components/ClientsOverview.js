//   importting components
import React from 'react'
import Navbar from './Navbar'
import ClientView from './ClientView'
import Chart1 from './Chart1'
import NewResto from './New_Resto'

//  importing hooks
import { useState, useEffect } from 'react'

//  importing icons

import { IoIosAddCircle } from 'react-icons/io'
import { IoMdRemoveCircle } from 'react-icons/io'
function Main() {
    const [clientViewDatas, setclientViewDatas] = useState([
        {name: 'Kigalie', earnings: 90000, type: 'Resto'},
        {name: 'Kigalie', earnings: 90000, type: 'Resto'},
        {name: 'Kigalie', earnings: 90000, type: 'Resto'},
        {name: 'Kigalie', earnings: 90000, type: 'Resto'},
    ])
    // data for the chart

    const clientViews = clientViewDatas.map((clientViewData, index)=>{
        return <ClientView key={index} name={clientViewData.name} earnings={clientViewData.earnings} type={clientViewData.type} />
    })

    const [addState, setAddState] = useState(false)
    const showNewResto = () =>{
        setAddState(prevAddState=> !prevAddState)
    }

    const [newRestoData, setNewRestoData] = useState([{type: 'Restaurant', checked: false, id: 6}, {type: 'Hotel', checked: false, id: 1}, {type: 'Pub', checked: false, id: 2}, {type: 'Cafe', checked: false, id: 3}])

    const handleCheck = (id) =>{
        setNewRestoData(prevRestoData=>{
            return prevRestoData.map(data=>{
                    if(data.checked === true) {
                        return {...data, checked: false}
                    }else{
                        return data.id  === id ? {...data, checked: !data.checked} : data
                    }
                
            })
        })
    }

    const newResto = newRestoData.map((restoData, index)=>{
        return <NewResto key={index} type={restoData.type} id={restoData.id} checked={restoData.checked} handleCheck={handleCheck} />
    })

  return (
    <div className='h-fit w-[95rem] flex flex-col items-center justify-center gap-[5rem] absolute right-0  '>
      <Navbar />
      {addState && <div className='w-[80%] h-[100vh] fixed bg-[#00000052] flex flex-col gap-[2rem] top-0 items-center justify-center' style={{display: addState ? 'flex' : 'none' }}>
                <IoMdRemoveCircle onClick={showNewResto} className='absolute top-[25%] right-[35%]' />
                {newResto}
      </div>}
      <div className='w-[95%] h-fit flex flex-col items-center justify-start gap-[4rem] '>
        <div className='h-fit w-fit p-2 flex items-center justify-center gap-[2rem]'>
            <b>Add a client</b>
            <IoIosAddCircle className='text-myred' onClick={showNewResto} />
        </div>
        <div className='w-[80%] h-full'>
            <Chart1 />
        </div>
        <div className='w-full h-full flex flex-col items-center justify-center gap-[2rem]'>
            
            <div className='w-[80%] h-full bg-lightBlue flex flex-col items-center justify-center gap-[2rem] py-10'>
                <div className='w-[60rem] h-[5rem] flex items-center gap-[11rem]'>
                    <b className='font-bold'>Client details</b>
                    <b className='font-bold'>Sales</b>
                    <b className='font-bold'>Detailed report</b>
                    <b className='font-bold'>Category</b>
                </div>
                <div className='w-full h-full bg-lightBlue flex flex-col items-center justify-center gap-[2rem] '>
                    {clientViews}
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Main;
