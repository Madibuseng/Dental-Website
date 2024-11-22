import React from 'react'

function About() {
  return (
    <div className=''>
        <section className="max-w-6xl mx-auto ">
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl pb-5">About Us</h2>
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