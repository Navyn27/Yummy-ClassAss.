import React from 'react';

function Drink({img, name,money}) {
  return (
    <div className='  w-[30rem] h-20 flex items-center gap-[2rem] bg-lightBlue1 rounded-xl p-[2rem] ' >
      <img src={`../assets/${img}`} alt="img" className='w-[4rem] h-[4rem] rounded-full ' />
      <div>
        <h3 className='text-red-500 text-xl font-bold'>{name}</h3>
        <span className='text-yellow font-bold text-sm'>{money} frw</span>
      </div>
    </div>
  );
}

export default Drink;
