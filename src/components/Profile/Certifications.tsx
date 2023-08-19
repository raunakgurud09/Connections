import React from 'react'
import CertificationCard from '../ui/Cards/CertificationCard'

export default function Certifications() {
  return (
    <div>
      <div className='flex items-center justify-between'>
        <p className='text-sm font-semibold'>Certifications</p>
        <button className='px-5 py-1 text-xs text-bluish bg-indigo-200 rounded-full'>Edit</button>
      </div>
      <div className='my-2'>
        {
          [...Array(1)].map((_, i) =>
            <CertificationCard
              key={i}
              name='Python'
              from='Code Studio'
            />
          )
        }

      </div>
    </div>
  )
}
