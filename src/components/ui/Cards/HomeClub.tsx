import React, { useState } from 'react';
import Image from "next/image"
import Link from "next/link"

function HomeClub({
  clubId = "",
  imageUrl = "",
  logoUrl = "https://images.unsplash.com/photo-1562189447-17a5bb45a3f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNsdWJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  name = 'Orila',
  price = "2000",
  time = "8:30 PM"
}) {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <Link href={`/club/${clubId}`} className='h-fit w-fit p-2 rounded-xl drop-shadow-xl'>
      <div className='relative h-fit w-[270px]'>
        <div className='absolute left-[-25px] z-10 top-[-25px] w-16 h-16 sm:h-24 sm:w-24 rounded-xl border border-white/10 backdrop-blur-md bg-black  drop-shadow-2xl'>
          <Image src={logoUrl} alt={"Club Logo"} width={64} height={64} className="w-full h-full rounded-xl object-contain" />
        </div>
        <div className='sm:block hidden'>
          {
            imageUrl === ""
              ? <div className='w-[270px] h-[250px] rounded-xl bg-black/30'></div>
              : <Image src={imageUrl} alt={"Club"} width={500} height={500} className="w-[270px] h-[250px] object-cover rounded-xl " />
          }
        </div>
        <div className='sm:hidden block '>
          {
            imageUrl === ""
              ? <div className='w-[270px] h-[100px] rounded-xl bg-black/30'></div>
              : <Image src={imageUrl} alt={"Club"} width={500} height={500} className="w-[270px] h-[140px] object-cover rounded-xl " />
          }
        </div>
        <div className='absolute sm:bottom-0 bottom-0  h-[70px] w-[270px] rounded-xl text-offWhite border-t-2 border-stone-900/40 bg-black/60 sm:hover:h-[188px] hover:h-[100px]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className='flex w-full h-full flex-col items-center justify-center'>
            <h3 className='text-3xl font-bold uppercase'>{name}</h3>
            {hover && (
              <div className='hidden sm:block w-[70%] mt-5'>
                <div className='flex'>
                  <div className='inline-block w-1/2'>
                    Entry for 2:
                  </div>
                  <div role="span" className='w-1/2 ml-1 inline-block font-semibold text-lg'>
                    ₹{price}
                  </div>
                </div>
                <div className='flex'>
                  <div className='inline-block w-1/2'>
                    Timing:
                  </div>
                  <div role="span" className='w-1/2 ml-1 inline-block font-semibold text-lg'>
                    {time}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default HomeClub;
