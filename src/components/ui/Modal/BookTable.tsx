import { getNextFiveDaysMoment, month } from '@/data/dates';
import { calCartTotal } from '@/utils/cartTotal';
import { cx } from 'class-variance-authority';
import React, { useState } from 'react'
import { FiPlus } from 'react-icons/fi';
import CartCard from '../Cards/CartCard';
import PromoCodeInput from '../Cards/PromoCodeInput';
import { DateBox } from '@/components/Club/DateBox';
import { ITables } from 'src/types/tables';
import Request from './Request';

function BookTable({ club, tables }: any) {


  const [show, setShow] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')

  const [promo, setPromo] = useState({
    promo_code: "",
    discount: 0
  })



  const nextFewDays = getNextFiveDaysMoment();


  const tablesQty = tables.map((table: any) => (
    {
      ...table, qty: 0
    }
  ))

  const [order, setOrder] = useState<ITables[]>(tablesQty)

  const handlerTotal = (tick: any, qtyU: number) => {
    setOrder(
      order.map((table: ITables) =>
        table._id === tick._id
          ? { ...table, qty: qtyU }
          : { ...table }
      )
    )
  }

  const priceAfterDiscount = (amount: number, discount: number) => {
    return Number(amount - amount * discount / 100)
  }


  const { cartTotal } = calCartTotal(order)

  const [openTerms, setOpenTerms] = useState<boolean>(false)

  return (
    <div className="flex flex-col">
      <div className="py-2 sm:py-5 flex flex-col w-full items-">
        <div className="flex flex-col space-y-4">

          {/* Date selector */}
          <div className="flex flex-col">
            <div className="flex items-center w-full justify-between">
              <p className="font-secondary font-medium">Select Date</p>
              <p className="font-secondary font-semibold text-brown">{selectedDate}</p>
            </div>
            <div className="flex overflow-x-auto w-full">
              {
                nextFewDays.map((date: any): any => (
                  <div className="m-1" key={date._id} >
                    <DateBox
                      date={date.date.split('-')[2]}
                      month={month[date?.date.split('-')[1] - 1]}
                      day={date.dayOfWeek} year={date.date.split('-')[0]}
                      selected={selectedDate}
                      setSelected={setSelectedDate}
                    />
                  </div>
                ))
              }
            </div>
          </div>
          {/* Time selector */}
          <div className="flex flex-col">
            <div className="flex items-center w-full justify-between">
              <p className="font-secondary font-medium">Select Time</p>
              <p className="font-secondary font-semibold text-brown">{selectedTime}</p>
            </div>
            <div className="flex w-full justify-end">
              <input
                type='time'
                className='bg-transparent rounded-md'
                onChange={(e) => setSelectedTime(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col px-1 sm:px-4 py-4 space-y-4">




          <div className="flex flex-col w-full px-2">
            {
              tables.length > 0
                ? (tables.map((ticket: ITables): any => (
                  <div key={ticket._id} className="my-2">
                    <CartCard ticket={ticket} onClick={handlerTotal} name={ticket.name} price={ticket.price.current} />
                  </div>)
                ))
                : <div>No tables found</div>
            }
          </div>
        </div>
      </div>
      <span className="line"></span>
      <div className="py-5 w-full  flex items-center justify-center">
        <p className="font-secondary w-1/2 text-lg sm:text-2xl font-medium">Promoters Code</p>
        <PromoCodeInput club={club} promos={promo} setPromos={setPromo} />
      </div>
      <span className="line"></span>
      <div className="text-sm text-offWhite/50 py-5 pb-28 font-secondary">
        <div className="flex flex-row items-center justify-between ">
          <h4 className="text-xl text-offWhite">Terms</h4>
          <div className="h-5 w-5" onClick={() => setOpenTerms(!openTerms)}>
            <FiPlus className="w-6 h-6 text-offWhite" />
          </div>
        </div>
        <div className={cx("text-offWhite overflow-hidden transition-all ease-in-out delay-500", openTerms ? "h-fit" : "h-0")}>
          {club.terms_and_condition}
        </div>
      </div>
      <div className="absolute bottom-0 flex items-center right-0  justify-between py-2 px-6 w-full max-w-[500px] h-24 rounded-t-[30px] bg-offWhite text-black font-secondary font-semibold">
        <div>
          <p className="text-base">Total Amount</p>
          {/* <p className="text-3xl">Rs.{cartTotal - cartTotal * (promo.discount / 100)}</p> */}
          <p className="text-3xl">Rs.{priceAfterDiscount(cartTotal, promo.discount).toFixed(2)}</p>
        </div>
        <button onClick={() => {
          // console.log(promo)
          setShow(true)
        }
        } className="bg-brown py-2 px-10 rounded-[20px] hover:cursor-pointer ">
          Proceed
        </button>
      </div>
      <Request
        show={show}
        onClose={() => setShow(false)}
        club={club}
        promo={promo}
        date={selectedDate}
        total={cartTotal}
        time={selectedTime}
        amount={priceAfterDiscount(cartTotal, promo.discount)}
        orders={order}
      />
    </div>

  )
}

export default BookTable