import { Avatar } from '@mui/material';
import useModeContext from '../context/useModeContextProvider';


interface CircularLogoProps{
  className?:string,
  logo:string,
  size?:string,
 
  circle?:boolean
}
function CircularLogo({className,logo,size,circle=true}:CircularLogoProps) {
    const isDark = useModeContext().mode === 'dark';
  return (
    <Avatar className={` rounded-full flex items-center justify-center  ${className}`} >
    <img className='h-full w-full object-cover'  src={logo} alt="" />
    </Avatar>
  )
}

export default CircularLogo