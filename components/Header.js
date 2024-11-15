import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaWhatsapp } from "react-icons/fa"
import { TiThMenu } from "react-icons/ti"

function Header() {
  return (
    <nav className='bg-[#ffffff] p-4 border-b-solid border-b-[1px] border-b-gray-700'>
        <div className='flex p-4 items-center justify-start max-w-6xl mx-auto'>
            <div className='flex-grow'>
                <Image src={"/logo.png"} alt='Forways dental Studio Logo' width={100} height={100}/>
            </div>
            <div>
                <ul className='flex space-x-6 items-center'>
                    <li className='hidden lg:inline'>
                        <Link href={"/"} className='text-green font-semibold text-[17px]'>
                            Our Services
                        </Link>
                    </li>
                    <li className='hidden lg:inline'>
                        <Link href={"/"} className='text-green font-semibold text-[17px]'>
                            Blog
                        </Link>
                    </li>
                    <li className='hidden lg:inline'>
                        <Link href={"/"} className='text-green font-semibold text-[17px]'>
                            Contact Us
                        </Link>
                    </li>
                    <li>
                        <Link href={"/"} className='animate-pulse flex bg-slate-500 px-4 py-2 rounded-lg space-x-3 items-center text-white font-semibold hover:bg-white hover:ring-gray-500 hover:text-gray-500 hover:ring-2 hover:scale-110 transition duration-500 ease-in-out'>
                            <div>
                                <FaWhatsapp size={20}/>
                            </div>
                            <div>Whatsapp</div>
                        </Link>
                    </li>
                    <li className='lg:hidden inline'>
                        <Link href={"/"} className='flex text-green font-semibold text-[17px] space-x-2 items-center'>
                            <div>
                                <span>Menu</span>
                            </div>
                            <div>
                                <TiThMenu size={20}/>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Header