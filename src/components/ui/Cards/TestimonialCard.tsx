import { Star, User2 } from 'lucide-react'
import React from 'react'

export default function TestimonialCard({ review, name, stars }: any) {
  return (
    <div className='relative p-2 w-52 h-52 bg-brown rounded-3xl flex flex-col items-center justify-between'>


      <div className='flex flex-col items-center p-1 m-2'>
        <p className='text-white mt-2 mb-10 text-xs text-center'>{review}</p>

      </div>

      <div className=' w-full flex flex-col items-center justify-center'>
        <div className='absolute bottom-12'>
          <User2 className='text-black/60 fill bg-white rounded-full p-2' size={60} />
        </div>
        <div className='absolute bottom-0 bg-white w-full h-16 rounded-b-3xl flex flex-col justify-center items-center'>

          <div className='flex'>
            {
              [...Array(stars)].map((_, i) => (
                <Star key={i} className='text-yellow-300  m-1' fill='yellow' />
              ))
            }
          </div>
          <p className='text-black/50'>{name}</p>
        </div>
      </div>
    </div>
  )
}
