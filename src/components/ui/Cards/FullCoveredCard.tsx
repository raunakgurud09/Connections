import React from 'react';
import Image from "next/image"
import cx from "classnames"
import { TimeIcon } from '@/components/Icons';
import Link from 'next/link';

interface Props {
  _id: string
  image?: string
  logo?: string
  name?: string
  location?: string
  isWhite?: boolean
}

function FullCoveredCard({
  _id,
  image = "https://images.unsplash.com/photo-1562189447-17a5bb45a3f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNsdWJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  logo = "https://images.unsplash.com/photo-1562189447-17a5bb45a3f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNsdWJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  name = "Max",
  location = "Mumbai",
  isWhite
}: Props) {
  return (
    <Link href={`/club/${_id}`} >
      <div className=' w-[223px] h-[275px] rounded-xl drop-shadow-md mx-2 my-4 hover:scale-105 transition-all duration-100 ease-in-out'>
        <div className={cx('h-32 w-full rounded-t-xl bg-stone-900', isWhite ? "bg-offWhite" : "bg-stone-900")}>
          <Image src={image} width={223} height={275} alt={"ClubName Image"} className="w-full h-full rounded-t-xl" />
        </div>
        <div className='w-full relative drop-shadow-2xl'>
          <div className='absolute left-2 top-[-16px] h-10 w-10 rounded-full bg-stone-900 '>
            <Image src={logo} alt={"Club logo"} width={40} height={40} className='w-full h-full rounded-full' />
          </div>
        </div>
        <div className={cx('h-40 w-full rounded-b-xl bg-offWhite pt-6 px-4', isWhite ? "bg-dark" : "bg-offWhite")}>
          <div className=' w-full h-full'>
            <div className={cx('font-bold text-5xl font-primary truncate', isWhite ? "text-offWhite" : "text-black")}>{name}</div>
            <div className={cx('font-semibold text-lg  text-black/70 truncate', isWhite ? "text-offWhite/70" : "text-black/70")}>{location}</div>
            <div className='flex items-center text-black/50 truncate'>
              <div className='w-4 h-4 inline-block '><TimeIcon /> </div>
              <p className='ml-1 font-semibold truncate'> 8:30 PM</p>
            </div>
          </div>
        </div>
      </div >
    </Link >
  );
}

export default FullCoveredCard;
