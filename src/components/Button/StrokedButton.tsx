"use client"

import React, { MouseEventHandler } from 'react'
interface StrokedButtonProps{
    title?:string,
    onClick:MouseEventHandler<HTMLButtonElement>,

}
function StrokedButton({title,onClick}: StrokedButtonProps) {
  return (
    <button onClick={onClick} className="btn bg-transparent border-2 border-purple-950 dark:border-purple-700 text-purple-950 dark:text-purple-700 hover:shadow-lg hover:shadow-gray-600 hover:bg-yellow-500 hover:border-yellow-500 dark:hover:border-yellow-600 hover:text-white dark:hover:text-white">{title}</button>
  )
}

export default StrokedButton