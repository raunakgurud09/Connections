import MenuIcon from '@/components/Icons/MenuIcon';
import React, { useState } from 'react';
import MenuOptions from './MenuOptions';

function Menu() {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <div
        className='h-8 w-8 cursor-pointer text-blueC transition-all duration-500 ease-in'
        onClick={() => {
          setShow(true);
          console.log('clicked')
        }}
      >
        <MenuIcon />
      </div>
      <MenuOptions show={show} setShow={setShow} />
    </>
  );
}

export default Menu;
