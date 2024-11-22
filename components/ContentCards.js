
'use client'

import Image from "next/image";
import { useState, useEffect } from "react";
import FramerWrapper from "./FramerWrapper";




function ContentCards() {

    const [info, setInfo] = useState();
    
    useEffect(() => {
        fetch('http://localhost:3000/api/cardcontent1')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setInfo(data);
            })
            .catch(error => {
                console.error('Error fetching catalog:', error);
            });
    }, []);

  return (
    <div>
        <div className='relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-6  gap-52 max-w-7xl mx-auto -mt-20 md:h-full '>
            {
                info &&
                info.sections?.map((card, index)=>(
                    <div   key={index} className="relative min-h-full bg-white rounded-3xl p-4 shadow-md shadow-black group hover:bg-[#25BE97] transition duration-300 ease-in">
                        <div></div>
                        <div className="lg:inline md:hidden  absolute  -top-40 md:-left-20 overflow-hidden -z-10 group-hover:left-0 transtion duration-700 ease-in group-hover:scale-110">
                            <Image src={card.image} width={200} height={400} alt="Card Image"/>

                        </div>
                        <div className='p-4 roununded min-h-full'>
                            <h3 className="text-xl font-semibold">{card.title}</h3>
                            <div className="border-b-[1px] border-b-dotted p-2 border-black">
                            </div>
                            <p className="mt-2 text-sm">{card.content}</p>
                        </div>

                    </div>
                ))

            }

        </div>
    </div>
  )
}

export default ContentCards