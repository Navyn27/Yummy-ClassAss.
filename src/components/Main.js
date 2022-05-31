import React from 'react'
import Navbar from './Navbar'
import PriceCard from './PriceCard'
import Chart from './Chart'
import Cscard from './Cscard'
import StatusCard from './StatusCard'
import NewResto from './New_Resto'
import Zoom from 'react-reveal/Zoom'

import { useState } from 'react'

function Main() {
    const [priceCardsData, setPrice] = useState([
        {
            name: 'Clients',
            amount: 80
        },
        {
            name: 'Revenues',
            amount: 100000,
        },
        {
            name: 'orders',
            amount: 1000
        },
        {
            name: 'Unpaid',
            amount: 2
        }
    ])

    const priceElements = priceCardsData.map((priceCardData, index)=>{
        return <PriceCard key={index} name={priceCardData.name} amount={priceCardData.amount} />
    })

    const clientsCardsData = [{type: 'Restaurants'}, {type: 'Hotels'}, {type: 'Pubs'}, {type: 'Cafes'}]
    
    const clientCards = clientsCardsData.map((clientCardData, index)=>{
        return <Cscard key={index} type={clientCardData.type} />
    })

    const [statusCardsData, setStatusCardsData] = useState([{statusName: 'Delivered', statusValue:20}, {statusName: 'Waiting', statusValue: 8}, {statusName: 'Rejected', statusValue: 2}, {statusName: 'All', statusValue: 40}])

    const statusCards = statusCardsData.map((statusCardData, index)=>{
        return <StatusCard key={index} statusName={statusCardData.statusName} statusValue={statusCardData.statusValue} />
    })

    const [newRestoDatas, setNewRestoData] = useState([{type: 'Restaurant', checked: false, id: 1}, {type: 'Hotel', checked: false, id: 2}, {type: 'Pub', checked: false, id: 3}, {type: 'Cafe', checked: false, id: 4}])

    const handleCheck = (id) =>{
        setNewRestoData(prevNewRestoDatas=>{
            return prevNewRestoDatas.map((prevNewRestoData)=>{
                if(prevNewRestoData.checked === true) {
                    return {...prevNewRestoData, checked: false}
                }
                return prevNewRestoData.id === id ?  {...prevNewRestoData, checked: !prevNewRestoData.checked} : prevNewRestoData
            })
        })
    }

    const newResto = newRestoDatas.map((restoData, index)=>{
        return <NewResto key={index} type={restoData.type} id={restoData.id} checked={restoData.checked} handleCheck={handleCheck} />
    })

  return (
    <div className='h-[100rem] w-[95rem] flex flex-col items-center gap-[2rem] absolute right-0 '>
      <Navbar />
      <div className='w-[90%] h-fit flex items-center justify-between '>
        {priceElements}
      </div>
      <div className='w-[90%] h-[100rem] flex justify-between gap-2 '>
        <div className='bg-[blue w-[70%] h-full flex flex-col items-center justify-center gap-[2rem] '>
            <Zoom>
                <Chart />
            </Zoom>
            <div className='w-full h-[40rem] bg-lightBlue grid grid-cols-2 gap-x-[.5rem] place-items-center gap-y-[.5rem] '>
                {clientCards}
            </div>
        </div>
        <div className='bg-lightYellow w-[28%] h-[60rem] grid grid-cols-1 place-items-center '>
            <div className='w-[80%] h-[25rem] flex flex-col items-center justify-center gap-[2rem]'>
                {statusCards}
            </div>
            <div className='w-[95%] h-[30rem] bg-[white] flex flex-col gap-[1rem]'>
                <div className='h-fit w-full p-[1rem] grid grid-cols-2 place-items-center justify-items-start gap-x-[6rem]'>
                    <h1 className='text-2xl font-bold'>Create</h1>
                    <b className='font-black'>View</b>
                    <small>Today</small>
                </div>
                <div className='w-full h-fit flex flex-col items-start justify-center gap-[1rem] px-[1rem]'>
                    <b>Create new</b>
                    {newResto}
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Main
