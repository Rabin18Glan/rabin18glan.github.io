import { Avatar } from '@mui/material';


interface CircularLogoProps{
  className?:string,
  logo:string,
  size?:string,
}
function CircularLogo({className,logo,size}:CircularLogoProps) {

  return (
    <Avatar sizes={size}  className={` rounded-full flex items-center justify-center  ${className}`} >
    <img className='h-full w-full object-cover'  src={logo} alt="" />
    </Avatar>
  )
}

export default CircularLogo