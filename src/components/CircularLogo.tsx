

interface CircularLogoProps{
  className?:string,
  logo:string,
  size?:string,
}
function CircularLogo({className,logo}:CircularLogoProps) {

  return (
    <div className={` rounded-full flex items-center justify-center h-24 w-24 p-3 ${className}`} >
    <img className=' object-cover'  src={logo} alt="" />
    </div>
  )
}

export default CircularLogo