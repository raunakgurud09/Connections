import React from 'react';
import ContentContainer from '../core/Layouts/ContentContainer';
import Link from 'next/link';
import HomeClub from '../ui/Cards/HomeClub';

function OurClubs({ clubs }: any) {
  return (
    <div className='flex h-fit w-full flex-col items-center justify-center space-y-10 px-4 py-24 bg-image3 '>
      <h3 className='text-4xl sm:text-5xl text-white font-semibold font-secondary'>OUR CLUBS</h3>
      <ContentContainer>
        <div className='flex m-1 flex-wrap h-full w-full items-center justify-center'>
          {clubs?.length > 0 && clubs.map((club: any) => (
            <div
              key={club._id}
              className='flex mx-8 sm:my-8 my-4 items-center justify-center rounded-xl'
            >
              <HomeClub clubId={club._id} imageUrl={club?.carousel_images[0]?.imageUrl } logoUrl={club.logo} name={club.name} time='8:00 PM' />
            </div>
          ))}
        </div>
      </ContentContainer>
      <div className='w-full'>
        <div
        className='w-full flex items-center justify-center'
        >
          <Link href='/clubs'
            className='text-brown  border-2 px-2 py-1 border-brown rounded-[10px]'
          >
            SHOW MORE
          </Link>
        </div>
      </div>
    </div >
  );
}

export default OurClubs;
