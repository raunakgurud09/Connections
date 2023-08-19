import React from 'react'

interface Props {
  institution: string,
  degree?: string,
  majors: string,
  duration: string,
  description: string
}

export default function EducationCard({ institution, degree, majors, duration, description }: Props) {
  return (
    <div className='p-4 border border-gray-500/30 drop-shadow-xl bg-white rounded-md space-y-4'>
      <p className='text-indigo-600 uppercase'>{institution}</p>
      <div className='flex justify-between'>
        <p className='text-sm'>{duration}</p>
        <div className='text-xs' >
          <p>{degree}</p>
          <p>{majors}</p>
        </div>
      </div>
      <p>{description}</p>
    </div>
  )
}
