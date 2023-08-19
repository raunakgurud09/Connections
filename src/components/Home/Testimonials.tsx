import { ChevronLeft, ChevronRight, Star } from "lucide-react";
// import TestimonialCard from "../ui/Cards/TestimonialCard";
import { testi } from "@/data/testimonials";
// import cx from "classnames"
import { useState } from "react";



export default function Testimonials() {

  const [val, setVal] = useState(0)

  const nextPage = () => {
    setVal((val) => (val + 1) % 6)
    console.log(val)
  }

  const prevPage = () => {
    const curr = (val - 1) % 6
    // console.log(Math.abs(curr))
    const absVal = Math.abs(curr)
    console.log(absVal)
    setVal(absVal)
  }



  return (
    <div className="bg-image3">

      <div className="mx-auto my-20 ">
        <div className="flex  flex-col items-center">

          <h6 className='text-white font-primary tracking-wider font-bold text-4xl lg:text-6xl my-8 uppercase'>Reviews</h6>


          <div className="lg:hidden flex items-center justify-center h-full">
            <div className="hover:cursor-pointer">
              <ChevronLeft onClick={prevPage} className="text-white" size={40} />
            </div>
            <div className="flex overflow-x-hidden bg-zinc-900 rounded-xl flex-col w-56 h-56 overflow-y-hidden text-white p-2">
              {
                testi.map((test) => (
                  <div key={test._id}>
                    {
                      test._id === val &&
                      <TestiCardLayout
                        name={test.name}
                        stars={test.stars}
                        text={test.review}
                      />
                    }
                  </div>
                ))
              }
            </div>
            <div className="hover:cursor-pointer">
              <ChevronRight onClick={nextPage} className="text-white" size={40} />
            </div>
          </div>



          <div className="hidden lg:grid grid-rows-3 grid-col-6 grid-flow-col gap-4 text-white">
            <div className="row-span-2 col-span-1 rounded-xl bg-zinc-900 w-96 h-60 p-4">

              <TestiCardLayout
                name={"Raunak Gurud"}
                stars={5}
                text={"This club booking platform exceeded my expectations in every way. The website offers a wide range of venues to choose from, ensuring there's something for everyone. The user experience is top-notch, and I felt confident in their services from start to finish. I can't wait to use it again!"}
              />

            </div>
            <div className="row-span-1 col-span-1 rounded-xl bg-zinc-900 p-4  h-28">
              <TestiCardLayout
                name={"Ishan Sharma"}
                stars={4}
                text={"Damn this app is what I needed."}
              />
            </div>
            <div className="row-span-1 col-span-2 rounded-xl bg-zinc-900 p-4  w-56 h-28">
              <TestiCardLayout
                name={"Sanmati Sharma"}
                stars={3}
                text={"Good."}
              />
            </div>
            <div className="row-span-2 col-span-2 rounded-xl bg-zinc-900 p-4 w-56 h-60">
              <TestiCardLayout
                name={"Saurav k"}
                stars={4}
                text={"I was blown away by the convenience and efficiency of this club booking website. The entire process was quick and easy, and I found the perfect club for our night out in no time."}
              />
            </div>
            <div className="row-span-2 col-span-2 rounded-xl bg-zinc-900 p-4  w-72">
              <TestiCardLayout
                name={"Pranshu Sharma"}
                stars={4}
                text={"I was thoroughly impressed by the range of club options available on this website. From intimate lounges to vibrant nightclubs, they have it all. The interface is intuitive, making the booking process a breeze."}
              />
            </div>
            <div className="row-span-1 col-span-2 rounded-xl bg-zinc-900 p-4 ">
              <TestiCardLayout
                name={"Joel George"}
                stars={5}
                text={"I can't praise this club website enough"}
              />
            </div>
          </div>



        </div>
      </div>
    </div >
  )
}

const TestiCardLayout = ({ name, stars, text }: any) => {
  return (
    <>
      <div className="h-fit w-full  rounded-t-xl flex items-center justify-start">
        <div className="text-inherit w-10 h-10 rounded-full bg-black mr-4 flex items-center justify-center">
          {/* <Meh /> */}
        </div>
        <div>
          <p className=" text-sm font-semibold">{name}</p>
          <div className="flex items-center py-1">
            <div className='flex mr-1'>
              {
                [...Array(stars)].map((_, i) => (
                  <Star size={10} key={i} className='text-yellow-300 mr-1' fill='yellow' />
                ))
              }
            </div>
            <p className=" text-[8px]">{stars}/5</p>
          </div>
        </div>
      </div>
      <p className="text-white font-light py-1">
        {text}
      </p>
    </>
  )
}



// <div className="hover:cursor-pointer">
//               <ChevronLeft className="text-white" size={40} />
//             </div>
//             <div className="flex snap-x">
//               {testimonials.map((testimonial): any => (
//                 <div key={testimonial._id} className={cx("m-4 snap-center", testimonial._id === 1 && "scale-125 mx-4")}>
//                   <TestimonialCard review={testimonial.review} stars={testimonial.stars} name={testimonial.name} />
//                 </div>
//               ))}
//             </div>
//             <div className="hover:cursor-pointer">
//               <ChevronRight className="text-white" size={40} />
//             </div>