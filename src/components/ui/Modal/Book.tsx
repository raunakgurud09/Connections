import { FiMapPin, FiX } from "react-icons/fi";
import type { ITicket } from "src/types/tickets";
import { IClub } from "src/types/club";
import Link from "next/link";

import BookTable from "./BookTable";
import BookTicket from "./BookTicket";
import { Toggle } from "@/components/Club/Toggle";
import { useState } from "react";

interface Props {
  show: boolean;
  onClose: any;
  tickets: ITicket[];
  tables: any,
  club: IClub;
  time?: string
  dates?: [{ id: string }]
}

function Book({
  show,
  onClose,
  tickets,
  club,
  tables,
  // time = "19:00 Hrs - 12:00 Hrs",
}: Props) {

  if (!show) {
    return null;
  }

  const [selected, setSelected] = useState(true)


  const render = () => {
    switch (selected) {
      case true:
        return (
          <BookTicket club={club} tickets={tickets} />
        )
      case false:
        return (
          <BookTable club={club} tables={tables} />
        )
      default:
        return null;
    }
  }

  console.log(club)

  return (
    < div className='fixed inset-0 z-50 flex items-center justify-end bg-black/50 backdrop-blur-sm' >
      {/* background */}
      <div className='h-full  sm:h-full w-full max-w-[500px] sm:w-[1024px] bg-dark text-offWhite overflow-y-scroll' >
        {/* overlay */}
        <div className="w-full flex justify-end items-center pt-4 px-2 sm:px-4">
          <div onClick={onClose} className='hover:cursor-pointer'>
            <FiX className="text-offWhite h-8 w-8" />
          </div>
        </div>
        <div className="p-4 pt-0 flex flex-col ">
          <div className="pt-0 py-3">
            <div className="flex items-center">
              <div className="w-1/2 text-offWhite py-4">
                <h1 className="font-primary text-4xl">{club.name}</h1>
                <h2 className="font-secondary text-base font-semibold text-brown">{club?.city || "City"}</h2>
              </div>
              <div className="py-2 w-1/2">
                <p className="text-xl font-secondary font-semibold">{club?.timings ? `${club.timings.opensAt} - ${club.timings.closesAt}` : ""}</p>
              </div>
            </div>
            <div className="flex flex-row">
              <FiMapPin className="my-1 ml-1 mr-2 " />
              <div>{club.address}</div>
            </div>
          </div>
          <span className="line"></span>
          {
            !club.is_fullcovered
              ?
              <div className="w-full flex-col space-y-4 h-96 flex items-center justify-center">
                <p className="text-3xl font-primary tracking-wide	">Bookings available soon!</p>
                <Link href="/clubs">
                  <button className="border border-brown px-6 py-3 rounded-[10px] text-brown font-semibold hover:bg-brown hover:text-white">View clubs</button>
                </Link>
              </div>
              : <>
                <div className="w-full flex justify-center my-2">
                  <Toggle o={selected} fn={setSelected} />
                </div>
                <span className="line"></span>

                {render()}
              </>
          }
        </div>
      </div>
    </div >
  );
}


export default Book;