import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { SegmentOutlined } from '@mui/icons-material';


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
