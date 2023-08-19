import About from '@/components/Profile/About'
import Certifications from '@/components/Profile/Certifications'
import CreateProfile from '@/components/Profile/CreateProfile'
import Education from '@/components/Profile/Education'
import Experience from '@/components/Profile/Experience'
import GeneralDetails from '@/components/Profile/GeneralDetails'
import ImageUploader from '@/components/Profile/ImageUploader'
import ProfessionalDetails from '@/components/Profile/ProfessionalDetails'
import Skills from '@/components/Profile/Skills'
import Spinner from '@/components/ui/spinner'
import { API_URL } from '@/constants/index'
import apiClient from '@/lib/apiClient'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

function profile() {

  const { data, isLoading, error } = useQuery({
    queryKey: ['get-profile'],
    queryFn: async () => {
      const data = await apiClient.get(`${API_URL}/profile`)
      return data.data.data
    }
  })

  if (error) {
    return (
      <CreateProfile />
    )
  }

  if (isLoading) {
    return (
      <div className='mt-20 mb-40 max-w-7xl mx-auto flex flex-col items-center justify-center'>
        <Spinner />
      </div>
    )
  }

  console.log(data)
  return (
    <section className='mt-20 mb-40 max-w-7xl mx-auto flex flex-col items-center justify-center'>
      <div className='w-[90%] bg-bluish h-36 rounded-md'>
        <p className='font-semibold text-white p-2 text-2xl uppercase'>My profile</p>
      </div>
      {
        data ?
          (
            <div className='w-[85%] h-fit relative top-[-50px] bg-white drop-shadow-2xl rounded-md flex flex-col sm:flex-row p-4'>
              <div className='w-full sm:w-1/2 p-4 space-y-4'>
                <ImageUploader />
                <GeneralDetails
                  name={data?.name}
                  email={data?.email}
                  phone={data?.phone}
                />
                <About
                  about={data?.about}
                />
                <Skills
                  skills={data?.skills}
                />
              </div>
              <div className='w-full sm:w-1/2 p-4 space-y-6'>
                <ProfessionalDetails />
                <Certifications />
                <Experience />
                <Education />
              </div>
            </div>)
          : (<div>
            <CreateProfile />
          </div>)
      }
    </section>
  )

}

export default profile