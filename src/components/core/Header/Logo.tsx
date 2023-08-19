import React from 'react';
import Image from 'next/image';
import logoImage from '../../../../public/Images/logo.png';
import Link from 'next/link';

function Logo() {
  return (
    <div className='scale-90 sm:scale-100'>
      <Link href='/'>
        <Image
          width={80}
          height={30}
          src={logoImage}
          alt='logo'
          className='object-cover h-10'
        />
      </Link>
    </div>
  );
}

export default Logo;
