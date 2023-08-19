import About from '@/components/Profile/About'
import Certifications from '@/components/Profile/Certifications'
import Education from '@/components/Profile/Education'
import Experience from '@/components/Profile/Experience'
import GeneralDetails from '@/components/Profile/GeneralDetails'
import ImageUploader from '@/components/Profile/ImageUploader'
import ProfessionalDetails from '@/components/Profile/ProfessionalDetails'
import Skills from '@/components/Profile/Skills'
import React from 'react'

function profile() {

  return (
    <section className='mt-20 mb-40 max-w-7xl mx-auto flex flex-col items-center justify-center'>
      <div className='w-[90%] bg-bluish h-36 rounded-md'>
        <p className='font-semibold text-white p-2 text-2xl uppercase'>My profile</p>
      </div>
      <div className='w-[85%] h-fit relative top-[-50px] bg-white drop-shadow-2xl rounded-md flex flex-col sm:flex-row p-4'>
        <div className='w-full sm:w-1/2 p-4 space-y-4'>
          <ImageUploader />
          <GeneralDetails />
          <About />
          <Skills />
        </div>
        <div className='w-full sm:w-1/2 p-4 space-y-6'>
          <ProfessionalDetails />
          <Certifications />
          <Experience />
          <Education />
        </div>
      </div>
    </section>
  )

}

export default profile