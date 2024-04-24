import React from 'react'

export const Button = ({ text,hoverClass,bgColor,onClick }) => {

 

  return (
    <div
    onClick={onClick}
    className={`border-2 mt-3 px-14 py-2 rounded-3xl 
    cursor-pointer border-black 
    font-bold
    ${hoverClass} ${bgColor} `}>
      {text}</div>
  )
}

