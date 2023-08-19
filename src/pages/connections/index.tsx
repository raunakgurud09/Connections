import ConnectionCard from '@/components/ui/Cards/ConnectionCard'
import React from 'react'

export default function index() {
  return (
    <section className='mt-20 mb-40 max-w-7xl mx-auto flex flex-col items-center justify-center'>
      <div className='w-[90%] bg-bluish h-24 rounded-md'>
        <p className='font-semibold text-white p-2 text-2xl'>My connections</p>
      </div>
      <div className='w-[90%] flex flex-col'>

        <div className='my-4'>
          <p></p>
          <div className='flex flex-wrap gap-5 justify-center'>
            {
              [...Array(13)].map((_, i) => (
                <ConnectionCard key={i} />
              ))
            }
          </div>
        </div>
        <div className='my-4'>
          <p className='text-3xl  my-4 font-primary'>People you can also connect</p>
          <div className='flex flex-wrap gap-5 justify-center'>
            {
              [...Array(12)].map((_, i) => (
                <ConnectionCard key={i} />
              ))
            }
          </div>
        </div>

      </div>
    </section>
  )
}
