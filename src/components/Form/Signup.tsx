import React, { useState } from 'react';
import { Formik } from 'formik';
import cx from 'classnames';
import { useRegister } from '@/hooks/useAuth';
import { View } from '../Icons';
import { toast } from 'react-toastify';
import FillBtn from '../ui/Buttons/FillBtn';
import Link from 'next/link';

export default function Signup() {
  const register = useRegister();
  const [passwordShown, setPasswordShown] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handlePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const handleSubmit = async (values: any) => {
    try {
      toast.info('Submitted!');
      await register(values)
      // toast.success('Signed up');
    } catch (error) {
      toast.error('Invalid password and username');
      setErrorMsg('**Email already exists**');
    }
  };

  return (
    <div className='flex h-fit flex-row items-start justify-center'>
      <div className='flex flex-col'>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            password: '',
            confPassword: '',
            checked: []
          }}
          validate={(values) => {
            const errors: any = {};
            if (!values.firstName) errors.firstName = 'Required';
            if (!values.lastName) errors.lastName = 'Required';
            if (!values.phone) errors.phone = 'Required';
            if (!values.password) errors.password = 'Required';
            if (!values.confPassword) errors.confPassword = 'Required';

            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }

            if (values.password && values?.password.length < 8) {
              errors.password = "Too weak..."
            }

            if (values.password !== values.confPassword) {
              errors.confPassword = 'Password should match';
            }



            console.log(errors);
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
              className='mt-4 flex h-fit w-72 flex-col rounded font-semibold placeholder:text-gray-500 sm:w-96'
            >
              <div className='my-4 flex h-9 w-full justify-between'>
                <div className='my-2 flex w-[48%] flex-col '>
                  <input
                    id='firstName'
                    name='firstName'
                    placeholder='First Name'
                    type='name'
                    onChange={handleChange}
                    value={values.firstName}
                    className={cx(
                      'w-full rounded-[10px] border border-pine bg-transparent px-8 py-2 font-secondary',
                      touched.firstName && errors.firstName
                        ? 'border-wine'
                        : 'border-pine'
                    )}
                  />
                  <span className='text-[7px] text-wine'>
                    {errors.firstName && touched.firstName && errors.firstName}
                  </span>
                </div>
                <div className='my-2 flex h-9 w-[48%] flex-col'>
                  <input
                    id='lastName'
                    name='lastName'
                    placeholder='Last Name'
                    type='name'
                    onChange={handleChange}
                    value={values.lastName}
                    className={cx(
                      'w-full rounded-[10px] border border-pine bg-transparent px-8 py-2 font-secondary',
                      touched.lastName && errors.lastName
                        ? 'border-wine'
                        : 'border-pine'
                    )}
                  />
                  <span className='text-[7px] text-wine'>
                    {errors.lastName && touched.lastName && errors.lastName}
                  </span>
                </div>
              </div>
              <div className='my-2 flex h-9 w-full flex-col'>
                <input
                  id='phone'
                  name='phone'
                  type='tel'
                  placeholder='Mobile No.'
                  onChange={handleChange}
                  value={values.phone}
                  className={cx(
                    'w-full rounded-[10px] border border-pine px-8 py-2 font-secondary bg-transparent',
                    errors.phone && touched.phone
                      ? 'border-wine'
                      : 'border-pine'
                  )}
                />
                <span className='text-[7px] text-wine'>
                  {errors.phone && touched.phone && errors.phone}
                </span>
              </div>
              <div className='my-2 flex h-9 w-full flex-col '>
                <input
                  id='email'
                  name='email'
                  placeholder='Email'
                  type='email'
                  onChange={handleChange}
                  value={values.email}
                  className={cx(
                    'w-full rounded-[10px] border border-pine bg-transparent px-8 py-2 font-secondary',
                    errors.email && touched.email
                      ? 'border-wine'
                      : 'border-pine'
                  )}
                />
                <span className='text-[7px] text-wine'>
                  {errors.email && touched.email && errors.email}
                </span>
              </div>
              <div className='relative my-2  flex h-9 flex-col'>
                <input
                  id='password'
                  name='password'
                  placeholder='Password'
                  type={passwordShown ? 'text' : 'password'}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  className={cx(
                    'w-full rounded-[10px] border border-pine bg-transparent px-8 py-2 font-secondary',
                    touched.password && errors.password
                      ? 'border-wine'
                      : 'border-pine'
                  )}
                />
                <span className='text-[7px] text-wine'>
                  {errors.password && touched.password && errors.password}
                </span>
                <div
                  className='absolute right-2 top-3'
                  onClick={handlePasswordVisibility}
                >
                  <View />
                </div>
              </div>
              <div className='relative my-2  flex h-9 flex-col'>
                <input
                  id='confPassword'
                  name='confPassword'
                  placeholder='Confirm Password'
                  onBlur={handleBlur}
                  type={passwordShown ? 'text' : 'password'}
                  onChange={handleChange}
                  value={values.confPassword}
                  className={cx(
                    'w-full rounded-[10px] border border-pine bg-transparent px-8 py-2 font-secondary',
                    touched.confPassword && errors.confPassword
                      ? 'border-wine'
                      : 'border-pine'
                  )}
                />
                <span className='text-[7px] text-wine'>
                  {errors.confPassword &&
                    touched.confPassword &&
                    errors.confPassword}
                </span>
                <div
                  className='absolute right-2 top-3'
                  onClick={handlePasswordVisibility}
                >
                  <View />
                </div>
                <span className='font-secondary text-xs text-wine'>
                  {errorMsg}
                </span>
              </div>

              <div className='my-3 flex h-10 w-full justify-between font-secondary text-sm font-semibold'>
                <Link href='/forgot-password' className='text-blue-900'>

                </Link>
                <div className='text-right text-blue-900'>
                  <p className='text-black'>Have a account?</p>
                  <Link href='/login'>Login</Link>
                </div>
              </div>
              <FillBtn
                text='SignUp'
                cns='bg-transparent font-primary w-[80%] tracking-wider	 px-4 py-1 h-11 text-brown border-brown  rounded-[20px] border-2 '
              />
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
