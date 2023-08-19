import React from 'react';
import Image from 'next/image';
import { Arrow } from '@/components/Icons';

function ImageSlider({ slides, index, setIndex }: any) {
  // console.log(slides[index].url);
  return (
    <div className='h-full w-full bg-black'>
      <div className='relative flex items-center text-white'>
        <div onClick={() => setIndex(Math.abs(index - 1) % slides.length )} className='absolute left-0 top-[50%] '>
          <div className='w-8 h-8 text-black rotate-180'>
            <Arrow />
          </div>
        </div>
        <Image
          src={slides[index].imageUrl}
          alt='club'
          width={300}
          height={225}
          className='h-full w-full aspect-video bg-black' 
        />
        <div onClick={() => setIndex((index + 1) % slides.length)} className='absolute right-0 top-[50%] '>
          <div className='h-8 w-8 text-black rounded-full flex items-center justify-center'>
            <Arrow />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
