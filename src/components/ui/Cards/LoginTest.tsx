import { Info } from 'lucide-react'
import React from 'react'

export default function LoginTest() {
  return (
    <div className='w-full h-20 bg-green-300/70 rounded-md p-2 flex'>
      <div className='text-green-500 w-1/12'>
        <Info />
      </div>
      <div className='w-11/12 flex flex-col items-center justify-center'>
        <p className='text-sm font-bold'>Test login</p>
        <p className='text-sm'>email - test@gmail.com</p>
        <p className='text-sm'>password - test123</p>
      </div>
    </div>
  )
}
