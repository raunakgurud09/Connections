import React from 'react';
import Image from "next/image"
import ContentContainer from '../core/Layouts/ContentContainer';
const images = [
  "https://images.unsplash.com/photo-1578736641330-3155e606cd40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2x1YnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1486556396467-d83d2b23514b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2x1YnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1544586784-b9ee32edb3ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNsdWJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2x1YnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNsdWJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
]

function FeaturedEvents() {
  return (
    <div className='flex h-fit w-full flex-col items-center justify-center space-y-10 py-12 px-2'>
      <h3 className='text-4xl sm:text-5xl text-white'>FEATURED EVENTS</h3>
      <ContentContainer>
        <div className='flex h-full w-full flex-col md:flex-row '>
          <div className='h-fit w-full md:w-1/2 p-2'>
            <div className='h-[305px] rounded-xl hover:cursor-pointer'>
              <Image src={images[0]} width={300} height={300} alt="event" className="rounded-xl object-cover h-full w-full" />
            </div>
          </div>
          <div className='w-full md:w-1/2 p-2'>
            <div className='grid grid-cols-2 grid-rows-2 gap-12'>
              <div className='h-32 rounded-xl hover:cursor-pointer'>
                <Image src={images[4]} width={300} height={300} alt="event" className="rounded-xl object-cover h-full w-full" />
              </div>
              <div className='h-32 rounded-xl hover:cursor-pointer'>
                <Image src={images[1]} width={300} height={300} alt="event" className="rounded-xl object-cover h-full w-full" />
              </div>
              <div className='h-32 rounded-xl hover:cursor-pointer'>
                <Image src={images[2]} width={300} height={300} alt="event" className="rounded-xl object-cover h-full w-full" />
              </div>
              <div className='h-32 rounded-xl hover:cursor-pointer'>
                <Image src={images[3]} width={300} height={300} alt="event" className="rounded-xl object-cover h-full w-full" />
              </div>
            </div>
          </div>
        </div>
      </ContentContainer>
    </div>
  );
}

export default FeaturedEvents;
