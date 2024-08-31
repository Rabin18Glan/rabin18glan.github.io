
import { MoreVertOutlined, SegmentOutlined } from '@mui/icons-material';
import { IconButton, List, ListItem, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';

import ChangeModeButton from '../../components/Button/ChangeModeButton';
import Title from '../../components/Title';
import { pageList } from '../../pageList';
import useScrollToContext from '../../context/useScrollToContext';

function Header() {

const {handleScrollTo} = useScrollToContext();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);


  function handleMenu(event: React.MouseEvent<HTMLElement>) {
    setAnchorEl(event.currentTarget);
  };

  function handleClose() {
    setAnchorEl(null);
  };



  return (
    <div className='flex justify-between items-center px-5 md:px-10 py-2 bg-white dark:bg-black w-full shadow-lg dark:shadow-gray-800 shadow-gray-300 z-50'>
      {/* routing  */}
      <div className="cursor-pointer">
        <a onClick={handleScrollTo('home')}><Title fontSize='30px' title='RG' /></a>

      </div>
      {/* navigations  */}
      <List className='hidden md:flex '>
        {pageList.map((page) => (
          <ListItem key={page.id} className='cursor-pointer w-20 lg:w-24 hover:text-purple-800  dark:text-gray-200 text-gray-700 hover:font-bold font-semibold hover:animate-pulse duration-700 ease-int-out'>
            <a onClick={handleScrollTo(page.page)}>{page.title}</a>
          </ListItem>
        ))}
      </List>


      {/* drawer navigation  */}
      <div className='md:hidden'>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
          className='md:hidden'
        >
          <SegmentOutlined className=' dark:text-white  text-purple-950' fontSize='large' />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >

          {pageList.map((page) => {
            return <MenuItem key={page.id} className='dark:text-purple-950 dark:bg-white  text-gray-900 hover:bg-purple-700 hover:text-purple-900 hover:font-bold' onClick={handleClose}><a onClick={ handleScrollTo(page.page) }>{page.title}</a></MenuItem>
          })}

        </Menu>
      </div>

      <div className='hidden md:block'>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
          
        >
          <MoreVertOutlined className=' dark:text-white  text-purple-950' fontSize='large' />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >

          {pageList.map((page) => {
            return <MenuItem key={page.id} className='dark:text-purple-950 dark:bg-white  text-gray-900 hover:bg-purple-700 hover:text-purple-900 hover:font-bold' onClick={handleClose}><a onClick={ handleScrollTo(page.page) }>{page.title}</a></MenuItem>
          })}

        </Menu>
      </div>

      
      <ChangeModeButton />
    </div>
    
  )
}

export default Header