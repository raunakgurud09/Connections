import { default_image } from "@/constants/index"
import Image from 'next/image'

interface Props {
  company: string
  role: string
  duration: string
  image: string
  responsibilities: string

}
export default function ExperienceCard({ company, role, duration, image, responsibilities }: Props) {
  return (
    <div className='px-4 py-1 border border-gray-500/30 drop-shadow-xl bg-white rounded-md space-y-4 flex items-center justify-between'>
      <div className="w-4/5">
        <div>
          <p>{duration}</p>
          <p>{company}</p>
        </div>
        <div>
          <p>{role}</p>
          <p>{responsibilities}</p>
        </div>
      </div>
      <div className="w-1/5 flex justify-center items-center">
        <Image
          src={image ?  image : default_image }
          alt={"company logo"}
          width={40}
          height={40}
          className="w-16 h-16 rounded-md bg-black"
        />

      </div>
    </div>
  )
}
