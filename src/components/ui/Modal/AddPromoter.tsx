import { useState } from "react";
import { FiLoader, FiSearch, FiX } from "react-icons/fi";
import AvatarImage from '@/components/ui/Image/AvatarImage';
import { toast } from "../toast/use-toast";
import { API_URL } from "@/constants/index";
import { TUser } from "src/types/user";
import cx from "classnames"
import useAddPromoter from "@/hooks/promoter/useAddPromoter";


function AddPromoters({ show, setShow }: any) {

  const [users, setUsers] = useState<null | TUser[]>(null)
  const [addPromotersLoading, setAddPromotersLoading] = useState<boolean>(false)

  const [isLoading, setIsLoading] = useState(false)
  const [selectedUser, setSelectedUser] = useState<null | TUser>()
  const [find, setFind] = useState(true)

  const [keyword, setKeyword] = useState('')

  const [values, setValues] = useState<{ discount: number, promoValue: number }>({
    discount: 0,
    promoValue: 0
  })

  const addPromoter = useAddPromoter()

  if (!show) {
    return null;
  }

  const handleSelectedUser = async (user: TUser) => {
    setSelectedUser(user)
    setFind(false)
  }

  const handleAddPromoter = async () => {
    if (!selectedUser) {
      setFind(true)
      return toast({
        title: "Add user before submitting.",
        description: "Select user before clicking the button.",
        variant: "destructive",
      })
    }
    try {
      setAddPromotersLoading(true)
      if (values.discount >= 100) values.discount = 100
      if (values.promoValue >= 100) values.promoValue = 100
      const v = { _id: selectedUser._id, ...values }
      
      // add the selected user as a promoter
      const sdf = await addPromoter(v)
      console.log(sdf)

      setAddPromotersLoading(false)
    } catch (error) {
      return toast({
        title: "Something went wrong",
        description: "User is not added as a promoter",
        variant: "destructive"
      })
    }

    setFind(true)
    setSelectedUser(null)
    setShow(false)
  }

  function fetchData(value: string) {
    setIsLoading(true)
    fetch(`${API_URL}/user/search?keyword=${value}&limit=10`)
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.data)
        setIsLoading(false)
        return value && json
      })
  }

  const handleFindUser = async (e: any) => {
    setKeyword(e.target.value)
    fetchData(keyword)
  }

  return (
    <div className='fixed left-0 right-0 bottom-0 top-0 z-10 flex items-center justify-center bg-black/50'>
      <div className='mt-5 h-[fit+20px] mx-1 sm:h-80 w-full sm:w-[700px] bg-black border border-white rounded-md text-offWhite'>
        <div className="w-full flex justify-end py-1 px-3">
          <div onClick={() => setShow(false)} className='my-1 hover:cursor-pointer'>
            <FiX className="h-6 w-6" />
          </div>
        </div>
        <div className='space-y-1'>
          <div className='px-4 py-2 '>
            <div className='flex items-center relative border-[1px] border-black/10 outline-1 bg-offWhite rounded-md'>
              <FiSearch className="text-black h-6 w-6 ml-2 " />
              <input
                type='text'
                placeholder='Search user'
                onChange={(e) => handleFindUser(e)}
                className='mx-2 h-9 w-full rounded-r-[4px] bg-offWhite border-none p-2 text-black  focus:outline-none focus:ring-1 focus:ring-red-500/5 '
              />
              {
                isLoading &&
                <FiLoader className="mr-2 h-4 w-4 text-black animate-spin absolute top-[32%] right-2" />
              }
            </div>
            {selectedUser && (
              <div className="my-2 rounded-md border border-blue-400 bg-blue-700/20" >
                <div className="flex items-center justify-between rounded-sm py-1 text-white w-full">
                  <div className="flex w-full">
                    <div className="h-8 w-8 rounded-full bg-black mx-3 my-1">
                      <AvatarImage src={selectedUser.image} alt={"avatar"} />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm  font-semibold">{selectedUser.name.firstName}{' '}{selectedUser.name.lastName}</p>
                      <p className="text-xs text-gray-600 group-hover:text-white/80">
                        {selectedUser.email}
                        <span className="hidden sm:inline-block ml-1 text-[10px]">{" . "}Added as a promoter</span>
                      </p>
                    </div>
                  </div>
                  <button className="mr-4" onClick={() => { setSelectedUser(null); setFind(true) }}>
                    <FiX className="text-blue-600" />
                  </button>
                </div>
              </div>
            )}
            <div className="max-h-52 w-full text-sm overflow-y-auto bg-offWhite rounded-md mt-2">
              {
                find && users && users.length > 0 && users.map((user) => (
                  <div key={user._id} onClick={() => handleSelectedUser(user)} className="w-full h-12 flex items-center hover:cursor-pointer  text-black">
                    <div className="flex rounded-sm py-1 hover:bg-brown group hover:text-white w-full">
                      <div className="h-8 w-8 rounded-full bg-black mx-3 my-1">
                        <AvatarImage src={user.image} alt={"avatar"} />
                      </div>
                      <div className="flex flex-col">
                        <p className="text-sm  font-semibold">{user.name.firstName}{' '}{user.name.lastName}</p>
                        <p className="text-xs text-gray-600 group-hover:text-white/80">
                          {user.email}
                          <span className="hidden sm:inline-block text-[10px]">. {" "}invite as a promoter</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center flex-col items-center">
          <div className="w-full  flex flex-col sm:flex-row justify-center m-1">
            <input
              id='discount'
              name='discount'
              placeholder='discount'
              type='number'
              onChange={(e) => {
                // if (values.discount >= 100) return values.discount = 100
                setValues({
                  ...values, discount: Number(e.target.value)
                })
              }}
              // value={values.discount}
              className={cx(
                'rounded-md m-2 border border-pine px-3 py-1 font-secondary',
                'bg-black/30'
              )}
            />
            <input
              id='promo_value'
              name='promo_value'
              placeholder='promo value'
              type='number'
              onChange={(e) => {
                // if (values.promoValue > 100) return values.promoValue = 100
                setValues({
                  ...values, promoValue: Number(e.target.value)
                })
              }}
              // value={values.promoValue}
              className={cx(
                'rounded-md m-2 border border-pine px-3 py-1 font-secondary',
                'bg-black/30'
              )}
            />
          </div>
          <button onClick={handleAddPromoter} className="w-36 bg-blue-700 px-4 py-2 rounded-md">
            {
              addPromotersLoading &&
              <FiLoader className="mr-2 h-4 w-4 text-black  animate-spin absolute top-[32%] right-2" />
            }
            ADD Promoter</button>
        </div>
      </div>
    </div>
  );
}

export default AddPromoters;