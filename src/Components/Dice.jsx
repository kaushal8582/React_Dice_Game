import React, { useState } from 'react'
import { Button } from './Button'

export const Dice = ({
  number,generateRandom,setScore,setHide
}) => {

  const [show,setShow] =useState(false)

 function setScor(){
  setScore(0)
 }

 function log(){
  setHide((prev)=>!prev)
  setShow((prev)=>!prev);
  console.log("kaushal");
 }


  return (
    <div className='flex flex-col items-center mt-16'>
      <div 
        onClick={generateRandom}
      className='w-40 cursor-pointer'>
        <img  src={`../../dice_${number}.png`} alt="" />
      </div>
      <h2 className='font-bold mt-5'>Click on Dice to roll</h2>

      <Button onClick = {setScor}  text={"Reset Score"} bgColor={"bg-white"} hoverClass={"hover:bg-black hover:text-white"}  />
      <Button onClick={log}  text={`${show===false?"Show":"Hide"} Rules`} bgColor={"bg-black"} hoverClass={"hover:bg-white hover:text-black text-white"} />

    </div>
  )
}
