import React from 'react'

export const Rules = () => {
  return (
   <div className='grid place-items-center'>
     <div className='bg-[#a47724] mt-7 w-[750px] rounded-3xl p-5  ' >
      <h2 className='text-3xl font-bold text-white mb-8' >How to play dice game</h2>
      <p className='text-white font-semibold' >Select any number</p>
      <p className='text-white font-semibold' >Click on dice image</p>
      <p className='text-white font-semibold' >after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
      <p className='text-white font-semibold' >if you get wrong guess then  2 point will be dedcuted </p>
    </div>
   </div>
  )
}
