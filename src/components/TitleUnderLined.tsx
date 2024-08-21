import React from 'react'
import Title from './Title'
import { Box } from '@mui/material'
import useModeContext from '../context/useModeContextProvider'

function TitleUnderLined({title}:{title:string}) {

    const isDark = useModeContext().mode === 'dark';
  return (
    <div className=''><Title title={title} />
   <div className='flex'><div className={`w-8 h-2 dark:bg-purple-700 bg-purple-950`}></div><div className={`w-8 h-2 border ${isDark?'border-purple-200':'border-purple-950'}  bg-transparent`}></div></div></div>
  )
}

export default TitleUnderLined