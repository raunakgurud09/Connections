import { useState } from "react";
import InputChange from "../TicketInputQuantity/TicketInputChange";

export default function CartCard(
  {
    ticket,
    onClick,
    price = 134
  }: any
): any {

  const [qty, setQty] = useState<number>(0)

  const handleChangeInputQty = (value: string | number) => {
    if (Number(value) > 10) {
      // setToast('error', 'Ops up to 10 max only')
      setQty(10)
      return
    }
    // setQty(value)
  }

  const handleButtonChangeQty = async (action: string) => {
    if (action === 'add') {
      if (qty >= 10) {
        // setToast('error', 'Ops you can add to cart up to 10 max only')
        return
      }
      await setQty((qty) => Number(qty) + 1)
      onClick(ticket, qty + 1)
    } else {
      if (qty <= 0) {
        return
      }
      await setQty((qty) => Number(qty) - 1)
      onClick(ticket, qty - 1)
    }
  }

  const handleChangeBlur = (val: string) => {
    if (!val) {
      setQty(1)
    }
  }


  return (
    <div className="w-full h-16 border rounded-[10px]  border-offWhite p-3 grid grid-cols-3 items-center text-offWhite font-secondary font-semibold">
      <p className="text-xl mx-1 truncate">{ticket.name}</p>
      <p className="text-xl mx-1">Rs.{price === 0 ? 'FREE' : price}</p>
      <p className="text-xl mx-1">
        <InputChange
          value={qty}
          onButtonClick={handleButtonChangeQty}
          onChangeBlur={handleChangeBlur}
          onChangeInput={handleChangeInputQty}
        />
      </p>
    </div>
  )
}
