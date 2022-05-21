import React from 'react';

function Menucomponent({name}) {
  return (
    <div className='flex  items-center justify-center ' >
        <button className=' w-[9rem] h-[3rem] text-red    border-2 border-rose-500 rounded-xl text-red-600 ' style={{backgroundColor: name === 'Drinks' ? 'red' : 'none' ,color: name === 'Drinks'? 'white' :'none' }}>{name}</button>
    </div>
  );
}

export default Menucomponent;
 