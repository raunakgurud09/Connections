import React, { useState } from 'react'
import { SearchIcon } from '../Icons'
import PickCity from '../Clubs/Search/PickCity'
import cx from "classnames"
import Router from 'next/router'

// import PickDate from '../Clubs/Search/PickDate'
interface Props {
  isWhite?: boolean
}

function SearchBox({ isWhite }: Props) {

  // const router = useRouter()

  const [keyword, setKeyword] = useState('')

  const handleSearch = () => {
    Router.push(`/search/clubs/?keyword=${keyword}`)
  }

  return (
    <div className='flex sticky top-0 z-30 py-3 bg-darkbg md:flex-row flex-col h-fit max-w-[1020px] w-full items-center justify-between px-2'>
      <div className={cx('flex w-full h-12 md:w-[60%] items-center rounded-[30px] px-4 py-1', isWhite ? "bg-stone-900" : "bg-offWhite")}>
        <input
          type='text'
          id='searchId'
          className='w-full border-none bg-transparent focus:outline-none focus:ring-1 focus:ring-red-500/5 text-offWhite'
          // className='w-full border-none  bg-transparent  text-offWhite'
          placeholder='Search club'
          onChange={(e) => setKeyword(e.target.value)}
          value-={keyword}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch()
            }
          }}
        />
        <div className='h-6 w-6' onClick={() => handleSearch()}>
          <SearchIcon />
        </div>
      </div>
      <div className='w-full flex justify-end items-center'>
        <div className='ml-1 flex h-full flex-row items-center justify-between mt-4  md:mt-0'>
          {isWhite ? <PickCity isWhite /> : <PickCity />}
          {/* <PickDate /> */}
        </div>
      </div>
    </div>
  )
}

export default SearchBox