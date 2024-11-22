
'use client'

import Image from "next/image";
import { useState, useEffect } from "react";




function ContentCards2() {

    const [info, setInfo] = useState();
    
    useEffect(() => {
        fetch('https://fourways-dental-studio.vercel.app/api/cardcontent2')
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
    <div className="p-4">
        <div className="max-w-6xl mx-auto mt-10 flex flex-col items-center justify-center">
            <h2 className="text-4xl pb-2">Oral Health Programs</h2>
            <img src="/divider.png" width="200" alt="" className="pt-2" />
        </div>
        <div className='relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-4 max-w-7xl mx-auto  m-10'>
            {
                info &&
                info.sections?.map((card, index)=>(
                    <div key={index} className="relative min-h-full bg-white p-4 shadow-md shadow-black group hover:bg-slate-100 transition duration-300 ease-in text-center">
                        <div className="flex items-center justify-center">
                            <Image src={card.image} width={40} height={40} alt="services"/>

                        </div>
                        
                        <div className='p-4 roununded min-h-full'>
                            <h3 className="text-xl font-semibold p-4">{card.title}</h3>
                            
                            <p className="mt-2 text-sm">{card.content}</p>
                        </div>

                    </div>
                ))

            }

        </div>
    </div>
  )
}

export default ContentCards2
