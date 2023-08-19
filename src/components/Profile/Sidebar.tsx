import Link from 'next/link'
import React from 'react'

function Sidebar({ options, fn }: any) {
  return (
    <div className='flex flex-row sm:flex-col items-center bg-transparent sm:bg-black/50 rounded-[20px] px-2 py-4'>
      <div className='w-full flex justify-start items-center'>
        <div className='hidden sm:block m-2 my-4 w-12 h-12 text-offWhite bg-offWhite rounded-full'></div>
      </div>
      <div className='flex flex-row justify-center items-center sm:flex-col w-full'>
        {options.map((p: any) => {
          return (
            <Link
              href={p.href}
              key={p.name}
              className='w-full text-center sm:text-left border-2 sm:border-none border-brown rounded-xl mx-1 xs:px-3 py-1'
            >
              <div
                onClick={fn}
                className=' p-1 w-full rounded-md text-offWhite font-secondary text-xl sm:text-2xl font-semibold '
              >
                {p.name}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar