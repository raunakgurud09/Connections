import { default_image } from '@/constants/index'
import Image from 'next/image'
import React from 'react'

export default function ConnectionCard() {




  return (
    <div className='w-72 h-32 border border-black/30 rounded-md flex'>
      <div className='w-3/5 px-2 py-2 space-y-2'>
        <p className='font-semibold'>User name</p>
        <div>
          <p className='text-sm'>Fullstack developer</p>
          <p className='text-xs'>@ username</p>
        </div>
        <button className='text-sm text-bluish bg-indigo-200 px-3 py-[0.5] rounded-full'>Remove connection</button>
      </div>
      <div className='flex items-center justify-center w-2/5'>
        <Image src={default_image}
          alt="user"
          width={300}
          height={300}
          className='w-20 h-20 rounded-full bg-blueC'
        />
      </div>
    </div>
  )
}
