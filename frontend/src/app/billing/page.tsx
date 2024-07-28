"use client"
import AutomobileApplication from '@/components/AutomobileApplication/AutomobileApplication'
import Sidebar from '@/components/shared/Sidebar'
import React, { useState } from 'react'

type Props = {}

const Home = (props: Props) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const steps = ["Application", "Premium Payment", "Confirm"];
  return (
    <div className='px-6 w-full border-t-2 border-t-gray-100 my-4'>
      <div className='flex'>
        <Sidebar />

        <div className='ml-6 mt-6'>
          <div className="px-4">
      <div>
        <h2 className="pt-3 leading-3 text-xl font-medium">
          Automobile Insurance Application
        </h2>
      </div>
      <div className="my-5">
        <AutomobileApplication />
      </div>
    </div>
        </div>
      </div>
    </div>
  )
}

export default Home