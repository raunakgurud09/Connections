import { X } from "lucide-react"
import { Check } from "lucide-react"
// import PricingCard from "../ui/Cards/PricingCard"
import Image from "next/image"
import premium from "../../../public/Images/premium-offer.jpg"


export default function Pricing() {
  return (
    <div className='block '>
      <div className=" bg-image2 ">
        <div className='max-w-[1400px] mx-auto relative flex sm:flex-row-reverse flex-col justify-center items-end py-16  w-full '>

          <h6 className=' w-full sm:w-1/2 md:w-1/4 text-white text-center font-primary tracking-wider font-bold text-5xl sm:text-6xl  my-8 uppercase'>offers for you</h6>

          <div className="hidden sm:flex w-full sm:w-1/2 md:w-3/4  justify-center items-center ">
            <Image src={premium} alt="premium" width={100} height={200} className="w-[100px] sm:w-[200px] rounded-xl scale-95 mx-2" />
            <Image src={premium} alt="premium" width={150} height={200} className="w-[150px] sm:w-[200px] rounded-xl scale-110 mx-6" />
            <Image src={premium} alt="premium" width={100} height={200} className="w-[100px] sm:w-[200px] rounded-xl scale-95 mx-2" />
          </div>

          <div className="flex sm:hidden w-full sm:w-1/2 justify-center items-center ">
            <Image src={premium} alt="premium" width={150} height={200} className="w-[200px] sm:w-[300px] rounded-xl  mx-2" />
          </div>

        </div>

      </div>
    </div>
  )
}


export const Values = ({ val, text }: { val: boolean, text: string }) => {
  return (
    <div className="flex space-x-4">
      <div>{val ? <Check /> : <X />}</div>
      <div>{text}</div>
    </div>
  )
}