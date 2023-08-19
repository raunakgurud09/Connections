import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { FiLoader } from 'react-icons/fi'
import cx from "classnames"
import useGetPromoter from '@/hooks/club/promoter/useGetPromoter';

interface Props {
  club: any
  promos: {
    promo_code: string,
    discount: number
  }
  setPromos: any
}

export default function PromoCodeInput({ promos, club, setPromos }: Props) {

  const router = useRouter()
  const [promoter, setPromoter] = useState<any | null>({})

  const { promo } = router.query

  const [isLoading, setIsLoading] = useState(false)
  const [promoValid, setPromoValid] = useState<null | boolean>(null)


  const getPromoter = useGetPromoter()


  useEffect(() => {
    if (promo) {
      setPromos({
        ...promos, promo_code: promo.toString()
      })
    } else {
      setPromos({
        ...promos, promo_code: ""
      })
    }
  }, [router.isReady])


  const handleGetClubTickets = async () => {
    if (!promos.promo_code) {
      return;
    }

    const res = await getPromoter(promos.promo_code.trim(), club._id)

    return res
  }

  const handleClick = async () => {
    const res = handleGetClubTickets()
    res.then(({ data }: any) => {
      setIsLoading(true)

      setPromoter(data)

      setPromos({
        ...promos, discount: data?.discount && data?.discount
      })
      setPromoValid(true)
      console.log(promoter)

      setIsLoading(false)
    }).catch(() => {
      setIsLoading(true)

      setPromoter(null)
      setPromoValid(false)
      setPromos({
        ...promos, discount: 0
      })

      setIsLoading(false)
    })


  }

  // set loading will work do this
  // { 
  //   setIsLoading(true)
  //   const res = await handleGetClubTickets()
  //   console.log(res)
  //   if (!res.data) {
  //     setPromoter(null)
  //     setPromoValid(false)
  //   } else {
  //     setPromoter(res)
  //     setPromoValid(true)
  //   }
  //   console.log(input)
  //   setIsLoading(false)
  // }


  return (
    <div className='relative'>
      <input
        type="text"
        placeholder={promos.promo_code ? promos.promo_code : 'PROMO20'}
        value={promos.promo_code}
        onChange={async (e) => {
          setPromos({
            ...promos, promo_code: e.target.value
          })
        }
        }
        className={cx("border border-offWhite rounded-md bg-black/20", promoValid == null ? "border-offWhite" : promoValid === true ? "border-pine" : "border-wine")}
      />
      <button
        onClick={handleClick}
        className={cx('text-xs m-0 text-green-700 absolute left-3 bottom-[-15px]')}
      >
        verify code
      </button>
      {
        isLoading &&
        <FiLoader className="mr-2 h-4 w-4 animate-spin absolute top-[35%] right-2" />
      }
    </div>
  )
}
