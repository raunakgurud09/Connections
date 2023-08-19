import { FiMapPin, FiX } from "react-icons/fi";
import cx from "classnames"
import { useState } from "react";
import { calCartTotal } from "@/utils/cartTotal";
import { CLUB_COMMISSION } from "@/constants/index";
import useCreateOrder from "@/hooks/payment/useCreateOrder";
import { toast } from "react-toastify";
import Router from "next/router";
import moment from "moment";
import { month } from "@/data/dates";
import { useUser } from "@/hooks/user/useUser";

interface Props {
  show: boolean;
  onClose: any
  club?: any
  amount?: number
  total: number
  time?: string
  orders: any
  date: string
  promo: {
    promo_code: string
    discount: number
  }
}

function Pay({
  show,
  onClose,
  club,
  amount = 0,
  total,
  orders,
  date,
  promo,
  // time = "19:00 Hrs - 23:45 Hrs",
}: Props) {

  if (!show) {
    return null;
  }

  const { data: currentUser } = useUser()

  const tickets: { qty: number, ticket: string }[] = [];
  orders.forEach((order: any) => {
    tickets.push({
      ticket: order._id,
      qty: order.qty
    })
  });

  let selectedDate: any
  const dateSS = new Date()


  console.log(currentUser.email, currentUser.phoneNumber)
  if (!date) {
    selectedDate = `${dateSS.getDate()}-${month[dateSS.getMonth()]}-${dateSS.getFullYear()}`
  } else {
    selectedDate = date
  }

  const { tax, convenienceFee } = calCartTotal(orders)
  const [open, setOpen] = useState<boolean>(false)
  const [send_to, setSend_to] = useState({
    phoneNumber: "",
    email: ""
  })

  let amountToPay = (amount + tax + convenienceFee)


  const createPaymentOrder = useCreateOrder()

  const handleSubmit = async () => {


    if (amountToPay == 0) {
      amountToPay = 1
    }

    console.log(date)

    const today = moment(selectedDate).format('M-DD-YYYY');
    const todayA = today.split('-')
    const formateDate = `${todayA[0]}/${todayA[1]}/${todayA[2]}`



    console.log(formateDate)

    const payload = {
      club: club._id,
      tickets,
      promo_code: promo.promo_code,
      send_to,
      date: formateDate,
      amount: total + tax + convenienceFee == 0 ? 1 : total + tax + convenienceFee,
    }
    // console.log(payload)
    // loading(true)
    try {
      const { data, error } = await createPaymentOrder(payload)
      if (data) {
        toast.success("Order created successfully")
        Router.reload()
      } else if (error) {
        // toast.error(error)
        toast.error("Order not created")
      }
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong")
    }
    // console.log("submitted")
    // loading(false)

  }


  return (
    < div className='fixed left-0 right-0 bottom-0 top-0 z-50 flex items-center justify-end bg-black/50 backdrop-blur-sm' >
      {/* background */}
      <div className='h-full  sm:h-full w-full max-w-[500px] sm:w-[1024px] bg-dark text-offWhite overflow-y-scroll' >
        {/* overlay */}

        <div className="p-4 shadow-2xl">
          <div className="flex items-center">
            <div className="w-1/2 text-offWhite py-4">
              <h1 className="font-primary text-4xl">{club?.name}</h1>
              <h2 className="font-secondary text-base font-semibold text-brown">{club?.city || "City"}</h2>
            </div>
            <div className="w-full flex justify-end items-start ">
              <div onClick={onClose} className='hover:cursor-pointer'>
                <FiX className="text-offWhite h-8 w-8" />
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <FiMapPin className="my-1 ml-1 mr-2 " />
            <div>{club?.address}</div>
          </div>
        </div>
        <div className="p-4 flex flex-col">
          <div className="p-4 space-y-6">
            <p className="font-secondary font-semibold">Where should we send your tickets?</p>
            <div className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder={currentUser.phoneNumber ? currentUser.phoneNumber : "99999999999"}
                onChange={(e) => {
                  setSend_to({
                    ...send_to, phoneNumber: e.target.value
                  })
                }}
                className="border border-offWhite rounded-[10px] placeholder:pl-6 bg-transparent"
              />
              <input
                type="text"
                placeholder={currentUser.email ? currentUser.email : "example@domain.com"}
                onChange={(e) => {
                  setSend_to({
                    ...send_to, email: e.target.value
                  })
                }}
                className="border border-offWhite rounded-[10px] placeholder:pl-6 bg-transparent"
              />
            </div>
          </div>
        </div>


        <div className={cx("absolute bottom-0 flex flex-col items-center justify-between py-2 mb-2 px-6 w-full  max-w-[500px]  rounded-t-[30px] bg-offWhite text-black font-secondary font-semibold", open ? "h-fit" : "h-32")}>
          <div onClick={() => setOpen(!open)} className="w-full py-2 flex items-center justify-center hover:cursor-pointer">
            <div className="w-[60%] h-1 bg-brown rounded"></div>
          </div>
          {open && <div className="w-full">
            <div className="flex flex-col p-2 bg-lack w-full">
              <div className="flex items-center justify-between text-black">
                <h3 className="text-3xl">Passes</h3>
                <p className="text-3xl">Rs.{amount}</p>
              </div>
              <div className="p-3 text-gray-700">
                {/* map */}
                {
                  orders.map((ord: any, index: any) => {
                    return (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <span>{ord?.name}</span>
                          <span>x{ord?.qty}</span>
                        </div>
                        <p>Rs. {ord.qty * (ord?.price?.current)}</p>
                      </div>
                    )
                  })
                }
              </div>
              <span className="line opacity-70"></span>
            </div>
            <div className="flex flex-col p-2 bg-lack w-full">
              <div className="flex items-center justify-between text-black">
                <h3 className="text-3xl">Convince Fees</h3>
                <p className="text-3xl">Rs.{(tax + convenienceFee).toFixed(2)}</p>
              </div>
              <div className="flex items-center justify-between text-gray-600">
                <h3 className="text-sm">Integrated GST (IGST) 18%</h3>
                <p className="text-sm">Rs.{tax.toFixed(2)}</p>
              </div>
              <div className="p-3 text-gray-700">
                {
                  orders.map((ord: any, index: any) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <span>{ord?.name}</span>
                        <span>x{ord?.qty}</span>
                      </div>
                      <p>Rs. {ord.qty * (ord?.price.current * CLUB_COMMISSION)}</p>
                    </div>
                  ))
                }
              </div>
              <span className="line opacity-70"></span>
            </div>
          </div>
          }
          <div className="w-full flex items-center text-sm justify-between">
            <p>PROMOTERS CODE:{promo.promo_code}</p>
            <p>discount:{promo.discount}</p>
          </div>
          <div className="flex justify-between w-full py-2 mb-4 ">
            <div className="w-1/3">
              <p className="xs:text-base text-sm">Pay Using</p>
              <p className="xs:text-3xl text-xl">Google Pay</p>
            </div>
            {/* <span className="line"></span> */}
            <div className="w-2/3 flex items-center justify-end ">
              <button onClick={handleSubmit} className="bg-brown py-2 px-6 xs:px-10 3 rounded-[20px] hover:cursor-pointer font-secondary font-semibold text-offWhite ">
                <span className="text-xl mr-2">Pay</span>
                <span className="text-3xl">Rs.{amountToPay.toFixed(2)}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}




export default Pay;