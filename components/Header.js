'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { FaWhatsapp } from "react-icons/fa"
import { TiThMenu } from "react-icons/ti"
import MobileNav from './MobileNav'
// import WhatsappBtn from './WhatsappBtn'
import { Link } from 'react-scroll';

function Header() {

    const [toggle, setToggle] = useState(false);

const handleClick = ()=>{

  setToggle(!toggle)
 
  console.log(toggle);
}



  

  return (
    <nav className='bg-[#ffffff] p-4 border-b-solid border-b-[1px] border-b-gray-700 sticky top-0 z-50'>
        <div className='flex p-4 items-center justify-start max-w-6xl mx-auto'>
            <a href='/' className='flex-grow'>
                <Image src={"/logo.png"} alt='Forways dental Studio Logo' width={100} height={100}/>
            </a>
            <div>
                <ul className='flex space-x-6 items-center'>
                    <li className='hidden lg:inline'>
                        <Link 
                            to="services"  // Section ID that we will scroll to
                            smooth={true}   // Enable smooth scrolling
                            duration={500}  // Duration of scroll in milliseconds
                            offset={-70}    // Offset for scrolling (e.g., to adjust for fixed header)
                            className='text-green font-semibold text-[17px] cursor-pointer'>
                            Our Services
                        </Link>
                    </li>
                    <li className='hidden lg:inline'>
                        <Link 
                            to="blog"  // Section ID that we will scroll to
                            smooth={true}   // Enable smooth scrolling
                            duration={500}  // Duration of scroll in milliseconds
                            offset={-70}    // Offset for scrolling (e.g., to adjust for fixed header)
                            className='text-green font-semibold text-[17px] cursor-pointer'>
                            Blog
                        </Link>
                    </li>
                    <li className='hidden lg:inline'>
                        <a href={"tel:+27113254407"} className='text-green font-semibold text-[17px]'>
                            Contact Us
                        </a>
                    </li>
                    <li>
                        <a target='_blank' href={"https://wa.me/27662797957?text=I%27m%20interested%20in%20general%20info"} className='animate-pulse flex bg-slate-500 px-4 py-2 rounded-lg space-x-3 items-center text-white font-semibold hover:bg-white hover:ring-gray-500 hover:text-gray-500 hover:ring-2 hover:scale-110 transition duration-500 ease-in-out'>
                            <div>
                                <FaWhatsapp size={20}/>
                            </div>
                            <div>Whatsapp</div>
                        </a>
                    </li>
                    <li onClick={handleClick} className='lg:hidden inline cursor-pointer relative'>
                        <a target='_blank'  className='flex text-green font-semibold text-[17px] space-x-2 items-center'>
                            <div>
                                <span>Menu</span>
                            </div>
                            <div>
                                <TiThMenu size={20}/>
                            </div>
                        </a>
                        
                    </li>
                </ul>
            </div>
        </div>
        {/* mobile nav */}
        <MobileNav toggle={toggle} setToggle={setToggle}/>
    </nav>
  )
}

export default Header