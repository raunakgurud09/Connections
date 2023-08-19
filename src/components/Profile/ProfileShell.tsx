import React from 'react'
import Sidebar from './Sidebar'
import Meta from '../Meta'
{/* <Index value={option} /> */ }

const options = [
  { "name": 'Profile', "href": "/profile/" },
  // { "name": 'Cart', "href": "/profile/cart" },
  { "name": 'Coins', "href": "/profile/coins" },
  { "name": 'Bookings', "href": "/profile/bookings" },
  { "name": 'Settings', "href": "/profile/settings" }
]


function ProfileShell({ children }: any) {
  const handleOptionChange = () => {
    console.log("handle")
  }
  return (
    <>
      <Meta title='Profile'/>
      <div className='min-h-screen w-full'>
        <div className='mx-auto flex h-full w-full max-w-[1400px] items-start justify-center'>
          <div className='mt-16 flex w-full h-full flex-col'>
            <div className='h-fit w-full rounded p-4 flex flex-col sm:flex-row items-start justify-start'>
              <div className='w-full sm:w-2/12 h-full'>
                <Sidebar options={options} fn={handleOptionChange} />
              </div>
              <div className='ml-0 md:ml-2 w-full h-full sm:w-9/12  bg-black/ rounded-[20px]'>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileShell