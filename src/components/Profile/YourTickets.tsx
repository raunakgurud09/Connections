import React, { useState } from 'react'
import Spinner from '../ui/spinner/Spinner'
import { useGetOrders } from '@/hooks/user/useGetOrders'
import QRCode from 'react-qr-code'
import { FiArrowDown, FiArrowUp } from 'react-icons/fi'


export default function YourTickets() {

  const { data: orders, isLoading, error } = useGetOrders()

  if (error) {
    return <div>error</div>
  }

  if (isLoading) {
    return <Spinner />
  }

  console.log(orders)

  return (
    <div className='my-2'>
      {
        orders?.length < 0
          ? <div>No bookings</div>
          // : <div>value</div>
          : <div className='grid gap-5'>
            {
              orders.map((order: any) => (
                <OrderCard key={order._id} order={order} />
              ))
            }
          </div>
      }
    </div>
  )
}


const OrderCard = ({ order }: any) => {

  const [open, setOpen] = useState(false)

  return (
    <div className='w-full bg-white text-black rounded-md p-3 h-fit'>
      <div>
        <div className="flex justify-between items-center" onClick={() => setOpen(!open)}>
          <div>{order?.event ? order.event.name : order.club.name}</div>
          <button >
            {
              open ? <FiArrowUp /> : <FiArrowDown />
            }
          </button>
        </div>
        {
          open &&
          <div className='flex flex-col sm:flex-row gap-2 '>
            <div className=' bg-white flex justify-center'>
              <QRCode size={200} value={order._id} className='rounded-md p-2' />
            </div>
            <div className='flex flex-col w-full justify-center'>

              {order.items.map((item: any) => {
                return (
                  <>
                    <div className='flex items-center justify-center w-full flex-col space-y-2'>
                      <p className='text-lg text-gray-700'>{item.qty} x ticket(s)</p>
                      {/* <p className='text-xl font-semibold'>{item.ticket?.event}</p> */}
                      <p className='text-sm text-gray-700'>{item.ticket?.name}</p>
                      {/* <p className='text-xs font-bold'>{order._id}</p> */}
                    </div>
                  </>
                )
              })}
            </div>
          </div>
        }
      </div>
    </div>
  )
}
