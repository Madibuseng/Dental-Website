import React from 'react'
import { FaQuoteLeft } from "react-icons/fa";
import FramerWrapper from './FramerWrapper';

function Blog() {
  return (
    <div className="container mx-auto max-w-6xl p-4 mt-10 ">
      <div className="grid grid-cols md:grid-cols-2 place-items-center gap-14">
        <div  className='relative  shadow-xl rounded-lg p-20'>
            <div className='absolute -z-10 top-5 left-10'>
            <FaQuoteLeft size={100}  color='gray' className='opacity-30'/>
            </div>
            
            <p className="text-gray-700">
                At Our Dental Clinic, you can relax—you’re in good hands. Our commitment to your family is carried out in everything our&nbsp;dentists and staff do, from the friendly way we greet you when you call or come through our door, to the thorough, gentle way we conduct dental examinations. Our team of family dentists and specialists are eager to use our training to help keep you and your loved ones healthy.
            </p>
        </div>
        <div  className="p-6">
          <div className=" p-6">
            <h2 className="text-4xl  mb-4">We Believe in a Healthy You</h2>
            <img src="/divider.png" alt="" />
            <p className="text-gray-700 mb-4 mt-10">
              The mission of Our Dental Clinic is to create a healthier community by providing transformational oral health care for those experiencing poverty. Our&nbsp;vision is that every individual has the opportunity to achieve and sustain a healthy smile.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog