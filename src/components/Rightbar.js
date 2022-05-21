import React from 'react';
import {BiAddToQueue} from 'react-icons/bi' 
import{AiOutlineCheckCircle} from 'react-icons/ai'
import{BsCircle} from 'react-icons/bs'


function Rightbar() {
  return (
    <div>
      <h3 className='flex pb-[3rem] text-3xl font-extrabold'>Add item <BiAddToQueue className='text-red-500 font-bold' /></h3>
      <p className='pb-[2rem] font-bold'>Create new menu</p>
      <ul>
          <li className='flex font-semibold'><BsCircle className='text-red-400  mt-[0.2rem] mr-[0.3rem]'/>Main</li><br/>
          <li  className='flex font-semibold'><AiOutlineCheckCircle className='text-red-500  mt-[0.2rem] mr-[0.3rem]'/>Drink</li><br/>
          <li  className='flex font-semibold'><BsCircle className='text-red-500 mt-[0.2rem] mr-[0.3rem]'/>Beer</li><br/>
          <li  className='flex font-semibold'><BsCircle className='text-red-500  mt-[0.2rem] mr-[0.3rem]'/>Appetiser</li><br/>
          <li  className='flex font-semibold'><BsCircle className='text-red-500  mt-[0.2rem] mr-[0.3rem]'/>Starter</li><br/>
      </ul>
    </div>
  );
}

export default Rightbar;
