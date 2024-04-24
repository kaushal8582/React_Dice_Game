import React, { useState } from 'react'

export const Number = ({
  numberSelected, setNumberSelected
}) => {

  
  const arr=[1,2,3,4,5,6];


  return (
    <div className='flex gap-3 flex-col items-end'>
      <div className='flex gap-3'>
    {arr.map((value,i)=>{
      return <div 
      key={i}
        onClick={()=>setNumberSelected(value)}
        className={'cursor-pointer w-[40px] h-[40px] border-2 font-bold border-black grid place-items-center '+ (numberSelected === value ? 'bg-black text-white':'bg-white text-black') }
      >
        {value}
      </div>
    })}
    </div>
    <h2 className='font-bold '>Slected Number</h2>
    </div>
  )
}
