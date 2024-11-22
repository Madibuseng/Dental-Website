import Link from 'next/link'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

function MobileNav({toggle, setToggle}) {
  return (
    <div className={`z-[100] ${toggle? "block":"hidden"}`}>
    <nav className="bg-white shadow-lg h-screen absolute top-0 left-0 min-w-[240px] py-6 px-4 font-[sans-serif] overflow-auto z-[100]">
      <ul className='flex flex-col space-y-4'>
        <li onClick={()=>setToggle(false)}>
          <a href="#services"
            className="text-black hover:text-green hover:font-semibold text-[15px] block bg-gray-200 rounded px-4 py-2.5 transition-all">
            Our Services
          </a>
        </li>
        <li onClick={()=>setToggle(false)}>
          <a href="#blog"
            className="text-black hover:text-green hover:font-semibold text-[15px] block bg-gray-200 rounded px-4 py-2.5 transition-all">
            Blog
          </a>
        </li>
        <li onClick={()=>setToggle(false)}>
          <a href="#cta"
            className="text-black hover:text-green hover:font-semibold text-[15px] block bg-gray-200 rounded px-4 py-2.5 transition-all">
            Contact Us
          </a>
        </li>
        <li onClick={()=>setToggle(false)}>
            <Link target='_blank' href={"https://wa.me/27662797957?text=I%27m%20interested%20in%20genral%20info"} className='animate-pulse flex bg-slate-500 px-4 py-2 rounded-lg space-x-3 items-center text-white font-semibold hover:bg-white hover:ring-gray-500 hover:text-gray-500 hover:ring-2 hover:scale-110 transition duration-500 ease-in-out'>
                <div>
                    <FaWhatsapp size={20}/>
                </div>
                <div>Whatsapp</div>
            </Link>
                    </li>
      </ul>
      

     

    

      
    </nav>
    <div onClick={()=>setToggle(false)} className='absolute top-0 left-0 h-screen w-screen z-[90] bg-[rgb(0,0,0,0.9)]'>

    </div>
    </div>
  )
}

export default MobileNav