import Link from 'next/link';
import React from 'react';
import Logo from './Logo';
import { X } from 'lucide-react';


function MenuOptions({ show, setShow }: { show: boolean; setShow: any }) {
  if (!show) {
    return null;
  }

  const handleCloseMenu = () => {
    console.log('handleCloseMenu');
    setShow(!show);
  };

  return (
    <div
      onClick={handleCloseMenu}
      className='fixed left-0 right-0 bottom-0 top-0 z-10 flex items-center justify-start bg-black/70 '
    >
      <div className='h-screen w-64 bg-white overflow-y-auto text-black font-primary tracking-wider '>
        <div className='flex mt-8 sm:mt-4 h-fit w-full flex-col items-center justify-start space-y-4'>
          
          <div className='flex items-center justify-end w-full px-4 pt-4'>
            <div className='text-black hover:cursor-pointer' onClick={() => setShow(false)}>
              <X />
            </div>
          </div>

          <div className='flex h-10 w-full items-center justify-center '>
            <div className='flex items-center justify-start scale-90 '>
              <Logo />
            </div>
          </div>
          
          <div className='flex w-[70%] flex-col items-start text-2xl px-1 mt-20'>
            <div className='flex flex-col'>
              <Link href='/profile' className='hover:text-brown'>
                Profile
              </Link>
              <Link href='/connections' className='hover:text-brown'>
                Connections
              </Link>
            </div>
          </div>
          
          

    
        </div>
      </div>
    </div>
  );
}

export default MenuOptions;
