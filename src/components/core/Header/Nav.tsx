// import FillBtn from '@/components/ui/Buttons/FillBtn';
import Link from 'next/link';
import React from 'react';

function Nav() {
  return (
    <>
      <div className=' lg:hidden flex items-center justify-center h-full '>
        <Link href={'/signup'} className=' text-brown font-semibold mt-3 mr-3 w-8 h-8 text-sm'>Signup</Link>
      </div>
      <div className='hidden lg:flex items-center space-x-2 '>
        <p className='cursor-pointer text-black font-semibold'>
          <Link href="/login">Login</Link>
        </p>
      </div>

    </>
  );
}

export default Nav;
