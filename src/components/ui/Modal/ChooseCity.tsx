import { SearchIcon } from "@/components/Icons";
import Image from "next/image"

const options = [
  {
    name: 'Mumbai',
    imageUrl:
      'https://in.bmscdn.com/m6/images/common-modules/regions/mumbai.png',
  },
  {
    name: 'Delhi',
    imageUrl: 'https://in.bmscdn.com/m6/images/common-modules/regions/ncr.png',
  },
  {
    name: 'Bangaluru',
    imageUrl: 'https://in.bmscdn.com/m6/images/common-modules/regions/bang.png',
  },
  {
    name: 'Hyderabad',
    imageUrl: 'https://in.bmscdn.com/m6/images/common-modules/regions/hyd.png',
  },
  {
    name: 'Ahmedabad',
    imageUrl: 'https://in.bmscdn.com/m6/images/common-modules/regions/ahd.png',
  },
  {
    name: 'Chandighar',
    imageUrl: 'https://in.bmscdn.com/m6/images/common-modules/regions/chd.png',
  },
  {
    name: 'Chennai',
    imageUrl: 'https://in.bmscdn.com/m6/images/common-modules/regions/chen.png',
  },
  {
    name: 'Pune',
    imageUrl: 'https://in.bmscdn.com/m6/images/common-modules/regions/pune.png',
  },
  {
    name: 'Kolkata',
    imageUrl: 'https://in.bmscdn.com/m6/images/common-modules/regions/kolk.png',
  },
  {
    name: 'Kochi',
    imageUrl: 'https://in.bmscdn.com/m6/images/common-modules/regions/koch.png',
  },
];

// imageUrl="https://in.bmscdn.com/m6/images/common-modules/regions/mumbai.png"

function ChoseCity({ show, onClose, setName }: any) {

  if (!show) {
    return null;
  }

  return (
    <div className='fixed left-0 right-0 bottom-0 top-0 z-10 flex items-center justify-center bg-black/50'>
      <div className='mt-20 h-[fit+20px] mx-1 sm:h-80 w-full sm:w-[1024px] bg-white'>
        <div onClick={onClose} className="w-full bg-blak">
          <div  className='bg-black/25 p-2 w-6 h-6 rounded-full flex justify-end items-center'>
            <p>X</p>
          </div>
        </div>
        <div className='space-y-1'>
          <div className='px-4 py-2'>
            <div className='flex items-center border-[1px] border-black/10 outline-1'>
              <div className='flex h-full items-center justify-center rounded-l-[4px] bg-white px-2'>
                <SearchIcon className='h-5 w-5 text-zinc-400' />
              </div>
              <input
                type='text'
                placeholder='Search your city'
                className='h-9 w-full rounded-r-[4px] border-none p-2 text-black  focus:outline-none active:outline-none '
              />
            </div>
          </div>
          <div className='flex flex-wrap flex-col items-center justify-center '>
            <p>Popular cities</p>
            <div className='flex flex-wrap items-center justify-center overflow-y space-x-5 p-4'>
              {options.map((option) => (
                <>
                  <div
                    onClick={() => {
                      setName(option.name);
                      onClose(false);
                    }}
                    className='flex flex-col items-center p-1'
                  >
                    <div>
                      <Image
                        width={64}
                        height={64}
                        src={option.imageUrl}
                        alt='city'
                        className='object-cover'
                      />
                    </div>
                    <div className=" text-black w-full text-center">{option.name}</div>
                  </div>
                </>
              ))}
            </div>
            <div className='text-pink'>View all cities</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChoseCity;