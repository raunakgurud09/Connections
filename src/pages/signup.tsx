import Signup from '@/components/Form/Signup';
import React from 'react';
import cx from 'classnames';
import GoogleLogin from '@/components/auth/GoogleLogin';
import Meta from '@/components/Meta/Meta';

function signup() {
  return (
    <>
      <Meta title='Sign up' />
      <div className='mt-10 px-2 min-h-screen flex h-fit w-[100vw-20px] items-center justify-center text-black'>
        <div>
          <div className='font-primary'>
            <h3 className='text-6xl'>Become a member</h3>
          </div>
          <Signup />
          <div className={cx('my-4 border')}></div>
          <div className='flex flex-col space-y-2'>
            <GoogleLogin />
          </div>
        </div>
      </div>
    </>
  );
}

export default signup;
