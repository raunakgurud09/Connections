import Link from 'next/link'
import React from 'react'

function EventCard({ eventId }: any) {
  return (
    <Link href={`/event/${eventId}`}>
      <div className=' h-[200px] sm:h-[217px] w-[280px] sm:w-[310px] rounded-xl drop-shadow-xl mx-1 my-4 hover:scale-105 transition-all duration-100 ease-in-out'>
        <div className='h-full w-full rounded-xl bg-offWhite'></div>
        {/* <div className='relative w-full '>
        <div className='absolute left-2 top-[-40px] h-16 w-16 rounded-xl  drop-shadow-2xl bg-offWhite'></div>
        </div>
      <div className='h-[100px] w-full rounded-b-xl bg-stone-900'></div> */}
      </div>
    </Link>
  )
}

export default EventCard