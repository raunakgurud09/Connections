import React from 'react';
import Image from "next/image"
import Link from 'next/link';

interface Props {
  _id: string
  image?: string
  logo?: string
  name?: string
  location?: string
  isWhite?: boolean
}

function ClubsCard({
  _id,
  image = "https://images.unsplash.com/photo-1562189447-17a5bb45a3f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNsdWJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  logo = "https://images.unsplash.com/photo-1562189447-17a5bb45a3f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNsdWJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  name = "Max",
  location = "Mumbai"
}: Props) {


  return (
    <Link href={`/club/${_id}`}>
      <div className=' h-[200px] sm:h-[217px] w-[280px] sm:w-[310px] rounded-xl drop-shadow-xl mx-1 my-4 hover:scale-105 transition-all duration-100 ease-in-out'>
        <div className='h-[120px] w-full rounded-t-xl '>
          <Image src={image} alt={"Club Image"} width={320} height={320} className="w-full h-full object-cover rounded-t-xl" />
        </div>
        <div className='relative w-full'>
          <div className='absolute left-2 top-[-40px] h-16 w-16 rounded-xl  drop-shadow-2xl'>
            <Image src={logo} alt={"Club Logo"} width={300} height={300} className="rounded-xl w-full h-full object-cover" />
          </div>
        </div>
        <div className='h-[100px] w-full rounded-b-xl bg-stone-900 px-2 pt-6 '>
          <div className='text-offWhite w-full h-full'>
            <h3 className='text-4xl font-bold truncate'>{name}</h3>
            <p className='text-md font-semibold opacity-25'>{location}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ClubsCard;
