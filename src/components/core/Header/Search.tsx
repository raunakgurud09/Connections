import { SearchIcon } from '@/components/Icons';
import React, { useState } from 'react';
import { useRouter } from "next/router"

function Search() {

  const [search, setSearch] = useState('')

  const router = useRouter()

  const handleSearch = () => {
    router.push(`/search/clubs?keyword=${search}`)
  }

  return (
    <div className='flex w-fit items-center justify-between space-x-2 rounded-[20px] border-2 border-white focus:border-white px-2 '>
      <input
        type='text'
        placeholder='Browse Clubs'
        value={search}
        onChange={(event) => {
          event.preventDefault();
          // console.log(event.key)
          setSearch(event.target.value)
          console.log(event.target.value)
        }}
        onSubmit={handleSearch}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleSearch()
          }
          return;
        }}
        className='h-9 w-64 border-l-[20px] border-none bg-transparent text-white placeholder:text-white focus:outline-none focus:ring-1 focus:ring-red-500/5'
      />
      <div className='h-5 w-5 rounded-t-[20px] text-white hover:cursor-pointer' onClick={handleSearch}>
        <SearchIcon />
      </div>
    </div>
  );
}

export default Search;
