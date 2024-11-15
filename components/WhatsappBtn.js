import Link from 'next/link'
import React from 'react'
import { TiThMenu } from 'react-icons/ti'

function WhatsappBtn() {
  return (
    <div className='lg:hidden inline'>
        <Link href={"/"} className='flex text-green font-semibold text-[17px] space-x-2 items-center'>
            <div>
                <span>Menu</span>
            </div>
            <div>
                <TiThMenu size={20}/>
            </div>
        </Link>
    </div>
  )
}

export default WhatsappBtn