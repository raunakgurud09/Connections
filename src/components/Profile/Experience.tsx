import React from 'react'
import ExperienceCard from '../ui/Cards/ExperienceCard'

export default function Experience() {
  return (
    <div>
      <div className='flex items-center justify-between'>
        <p className='text-sm font-semibold'>Experience</p>
        <button className='px-5 py-1 text-xs text-bluish bg-indigo-200 rounded-full'>Edit</button>
      </div>
      <div className='my-2'>
      {
          [...Array(1)].map((_, i) =>
            <ExperienceCard 
              key={i}
              company='VENQ'
              image=''
              responsibilities=''
              role=''
              duration='2020-2024'
            />
          )
        }
      </div>
    </div>
  )
}
