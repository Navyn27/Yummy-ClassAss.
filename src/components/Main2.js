import React from 'react'
import Navbar from './Navbar'
import StatusCard from './StatusCard'
import NewOrder from './NewOrder'
import Order from './Order'
import newOrderDatas from './NewOrderData'

import { useState } from 'react'

function Main2() {
    const [statusCardsData, setStatusCardsData] = useState([{statusName: 'Delivered', statusValue:20}, {statusName: 'Waiting', statusValue: 8}, {statusName: 'Rejected', statusValue: 2}, {statusName: 'All', statusValue: 40}])

    const statusCards = statusCardsData.map((statusCardData, index)=>{
        return <StatusCard key={index} statusName={statusCardData.statusName} statusValue={statusCardData.statusValue} />
    })

    const [newOrderData, setNewOrder] = useState(newOrderDatas)

    const handleClicked = (id) =>{
        setNewOrder(prevNewOrder=>{
            return prevNewOrder.map(order=>{
                if(order.checked === true) {
                    return {...order, checked: false}
                }
                return order.id === id ?  {...order, checked: !order.checked} : order
            })
        })
    }

    const newOrder = newOrderData.map((orderData, index)=>{
        return <NewOrder key={index} name={orderData.name} id={orderData.id} checked={orderData.checked} handleClicked={handleClicked} />
    })

    const [orderDatas, setOrderDatas] = useState([
        {name: 'order 8', id: 8, customerName: 'ishimwe kevin', orderContent: ['kaffir', 'vodka', 'lime', 'avocado', 'Ginger', 'Citrus'], tableNumber: 'Table 1', cost: 5000, customerType: 'Guest'},
        {name: 'order 7', id: 7, customerName: 'ishimwe7 kevin', orderContent: ['kaffir', 'vodka', 'lime', 'avocado', 'Ginger', 'Citrus'], tableNumber: 'Table 7', cost: 7000, customerType: 'Guest'},
        {name: 'order 6', id: 6, customerName: 'ishimwe6 kevin', orderContent: ['kaffir', 'vodka', 'lime', 'avocado', 'Ginger', 'Citrus'], tableNumber: 'Table 6', cost: 6000, customerType: 'Guest'},
        {name: 'order 5', id: 5, customerName: 'ishimwe5 kevin', orderContent: ['kaffir', 'vodka', 'lime', 'avocado', 'Ginger', 'Citrus'], tableNumber: 'Table 5', cost: 5000, customerType: 'Guest'},
        {name: 'order 4', id: 4, customerName: 'ishimwe4 kevin', orderContent: ['kaffir', 'vodka', 'lime', 'avocado', 'Ginger', 'Citrus'], tableNumber: 'Table 4', cost: 4000, customerType: 'Guest'},
        {name: 'order 3', id: 3, customerName: 'ishimwe3 kevin', orderContent: ['kaffir', 'vodka', 'lime', 'avocado', 'Ginger', 'Citrus'], tableNumber: 'Table 3', cost: 3000, customerType: 'Guest'},
        {name: 'order 2', id: 2, customerName: 'ishimwe2 kevin', orderContent: ['kaffir', 'vodka', 'lime', 'avocado', 'Ginger', 'Citrus'], tableNumber: 'Table 2', cost: 2000, customerType: 'Guest'},
        {name: 'order 1', id: 1, customerName: 'ishimwe1 kevin', orderContent: ['kaffir', 'vodka', 'lime', 'avocado', 'Ginger', 'Citrus'], tableNumber: 'Table 1', cost: 1000, customerType: 'Guest'}
    ])

    const orders = orderDatas.map((orderData, index)=>{
        return <Order key={index} name={orderData.name} customerName={orderData.customerName} orderContent={orderData.orderContent} tableNumber={orderData.tableNumber} cost={orderData.cost} customerType={orderData.customerType} />
    })

  return (
    <div className='h-[100rem] w-[95rem] flex flex-col items-center gap-[2rem] absolute right-0 '>
      <Navbar name='Orders' />
      <div className='w-[90%] h-[100rem] flex justify-between gap-[2rem] '>
        <div className='w-[90%] h-full flex flex-col justify-center  gap-[5rem] '>
            <div className='w-[95%] h-[5rem] flex items-center '>
                <button className='px-[6rem] py-[1rem] bg-myred font-bold rounded-full '>filter</button>
            </div>
            <div className='w-full h-full bg-lightBlue flex flex-col items-center justify-center gap-[2rem] '>
                {orders}
            </div>
        </div>

        <div className='bg-lightYellow w-[28%] h-[70rem] grid grid-cols-1 place-items-center self-end '>
            <div className='w-[80%] h-[25rem] flex flex-col items-center justify-center gap-[2rem]'>
                {statusCards}
            </div>
            <div className='w-[95%] h-[35rem] bg-[rgb(255,255,255)] flex flex-col gap-[1rem] items-center py-[1rem]'>
                <div className='h-fit w-full p-[1rem] grid grid-cols-2 place-items-center justify-items-start gap-x-[2rem]'>
                    <h1 className='text-xl font-bold'>Add Order</h1>
                    <b className='font-black'>View</b>
                    <small className='font-bold'>manually</small>
                </div>
                <div className='w-full h-fit flex flex-col items-start justify-center gap-[1rem] px-[1rem]'>
                    <b className='text-[.8rem] font-bold'>Create new order</b>
                    {newOrder}
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Main2
 