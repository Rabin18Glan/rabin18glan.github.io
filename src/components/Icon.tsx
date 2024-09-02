import 'devicon/devicon.min.css';

 interface IconProps{
    name:string,
    className?:string

 }
function Icon({name,className}:IconProps) {
  return (
   <i className={`${name} px-[3px] text-3xl ${className} `}></i>
  )
}

export default Icon