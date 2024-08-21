
import { MouseEventHandler } from 'react';

interface FilledButtonProps{
    title?:string,
    onClick:MouseEventHandler<HTMLButtonElement>,

}
function FilledButton({title,onClick}:FilledButtonProps) {
  return ( <button onClick={onClick} className="btn bg-purple-950 text-white dark:bg-purple-700 hover:shadow-lg hover:shadow-gray-600 border-none hover:bg-yellow-500 dark:hover:bg-yellow-600  ">{title}</button>
  
  )
}

export default FilledButton