import { API_URL } from '@/constants/index'
import apiClient from '@/lib/apiClient'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import Spinner from '../ui/spinner'

export default function CreateProfile() {

  const { data, isLoading, } = useQuery({
    queryKey: ['get-profile'],
    queryFn: async () => {
      const data = await apiClient.get(`${API_URL}/profile`)
      return data.data.data
    },
    staleTime: 60 * 1000, // 1 minute

  })


  if (isLoading) {
    return (
      <div className='mt-20 mb-40 max-w-7xl mx-auto flex flex-col bg-black items-center justify-center'>
        <Spinner />
      </div>
    )
  }

  console.log(data)


  return (
    <section className='mt-20 mb-40 max-w-7xl mx-auto flex flex-col items-center justify-center'>
      <p>You don&apos;t have a account</p>
      <button className='px-4 py-2 rounded-md bg-indigo-400 text-white'>CREATE PROFILE</button>
    </section>
  )
}
