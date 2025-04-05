import { Brightness2Outlined, Brightness7Rounded } from '@mui/icons-material';
import { useState } from 'react';
import { useColorMode } from '../../context/colorModeContext';

function ChangeModeButton() {
const {isDark,toggleColorMode} = useColorMode();
    const handleMode = ()=>{
      document.documentElement.classList.toggle('dark');
      toggleColorMode();
    }
  return (
    <button className='fixed right-10 p-2 rounded-full top-32 shadow-gray-700 dark:shadow-gray-500 shadow-lg dark:bg-black  dark:border-white bg-yellow-500 hover:bg-orange-500 hover:top-[126px] z-50'  onClick={handleMode} >
    {isDark ? <Brightness2Outlined  sx={{ fontSize: '30px' ,color:'white' }} /> : <Brightness7Rounded htmlColor='white' sx={{ fontSize: '30px' }} />}
  </button>
  )
}

export default ChangeModeButton