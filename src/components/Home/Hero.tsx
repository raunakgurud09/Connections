import React, { useEffect, useRef } from 'react';

// if we use images again
// import Image from 'next/image';
// import smHeroImage from '../../../public/Images/sm-Hero-Image.png';
// import HeroImage from '../../../public/Images/Hero-Image.png';

// const rand = [
//   'https://res.cloudinary.com/dmaeznlik/video/upload/v1686997038/WebFullcover_dau7t6.mp4',
//   'https://res.cloudinary.com/dmaeznlik/video/upload/v1688549244/fullcover-dev/video/randomize2_jsfj8v.mp4',
//   'https://res.cloudinary.com/dmaeznlik/video/upload/v1688549246/fullcover-dev/video/randomize3_k7ilye.mp4'
// ]

const rand = [
  'https://res.cloudinary.com/dmaeznlik/video/upload/v1688552527/fullcover-dev/video/1_zy22eh.mp4',
  'https://res.cloudinary.com/dmaeznlik/video/upload/v1688552523/fullcover-dev/video/2_lesquz.mp4',
  'https://res.cloudinary.com/dmaeznlik/video/upload/v1688552525/fullcover-dev/video/3_mrtwtc.mp4',
  'https://res.cloudinary.com/dmaeznlik/video/upload/v1688630641/fullcover-dev/video/05_mmmrze.mp4',
  'https://res.cloudinary.com/dmaeznlik/video/upload/v1688630667/fullcover-dev/video/06_onpa2i.mp4',
  'https://res.cloudinary.com/dmaeznlik/video/upload/v1688630689/fullcover-dev/video/07_ptyxch.mp4',
  'https://res.cloudinary.com/dmaeznlik/video/upload/v1688630714/fullcover-dev/video/08_uz7lym.mp4',
  'https://res.cloudinary.com/dmaeznlik/video/upload/v1688630742/fullcover-dev/video/09_ucoevs.mp4',
  
]


import Search from '../core/Header/Search';
import Link from 'next/link';

function Hero() {

  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  const videoEl2 = useRef(null);

  const attemptPlay2 = () => {
    videoEl2 &&
      videoEl2.current &&
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      videoEl2.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
    attemptPlay2();
  }, []);

  const randomNumber = Math.floor(Math.random() * 8);

  console.log(randomNumber)

  return (
    <div className='h-fit w-full'>
      <div className='relative h-full w-full'>
        <div className='flex sm:hidden relative z-10 bg-black/50'>
          {/* <Image
            src={smHeroImage}
            alt='hero'
            className='h-[700px] w-full object-cover'
          /> */}
          <video
            ref={videoEl2}
            src="https://res.cloudinary.com/dmaeznlik/video/upload/v1686997030/MobileFullcover_ayepkh.mp4"
            playsInline
            loop
            muted
            // style={{ width: '1600px', height: '600px' }}
            className='w-full h-full'
          />
        </div>
        <div className='hidden sm:flex  items-start justify-start relative z-10'>
          <video
            ref={videoEl}
            // src="https://res.cloudinary.com/dmaeznlik/video/upload/v1688374634/fullcover-dev/video/Bg_Video_r5waxd.mp4"
            src={rand[randomNumber]}
            playsInline
            loop
            muted
            // className='w-[1600px] sm:w-full sm:h-[500px] md:h-[600px] lg:h-[800px]'
            className='w-screen'
          />
          {/* <Image
            src={HeroImage}
            alt='hero'
            className=' sm:h-[700px] w-full object-cover'
          /> */}
        </div>
        {/* <div className='w-full h-full bg-gradient-to-r from-darkbg/100 via-darkbg/0 to-darkbg/100 absolute top-0 z-20'></div> */}
        {/* <div className='w-full h-full bg-gradient-to-b from-darkbg/10 via-darkbg/20 to-darkbg/100 absolute top-0 z-20'></div> */}

        <div className='absolute top-40 sm:top-20 lg:top-40 z-20 h-[60%] flex  flex-col items-center justify-between sm:justify-start w-full text-white '>
          <div className='flex w-full items-center justify-center'>
            <div className=' flex flex-col text-center items-center w-full sm:w-[70%] space-y-8'>
              <h2 className='text-5xl sm:text-7xl lg:text-8xl ml-3 sm:ml-0 font-primary'>
                Earn Rewards for
                <br />
                having a good TIme
              </h2>
              <p className='text-lg  sm:text-2xl font-secondary font-semibold'>Pre-book Entry for top Clubs in India</p>
              <div className='sm:block hidden'>
                <Search />
              </div>
            </div>
          </div>
          <div className='sm:hidden flex items-center justify-center'>
            <Link href='/clubs'
              className='text-brown  border-2 px-2 py-1 border-brown rounded-[10px]'
            >
              BROWSE CLUBS
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
