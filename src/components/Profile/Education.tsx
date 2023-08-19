import React from 'react'
import EducationCard from '../ui/Cards/EducationCard'

export default function Education() {
  return (
    <div>
      <div className='flex items-center justify-between'>
        <p className='text-sm font-semibold'>Education</p>
        <button className='px-5 py-1 text-xs text-bluish bg-indigo-200 rounded-full'>Edit</button>
      </div>
      <div className='my-2'>
        {
          [...Array(1)].map((_, i) =>
            <EducationCard 
              description='lorem420'
              institution='IIT Bombay'
              majors='CSE'
              key={i}
              duration='2020-2024'
              degree='B.TECH'
            />
          )
        }

      </div>
    </div>
  )
}
