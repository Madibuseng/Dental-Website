import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <div className=''>
        <section className="max-w-6xl mx-auto p-4">
        <div className="max-w-6xl mx-auto mt-10 flex flex-col justify-center">
            <h2 className="text-4xl pb-2">About us</h2>
            <img src="/divider.png" width="200" alt="" className="pt-2" />
        </div>
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl pb-5">A Warm Welcome</h2>
                <p className="mt-4 text-gray-600 text-lg">At Fourways Dental Studios, our team is determined to make you feel comfortable and ease while providing quality and compassionate dental care. Whether it’s you, your little one or your parent, our team of receptionists, hygienists and dentists are always happy to help.</p>
                {/* <p className='text-lg font-bold'>Dr. Sekgwari Frank Letsoalo</p> */}
                <div className="mt-8">
                    {/* <a href="#" className="text-blue-500 hover:text-blue-600 font-medium">Learn more about us
                        <span className="ml-2">&#8594;</span></a> */}
                </div>
            </div>
            <div className="mt-12 md:mt-0">
                <Image src="/about1.jpg" alt="About Us Image" className="object-cover rounded-lg shadow-md" width={500} height={500}/>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div className="mt-12 md:mt-0">
                <img src="/about3.jpg" alt="About Us Image" className="object-cover rounded-lg shadow-md"/>
            </div>
            <div className="max-w-lg">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl pb-5">As Convenient As Can Be</h2>
                <p className="mt-4 text-gray-600 text-lg">Fourways Dental Studios truly cares about our oral health and wellbeing, as well as your experience when you visit us. As soon as you step into our clinic, we’ll do everything we can to ensure that your visit is as comfortable and accommodating as possible. We try our best to maintain flexible operating hours and are happy to accommodate family appointments. Got a special request? We would be happy for the opportunity to go above and beyond for you.</p>
               
                <div className="mt-8">
                    {/* <a href="#" className="text-blue-500 hover:text-blue-600 font-medium">Learn more about us
                        <span className="ml-2">&#8594;</span></a> */}
                </div>
            </div>
            
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl pb-5">Lead by</h2>
                <p className="mt-4 text-gray-600 text-lg">Aligners, Basic dentistry, Cosmetic dentistry, Crown & Bridges, Maxilofacial & Peadiatric dentistry, Orthodontics, Teeth Whitening</p>
                <p className='text-lg font-bold'>Dr. Sekgwari Frank Letsoalo</p>
                <div className="mt-8">
                    {/* <a href="#" className="text-blue-500 hover:text-blue-600 font-medium">Learn more about us
                        <span className="ml-2">&#8594;</span></a> */}
                </div>
            </div>
            <div className="mt-12 md:mt-0">
                <img src="https://www.fourwaysdentalstudios.com/images/WhatsApp_Image_2023-07-08_at_09.50.20-removebg.png" alt="About Us Image" className="object-cover rounded-lg shadow-md"/>
            </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default About