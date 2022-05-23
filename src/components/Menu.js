import React, { useState } from 'react';
import Drink from './DrinkComponent';
import Menucomponent from './Menucomponent';
import NewOrder from './NewOrder';
import newOrderData from './NewOrderData';
import {AiOutlineArrowRight} from 'react-icons/ai';
import Navbar from './Navbar';

function Menu() {

  const drinksData = [
    {
      img: '../../assets/rye.webp',
      name: 'Red wine',
      money: 20000
    },
    {
      img: '../../assets/beer.jpg',
      name: 'Rye',
      money: 20000
    },
    {
      img: '../../assets/fanta.jpg',
      name: 'beer',
      money: 20000
    },
    {
      img: '../../assets/Scotch.jpg',
      name: 'Fanta',
      money: 20000
    },
    {
      img: '../../assets/Hennesy.jpg',
      name: 'Scotch',
      money: 20000
    },
    {
      img: '../../assets/red-wine-glass.jpg',
      name: 'Hennesy',
      money: 20000
    },
  ]

  const [newOrderDatas, setNewOrder] = useState(newOrderData)

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

  const orders = newOrderDatas.map((newData, index)=>{
    return <NewOrder key={index} name={newData.name} checked={newData.checked} id={newData.id} handleClicked={handleClicked} />
  })

  const menuComponentsData = [{name: 'Drinks'}, {name: 'Fruits'}, {name: 'Beer'}, {name: 'Appetiser'}, {name: 'Main'}]

  const menuComponents = menuComponentsData.map((menuComponentData, index)=>{
    return <Menucomponent key={index} name={menuComponentData.name} />
  })

  const drinks = drinksData.map((drinkData, index)=>{
    return <Drink key={index} name={drinkData.name} img={drinkData.img} money={drinkData.money} />
  })

  return (
    <div className='h-fit w-[95rem] pl-[10rem] absolute right-0 flex flex-col gap-[2rem]'>
        <div className='mt-10 ml-5 flex flex-col items-start justify-center'>
            <Navbar name='Menus' />
            <span className='text-sm font-bold ml-[5rem] mt-[-2rem]'>05 of May 2022,09:41pm</span>
        </div>

       <div className='flex items-center'>
         <div className='flex flex-col items-start justify-center gap-[4rem]'>
          <div className='flex items-center justify-center gap-[1rem]'>
              {menuComponents}
            </div>
            <div className='flex flex-col justify-center gap-[1.4rem] '>
                    {drinks}
                    <span className='flex text-yellow font-bold text-xl ml-[12rem]' >More <AiOutlineArrowRight className='pt-[0.5rem] text-2xl'/></span> 
              </div>
         </div>
         <div className='w-fit h-fit flex flex-col items-center justify-center gap-[2rem] p-[2rem]'>
         {orders}
         </div>
       </div>

        <div className='flex'>       
         <div className=' p-20'>
         
         </div>
        </div>
    </div>
  );
}

export default Menu;
