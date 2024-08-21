import { SegmentOutlined } from '@mui/icons-material';
import Button from '@mui/material/Button';
import * as React from 'react';


export default function MenuDrawer({className}:{className?:string}) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

const menus = [
    'list',
    'list',
    'list',
    'list',
    'list',
]

  return (
    <div className={` ${className}`}>
      <Button onClick={toggleDrawer(true)} className={`${open?'hidden':''}`}><SegmentOutlined fontSize='large'/></Button>
{open&& <div className='fixed h-auto w-30 bg-black'>
    <ul>{menus.map((menu,index)=>{
        return <li key={index}>{menu}</li>
    })}</ul>
    </div>}
    </div>
  );
}
