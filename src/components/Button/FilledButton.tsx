
import { MouseEventHandler } from 'react';

interface FilledButtonProps{
    title?:string,
    onClick:MouseEventHandler<HTMLButtonElement>,

}
function FilledButton({title,onClick}:FilledButtonProps) {
  return ( <button onClick={onClick} className="btn bg-primary-600 text-white hover:bg-primary-700 border-none transition-all duration-300 shadow-lg shadow-primary-600/20">{title}</button>
  )
}

export default FilledButton