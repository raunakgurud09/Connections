import Login from '@/components/Form/Login';
import React from 'react';
import cx from 'classnames';
import GoogleLogin from '@/components/auth/GoogleLogin';
import Meta from '@/components/Meta/Meta';
import LoginTest from '@/components/ui/Cards/LoginTest';

function login() {

  return (
    <>
      <Meta title='Login'/>
      <div className='mt-24  px-2  flex min-h-screen w-[100vw-20px] items-start justify-center text-black'>
        <div className='mt-10'>
          <div className='text-6xl text-center font-primary'>log in</div>
          <LoginTest />
          <Login />
          <div className={cx('my-4 border')}></div>
          <div className='flex flex-col space-y-2'>
            <GoogleLogin />
          </div>
        </div>
      </div>
    </>
  );
}

export default login;
