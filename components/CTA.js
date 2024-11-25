import React from 'react'
import { SendEmail } from "./SendEmail";
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
// import WhatsappBtn from './WhatsappBtn';

function CTA() {
  return (
    <form
        action={async (FormData) => {
            "use server";
            await SendEmail(FormData);
            
        }}
    
    >
        <div className="bg-slate-500  px-8 py-16 font-[sans-serif]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 justify-center items-center gap-12 ">
        <div className="text-center md:text-left">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-green mb-6 md:!leading-[55px]">Dental health impacts overall health
          </h2>
          <p className="text-lg lg:text-xl text-white">Your smile says a lot about the way you feel – inside and out. Our team can care for everyone in the family, from toddlers to seniors. And because we have an extensive team of dentists and specialists, we can help you with all of your family’s dental needs.
          </p>
          
        <div className="bg-white mt-12 flex px-1 py-1.5 rounded-full shadow-[0_5px_22px_-8px_rgba(93,96,127,0.2)] md:w-4/5 overflow-hidden">
          <input type='email' placeholder='Enter your email' name="SenderEmail" required className="w-full outline-none bg-white pl-4 text-gray-800 text-sm" />
          <button type='submit'
            className="bg-green hover:bg-[#3da819] transition-all text-white text-sm rounded-full px-4 py-2.5 whitespace-nowrap">Email Us</button>
        </div>
        <div className='p-4 justify-center md:w-4/5 overflow-hidden items-center'>
        <Link target='_blank' href={"https://wa.me/27662797957?text=I%27m%20interested%20in%20general%20info"} className='flex justify-center px-4 py-2 rounded-lg space-x-3 items-center text-white font-semibold  ring-white ring-2  transition duration-500 ease-in-out text-center'>
            <div>
              <FaWhatsapp size={20}/>
            </div>
          <div>Whatsapp</div>
        </Link>
        </div>
        
        </div>
        
        <div className="text-center">
          <img src="/CTAimg.jpeg" alt="Premium Benefits" className="w-full mx-auto" />
        </div>
      </div>
      {/* <div className='absolute top-0 -z-10 overflow-hidden'>
        <img src="/CTAbgimg.png" alt="" className='object-contain h-[]' />

      </div> */}
    </div>
    </form>
  )
}

export default CTA