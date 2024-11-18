import React from 'react'
import WhatsappBtn from './WhatsappBtn'

function Hero() {
  return (
    <div className='min-h-screen'>
        <div className="font-[sans-serif] h-screen">
      <div className="relative overflow-hidden h-[80vh]">
        <div className="max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:py-32 lg:px-8">
          <div className="relative z-10 ">
            <h1 className="text-4xl tracking-tight leading-10 font-extrabold text-white sm:text-5xl sm:leading-none md:text-6xl lg:text-7xl">
              
              <br className="xl:hidden" />
              <span className="text-gray-800 lg:text-white lg:text-shadow-lg"> Get Brighter Smile from Fourways Best Dentists</span>
            </h1>
            <p className="italic tracking-widest text-xl text-gray-700 lg:text-white sm:text-xl mt-4 md:mt-6 md:max-w-3xl">
            Your Oral Health Matters to Us
            </p>

            <div className="mt-12 flex max-sm:flex-col lg:justify-start gap-4">
              <div className="rounded-md shadow">
                <button className="w-full flex items-center justify-center px-8 py-3 text-base tracking-wide rounded-md text-green bg-white hover:text-gray-500 hover:bg-indigo-100 transition duration-150 ease-in-out">
                  Request an Apointment
                </button>
              </div>
              <div>
                <button className="w-full flex items-center justify-center px-8 py-3 text-base tracking-wide rounded-md text-white bg-green hover:bg-gray-500 hover:text-green transition duration-150 ease-in-out">
                  Contact US
                </button>
              </div>
            </div>
          </div>
        </div>
        <img src="/hero-image1.png"  className='hidden absolute lg:inline  w-screen -top-60 -z-10'/>
      </div>
    </div>
    </div>
  )
}

export default Hero