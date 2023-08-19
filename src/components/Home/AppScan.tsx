import React from 'react'
import Image from "next/image"
import appImage from "../../../public/Images/App-Image.png"

import appscreen1 from "../../../public/Images/app-scan1.png"
import appscreen2 from "../../../public/Images/etc_05.png"
import appscreen3 from "../../../public/Images/etc_01.png"
import appscreen4 from "../../../public/Images/etc_06.png"
// import clubUI2 from "../../../public/Images/ClubsUI2.png"

import fcCoin from "../../../public/Images/fullcover.png"
// import event from "../../../public/Images/exclusive-icon.png"

import { QrCodeIcon, SearchIcon } from 'lucide-react'

function AppScan() {
  return (

    <div className='bg-darkbg'>
      <div className='flex flex-col mx-auto max-w-[1400px] my-10 '>


        <div className='hidden sm:flex sm:flex-row h-fit w-full flex-col text-offWhite justify-between sm:justify-center space-y-10 px-4 py-12  mb-2'>

          <div className='w-full md:w-3/6 sm:w-2/5 '>
            <div className='flex sticky top-20 mb-4 sm:mb-20 items-center text-center justify-center'>
              <Image src={appImage} alt={"app"} width={241} height={447} className='w-[270px] p-1 h-[500px] object-cover' />
            </div>
          </div>


          <div id="content-container" className='w-full sm:w-3/5 space-y-52 pb-64 snap-y'>

            <div className='flex flex-col space-y-80 snap-center'>
              <div className='w-full h-fit sm:py-1 my-20 sm:w-4/5 flex snap-center'>
                <div className='space-y-3'>
                  <div className='flex' id="circles">
                    <div className="sm:h-14 sm:w-14 h-10 m-1 w-10 rounded-full border-2 border-white/100 flex items-center justify-center">
                      <QrCodeIcon className='text-brown' size={30} />
                    </div>
                    <div className="sm:h-14 sm:w-14 h-10 m-1 w-10 rounded-full border-2 border-white/20"></div>
                    {/* <div className="sm:h-14 sm:w-14 h-10 m-1 w-10 rounded-full border-2 border-white/20"></div> */}
                    {/* <div className="sm:h-14 sm:w-14 h-10 m-1 w-10 rounded-full border-2 border-white/20"></div> */}
                    {/* <div className="sm:h-14 sm:w-14 h-10 m-1 w-10 rounded-full border-2 border-white/20"></div> */}
                  </div>
                  <h4 className='m-1 font-bold text-3xl sm:text-5xl'>Entry with QR Code</h4>
                  <p className='m-1 font-semibold text-xl sm:text-2xl'>Exclusive & Faster entry by just showing the QR code at the gate.</p>
                </div>
              </div>

              <div className='w-full h-fit sm:py-1 my-20  sm:w-4/5 flex snap-center'>
                <div className='space-y-3'>
                  <div className='flex' id="circles">
                    <div className="sm:h-14 sm:w-14 h-10 m-1 w-10 rounded-full border-2 border-white/20"></div>
                    <div className="sm:h-14 sm:w-14 h-10 m-1 w-10 rounded-full border-2 border-white/100 flex items-center justify-center">
                      <SearchIcon className='text-brown' size={30} />
                    </div>
                    {/* <div className="sm:h-14 sm:w-14 h-10 m-1 w-10 rounded-full border-2 border-white/20"></div> */}
                    {/* <div className="sm:h-14 sm:w-14 h-10 m-1 w-10 rounded-full border-2 border-white/20"></div> */}
                    {/* <div className="sm:h-14 sm:w-14 h-10 m-1 w-10 rounded-full border-2 border-white/20"></div> */}
                  </div>
                  <h4 className='m-1 font-bold text-3xl sm:text-5xl'>Discover clubs near you</h4>
                  <p className='m-1 font-semibold text-xl sm:text-2xl'>Locate nearby clubs within your vicinity for entertainment and enjoyment</p>
                </div>
              </div>
            </div>


            {/* <div className='flex flex-col space-y-20 snap-center'>
              <div className='w-full h-fit flex'>
                <div className='space-y-3'>
                  <div className='flex' id="circles">
                    <div className="sm:h-14 sm:w-14 h-10 m-1 w-10 rounded-full border-2 border-white/20"></div>
                    <div className="sm:h-14 sm:w-14 h-10 m-1 w-10 rounded-full border-2 border-white/20"></div>
                    <div className="sm:h-14 sm:w-14 h-10 m-1 w-10 rounded-full border-2 border-white/100 flex items-center justify-center">
                      <Image src={fcCoin} alt={"Coin"} width={30} height={30} className='object-cover' />
                    </div>
                    <div className="sm:h-14 sm:w-14 h-10 m-1 w-10 rounded-full border-2 border-white/20"></div>
                    <div className="sm:h-14 sm:w-14 h-10 m-1 w-10 rounded-full border-2 border-white/20"></div>
                  </div>
                  <h4 className='m-1 font-bold text-3xl sm:text-5xl'>Cover Coins</h4>
                  <p className='m-1 font-semibold text-xl sm:text-2xl'>Earn specific club coins by pre-booking your entry with us.</p>
                </div>
              </div>

              <div className='w-full h-fit sm:py-1 sm:w-4/5 flex snap-center'>
                <div className='space-y-3'>
                  <div className='flex' id="circles">
                    <div className="sm:h-14 sm:w-14 h-10 m-1 w-10 rounded-full border-2 border-white/20"></div>
                    <div className="sm:h-14 sm:w-14 h-10 m-1 w-10 rounded-full border-2 border-white/20"></div>
                    <div className="sm:h-14 sm:w-14 h-10 m-1 w-10 rounded-full border-2 border-white/20"></div>
                    <div className="sm:h-14 sm:w-14 h-10 m-1 w-10 rounded-full border-2 border-white/100 flex items-center justify-center">
                      <Image src={event} alt={"Coin"} width={30} height={30} className='object-cover' />
                    </div>
                    <div className="sm:h-14 sm:w-14 h-10 m-1 w-10 rounded-full border-2 border-white/20"></div>
                  </div>
                  <h4 className='m-1 font-bold text-3xl sm:text-5xl'>Exclusive events</h4>
                  <p className='m-1 font-semibold text-xl sm:text-2xl'>Access to extraordinary club experiences.</p>
                </div>
              </div>
            </div> */}

            {/* <div className='flex flex-col space-y-10 snap-center'>
              <div className='w-full h-[300px] mb-28 py-8 sm:py-52 pb-72 sm:w-4/5 flex'>
                <div className='space-y-3'>
                  <div className='flex' id="circles">
                    <div className="sm:h-14 sm:w-14 h-10 m-1 w-10 rounded-full border-2 border-white/20"></div>
                    <div className="sm:h-14 sm:w-14 h-10 m-1 w-10 rounded-full border-2 border-white/20"></div>
                    <div className="sm:h-14 sm:w-14 h-10 m-1 w-10 rounded-full border-2 border-white/20"></div>
                    <div className="sm:h-14 sm:w-14 h-10 m-1 w-10 rounded-full border-2 border-white/20"></div>
                    <div className="sm:h-14 sm:w-14 h-10 m-1 w-10 rounded-full border-2 border-white/100 flex items-center justify-center">
                      <Image src={fcCoin} alt={"Coin"} width={30} height={30} className='object-cover' />
                    </div>
                  </div>
                  <h4 className='m-1 font-bold text-3xl sm:text-5xl'>Get Started With</h4>
                  <p className='m-1 font-semibold text-5xl text-brown '>FULLCOVER</p>
                </div>
              </div>
            </div> */}


          </div>
        </div>










        <div className=' block sm:hidden sm:flex-row h-fit w-full flex-col text-offWhite justify-between sm:justify-center space-y-10 px-4 py-12 mb-2'>

          <div id="content-container" className='bg-neutral- font-secondary font-semibold rounded-xl w-full bg-ble-200 flex overflow-x-auto snap-x sm:hidden'>


            <div className='min-w-full flex flex-col snap-center'>
              <div className=' w-full md:w-3/6 sm:w-2/5 '>
                <div className='flex top-6 mb-4 sm:mb-20 items-center text-center justify-center '>
                  <Image src={appscreen1} alt={"app"} width={100} height={100} className='relative mt-4 w-[200px] h-[400px] bg-black object-contain border-[10px] border-zinc-900 rounded-3xl' />
                </div>
              </div>
              <div className='min-w-full px-8 text-white  space-y-4 h-[300px] sm:h-[600px] py-8 sm:py-24 sm:w-4/5 flex flex-col items-center justify-end '>
                <div className='space-y-3'>
                  <div className='flex' id="circles">
                    <div className="sm:h-14 sm:w-14 h-10 m-1 w-10 rounded-full border-2 border-white/100 flex items-center justify-center">
                      <QrCodeIcon className='text-brown p-1' size={30} />
                    </div>
                    <div className="sm:h-14 sm:w-14 h-10 m-1 w-10 rounded-full border-2 border-white/20"></div>
                    <div className="sm:h-14 sm:w-14 h-10 m-1 w-10 rounded-full border-2 border-white/20"></div>
                    <div className="sm:h-14 sm:w-14 h-10 m-1 w-10 rounded-full border-2 border-white/20"></div>
                  </div>
                  <h4 className='m-1 font-bold text-3xl sm:text-5xl'>Entry with QR Code</h4>
                  <p className='m-1 font-semibold text-xl sm:text-2xl'>Exclusive & Faster entry by just showing the QR code at the gate.</p>
                </div>
                <div className='w-14 space-x-2 h-40 flex justify-center items-center'>
                  <div className="h-4 w-4 p-2 rounded-full border border-zinc-800 bg-white/50"></div>
                  <div className="h-4 w-4 p-2 rounded-full border border-zinc-800 "></div>
                  <div className="h-4 w-4 p-2 rounded-full border border-zinc-800 "></div>
                  <div className="h-4 w-4 p-2 rounded-full border border-zinc-800 "></div>
                </div>
              </div>
            </div>


            <div className='min-w-full flex flex-col snap-center'>
              <div className=' w-full md:w-3/6 sm:w-2/5 '>
                <div className='flex top-6 mb-4 sm:mb-20 items-center text-center justify-center '>
                  <Image src={appscreen2} alt={"app"} width={100} height={100} className='relative mt-4 w-[200px] h-[400px] bg-black object-contain border-[10px] border-zinc-900 rounded-3xl' />
                </div>
              </div>
              <div className='min-w-full px-8 text-white first-letter:space-y-4 h-[300px] sm:h-[600px] py-8 sm:py-24 sm:w-4/5 flex flex-col items-center justify-end'>
                <div className='space-y-3'>
                  <div className='flex' id="circles">
                    <div className="sm:h-14 sm:w-14 h-10 m-1 w-10 rounded-full border-2 border-white/20"></div>
                    <div className="sm:h-14 sm:w-14 h-10 m-1 w-10 rounded-full border-2 border-white/100 flex items-center justify-center">
                      <SearchIcon className='text-brown p-1' size={30} />
                    </div>
                    <div className="sm:h-14 sm:w-14 h-10 m-1 w-10 rounded-full border-2 border-white/20"></div>
                    <div className="sm:h-14 sm:w-14 h-10 m-1 w-10 rounded-full border-2 border-white/20"></div>
                  </div>
                  <h4 className='m-1 font-bold text-3xl sm:text-5xl'>Discover clubs near you</h4>
                  <p className='m-1 font-semibold text-xl sm:text-2xl'>Locate nearby clubs within your vicinity for entertainment and enjoyment</p>
                </div>
                <div className='w-14 space-x-2 h-40 flex justify-center items-center'>
                  <div className="h-4 w-4 p-2 rounded-full border border-zinc-800 "></div>
                  <div className="h-4 w-4 p-2 rounded-full border border-zinc-800 bg-white/50"></div>
                  <div className="h-4 w-4 p-2 rounded-full border border-zinc-800 "></div>
                  <div className="h-4 w-4 p-2 rounded-full border border-zinc-800 "></div>
                </div>
              </div>
            </div>

            <div className='min-w-full flex flex-col snap-center'>
              <div className='w-full md:w-3/6 sm:w-2/5 '>
                <div className='flex top-6 mb-4 sm:mb-20 items-center text-center justify-center '>
                  <Image src={appscreen3} alt={"app"} width={100} height={100} className='relative mt-4 w-[200px] h-[400px] bg-black p-1 object-contain border-[10px] border-zinc-900 rounded-3xl' />
                </div>
              </div>
              <div className='min-w-full px-8 text-white first-letter:space-y-4 h-[300px] sm:h-[600px] py-8 sm:py-24 sm:w-4/5 flex flex-col items-center justify-end'>
                <div className='space-y-3'>
                  <div className='flex' id="circles">
                    <div className="sm:h-14 sm:w-14 h-10 m-1 w-10 rounded-full border-2 border-white/20"></div>
                    <div className="sm:h-14 sm:w-14 h-10 m-1 w-10 rounded-full border-2 border-white/20"></div>
                    <div className="sm:h-14 sm:w-14 h-10 m-1 w-10 rounded-full border-2 border-white/100 flex items-center justify-center">
                      <Image src={fcCoin} alt={"Coin"} width={30} height={30} className='object-cover' />
                    </div>
                    <div className="sm:h-14 sm:w-14 h-10 m-1 w-10 rounded-full border-2 border-white/20"></div>
                  </div>
                  <h4 className='m-1 font-bold text-3xl sm:text-5xl'>Cover Coins</h4>
                  <p className='m-1 font-semibold text-xl sm:text-2xl'>Earn specific club coins by pre-booking your entry with us.</p>
                </div>
                <div className='w-14 space-x-2 h-40 flex justify-center items-center'>
                  <div className="h-4 w-4 p-2 rounded-full border border-zinc-800 "></div>
                  <div className="h-4 w-4 p-2 rounded-full border border-zinc-800 "></div>
                  <div className="h-4 w-4 p-2 rounded-full border border-zinc-800 bg-white/50"></div>
                  <div className="h-4 w-4 p-2 rounded-full border border-zinc-800 "></div>
                </div>
              </div>
            </div>

            <div className='min-w-full flex flex-col span-center'>
              <div className='w-full md:w-3/6 sm:w-2/5 '>
                <div className='flex top-6 mb-4 sm:mb-20 items-center text-center justify-center '>
                  <Image src={appscreen4} alt={"app"} width={100} height={100} className='relative mt-4 w-[200px] h-[400px] bg-black object-contain border-[10px] border-zinc-900 rounded-3xl' />
                </div>
              </div>
              <div className='min-w-full px-8 text-white first-letter:space-y-4 h-[300px] sm:h-[600px] py-8 sm:py-24 sm:w-4/5 flex flex-col items-center justify-end'>
                <div className='space-y-3'>
                  <div className='flex' id="circles">
                    <div className="sm:h-14 sm:w-14 h-10 m-1 w-10 rounded-full border-2 border-white/20"></div>
                    <div className="sm:h-14 sm:w-14 h-10 m-1 w-10 rounded-full border-2 border-white/20"></div>
                    <div className="sm:h-14 sm:w-14 h-10 m-1 w-10 rounded-full border-2 border-white/20"></div>
                    <div className="sm:h-14 sm:w-14 h-10 m-1 w-10 rounded-full border-2 border-white/100 flex items-center justify-center">
                      <Image src={fcCoin} alt={"Coin"} width={30} height={30} className='object-cover' />
                    </div>
                  </div>
                  <h4 className='m-1 font-bold text-3xl sm:text-5xl'>Get Started With</h4>
                  <p className='m-1 font-semibold text-5xl text-brown '>FULLCOVER</p>
                </div>
                <div className='w-14 space-x-2 h-40 flex justify-center items-center'>
                  <div className="h-4 w-4 p-2 rounded-full border border-zinc-800 "></div>
                  <div className="h-4 w-4 p-2 rounded-full border border-zinc-800 "></div>
                  <div className="h-4 w-4 p-2 rounded-full border border-zinc-800 "></div>
                  <div className="h-4 w-4 p-2 rounded-full border border-zinc-800 bg-white/50"></div>
                </div>
              </div>
            </div>




          </div>
        </div>

      </div>
    </div>
  )
}

export default AppScan