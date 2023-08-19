import { default_image } from '@/constants/index'
import Image from 'next/image'
import React from 'react'

export default function ImageUploader() {
  return (
    <div className='p-4 rounded-md space-y-4 flex items-center justify-between'>
      <div>
        <Image
          src={default_image}
          alt='user'
          width={300}
          height={300}
          className='h-32 w-32 bg-orange-400 rounded-full'
        />

      </div>
      <div className='flex items-end'>
        <button className='px-5 py-1 text-xs text-bluish bg-indigo-200 rounded-full'>Upload photo</button>
      </div>

    </div>
  )
}
