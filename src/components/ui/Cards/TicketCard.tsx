import React, { useState } from 'react'
import TicketInputQuantity from '../TicketInputQuantity'
import { useUser } from '@/hooks/user/useUser';
import Router from 'next/router';
import { toast } from 'react-toastify';

// import useAddItem from '@/hooks/cart/addToCart';

function TicketCard({ ticket }: any) {
  const [qty, setQty] = useState<number>(0)
  // const { addToCart } = useAddItem();

  const { data: currentUser } = useUser()

  const handleChangeInputQty = (value: string | number) => {
    if (Number(value) > 10) {
      // setToast('error', 'Ops up to 10 max only')
      toast.error('Ops you can only add 10 tickets only')
      setQty(10)
      return
    }
    // setQty(value)
  }

  const handleButtonChangeQty = (action: string) => {
    if (action === 'add') {
      if (qty >= 10) {
        toast.error('Ops you can only add 10 tickets only')
        handleAddToCart(ticket)
        return
      }
      setQty((qty) => Number(qty) + 1)
      // add(qty, ticket.price.current)
    } else {
      if (qty > 0) {
        setQty((qty) => Number(qty) - 1)
        // sub(qty, ticket.price.current)
      }
    }
  }

  const handleChangeBlur = (val: string) => {
    if (!val) {
      setQty(1)
    }
  }

  const handleAddToCart = async (ticket: any) => {
    try {
      if (!currentUser) {
        toast.error("Please log in first");
        return Router.push(`/login?ref=${ticket._id}`);
      }
      // console.log(ticket._id, 1)
      // await addToCart(ticket._id, Number(qty));
    } catch (error: any) {
      toast.error(error?.message);
    }
  };

  return (
    <div className='flex justify-between items-center rounded-md px-2 py-1 sm:flex-row flex-col'>
      <div className='my-1 w-full sm:w-2/6'>
        <h4 className='text-2xl font-bold'>{ticket?.name}</h4>
        <div className='text-sm font-semibold'>Tickets available: {ticket?.available}</div>
      </div>
      <div className='my-1 w-full lg:w-3/6 flex '>
        <div className='w-1/2'>
          <p className='text-md font-semibold line-through'>₹ {ticket?.price?.crossed}</p>
          <p className='text-xl font-bold'>₹ {ticket?.price?.current}</p>
        </div>
        <div className='w-1/2'>
          <TicketInputQuantity
            value={qty}
            onButtonClick={handleButtonChangeQty}
            onChangeBlur={handleChangeBlur}
            onChangeInput={handleChangeInputQty} />
        </div>
      </div>
      <div className='my-1 w-full sm:w-1/6 flex justify-end'>
        <div onClick={handleAddToCart} className='py-1 px-2 bg-brown rounded-md hover:cursor-pointer'>ADD</div>
      </div>
    </div>
  )
}

export default TicketCard