import React from 'react'
import Image from 'next/image'
import vector from "../../../../public/Images/Vector.png"

interface Props {
  from: string
  name: string
}

export default function CertificationCard({ from, name }: Props) {
  return (
    <div className='px-4 py-2 flex items-center justify-center border border-gray-500/30 bg-white rounded-full space-y-4'>
      <div className='w-2/10 flex items-center justify-center'>
        <Image
          src={vector}
          alt='certificate'
          width={8}
          height={8}
          className='w-10 h-10'
        />
      </div>
      <div className='w-10/12 flex flex-col  justify-center'>
        <p className='w-full text-xl text-gray-600 font-semibold text-center'>{name}</p>
        <p className='w-full text-xl text-gray-600 text-center'>{from}</p>
      </div>
    </div>
  )
}
