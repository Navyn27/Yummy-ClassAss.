import React from 'react';
import Drink from './DrinkComponent';
import Menucomponent from './Menucomponent';

import Rightbar from './Rightbar';
import {AiOutlineArrowRight} from 'react-icons/ai';
import Rye from '../assets/rye.webp';
import Beer from '../assets/beer.jpg';
import Fanta from '../assets/fanta.jpg';
import Scotch from '../assets/Scotch.jpg';
import Vodka from '../assets/Vodka.jpg';
import Hennesy from '../assets/Hennesy.jpg';
import Winne from '../assets/red-wine-glass.jpg'


function Menu() {
  return (
    <div className='w-[140em] h-[65rem]   rounded-xl shadow-2xl  p-10 mr-[20rem] mt-[5rem]'>
        <div className='mt-10 ml-5'>
            <strong className='font-bold text-xl mt-20'>Menus</strong>
            <br/>
            <span  className='text-sm'>05 of May 2022,09:41pm</span>
        </div>
<br/>
       <div className='flex items-center justify-center gap-[1rem]'>
        <Menucomponent name='Drinks' className ="text-white"/>  
        <Menucomponent name='Fruits'/>  
        <Menucomponent  name='Beer'/>
        <Menucomponent name='Appetiser'/> 
        <Menucomponent name='Main'/>
       </div>
       <br/>
        
        <div className='flex'>
        <div className='flex flex-col justify-center gap-[1.4rem] '>
                <Drink
            img= {Winne}
            name="Red wine"
            money="20,000Rwf"
            />

            <Drink
            img= {Rye}
            name="Rye"
            money="15,000Rwf"
            />

            <Drink
            img= {Scotch}
            name="Scotch"
            money="14,000Rwf"
            />

            <Drink
            img= {Vodka}
            name="Vodka"
            money="10,000Rwf"
            />
            <Drink
            img= {Hennesy}
            name="Hennesy"
            money="20,000Rwf"
            />

            <Drink
            img= {Beer}
            name="Beer"
            money="8,000Rwf"
            /> 

            <Drink
            img= {Fanta}
            name="Fanta"
            money="3,000Rwf"
            />
            <span className='flex text-[#ffff00dc] font-bold text-xl ml-[12rem]' >More <AiOutlineArrowRight className='pt-[0.5rem] text-2xl'/></span> 
        </div> 
        
         <div className=' p-20'>
         <Rightbar/>
         </div>
           
           
        </div>
    </div>
  );
}

export default Menu;
