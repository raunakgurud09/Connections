import { Formik } from 'formik';
import cx from 'classnames';
import { useLogin } from '@/hooks/useAuth';
import Router, { useRouter } from 'next/router';
import { useState } from 'react';
import { View } from '../Icons';
import { toast } from 'react-toastify';
import Link from 'next/link';
import FillBtn from '../ui/Buttons/FillBtn';

export default function Login() {
  // const { login, loggingIn, error } = useLogins();
  const login = useLogin();
  const { query } = useRouter();
  const [passwordShown, setPasswordShown] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handlePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const ref = query.ref as string;

  const handleSubmit = async (values: any) => {
    try {
      toast.info('Submitted!');
      await login(values.email, values.password);
      // toast.success('Logged In');
      if (ref) {
        Router.push(`/club/${ref}`);
      } else {
        Router.push('/');
      }
    } catch (error) {
      toast.error('Invalid password and username');
      setErrorMsg('**Invalid password**');
    }
  };

  return (
    <div className='px-2 flex h-fit flex-row items-start justify-center'>
      <div className='flex flex-col'>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={(values) => {
            const errors: any = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            /* and other goodies */
          }) => (
            <form
              onSubmit={handleSubmit}
              className='my-4 flex h-fit sm:w-96 w-72 flex-col rounded'
            >
              <div className='my-3 flex h-9 w-full flex-col '>
                <input
                  id='email'
                  name='email'
                  placeholder='Email'
                  type='email'
                  onChange={handleChange}
                  value={values.email}
                  className={cx(
                    'w-full rounded-[10px] border border-pine px-3 py-2 font-secondary',
                    'bg-transparent'
                  )}
                />
                <span className='mt-0 text-xs text-wine '>
                  {errors.email && touched.email && errors.email}
                </span>
              </div>
              <div className='relative my-3  flex h-9 flex-col'>
                <input
                  id='password'
                  name='password'
                  placeholder='Password'
                  type={passwordShown ? 'text' : 'password'}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  className={cx(
                    'w-full rounded-[10px] border border-pine px-3 py-2 font-secondary',
                    'bg-transparent'
                  )}
                />
                <div
                  className='absolute right-2 top-3'
                  onClick={handlePasswordVisibility}
                >
                  <View />
                </div>
                <span className='mt-0 text-xs text-wine '>
                  {errorMsg}
                </span>
              </div>
              {/* <div className='mt-4 w-full'></div> */}
              <div className='my-3 flex h-10 w-full justify-between font-secondary text-sm font-semibold'>
                <Link href='/forgot-password' className='text-blue-900'>
                  Forgot Password?
                </Link>
                <div className='text-right text-blue-900'>
                  <p className='text-black'>Don&apos;t have a account?</p>
                  <Link href='/signup'>Sign Up</Link>
                </div>
              </div>
              <FillBtn
                text='log in'
                cns='bg-transparent font-primary tracking-wide border-brown w-[80%] px-4 py-1 h-11 text-brown rounded-[20px] border-2 '
              />
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
