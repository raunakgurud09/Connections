import React from 'react'

export default function About({ about }: any) {
  return (
    <div className='p-4 border border-gray-500/30 drop-shadow-xl bg-white rounded-md space-y-4'>
      <div className='flex justify-between'>
        <p className='font-semibold'>
          About
          <span className='ml-1 text-indigo-700'>User</span>
        </p>
        <button className='px-5 py-1 text-xs text-bluish bg-indigo-200 rounded-full'>Edit</button>

      </div>
      <div>
        {about}
      </div>
    </div>
  )
}
