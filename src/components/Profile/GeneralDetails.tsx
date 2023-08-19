import React from 'react'

export default function GeneralDetails() {
  return (
    <div className='p-4 border border-gray-500/30 drop-shadow-xl bg-white rounded-md space-y-4'>
      <div className='flex justify-between'>
        <div>
          <p className='text-black/70 font-medium text-sm'>Your name</p>
          <p className='text-black/90 font-semibold'>Peter parker</p>
        </div>
        <div className='flex items-end'>
          <button className='px-5 py-1 text-xs text-bluish bg-indigo-200 rounded-full'>Edit</button>
        </div>
      </div>

      <div className='flex justify-between'>
        <div>
          <p className='text-black/70 font-medium text-sm'>Email</p>
          <p className='text-black/90 font-semibold'>perter@gmail.com</p>
        </div>
        <div className='flex items-end'>
          <button className='px-5 py-1 text-xs text-bluish bg-indigo-200 rounded-full'>Edit</button>
        </div>
      </div>

      <div className='flex justify-between'>
        <div>
          <p className='text-black/70 font-medium text-sm'>Phone Number</p>
          <p className='text-black/90 font-semibold'>+91 9022688778</p>
        </div>
        <div className='flex items-end'>
          <button className='px-5 py-1 text-xs text-bluish bg-indigo-200 rounded-full'>Edit</button>
        </div>
      </div>
    </div>
  )
}
