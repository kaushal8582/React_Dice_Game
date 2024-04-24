import React from 'react'

export const Score = ({score}) => {
  return (
   <div className='  w-[200px]  text-center'>
    <div className='font-bold text-4xl text-center'>{score}</div>
    <h3 className='text-2xl font-bold'>Total Score</h3>
    
    </div>
  )
}
