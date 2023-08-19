import Image from 'next/image'
import stars from "../../../public/Images/Stars.png"

export default function ProfessionalDetails() {
  return (
    <div className='px-4 py-2 flex items-center justify-center border border-gray-500/30 bg-white rounded-md space-y-4'>
      <div className='w-4/5'>
        <p className='font-semibold'>ProfessionalDetails</p>
        <div className='text-sm'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nostrumcum aliquam obcaecati illo debitis!
        </div>
      </div>
      <div className='w-1/5'>
        <Image
          src={stars}
          alt="stars"
          width={40}
          height={40}
          className="w-20 h-20 "
        />
      </div>
    </div>
  )
}
