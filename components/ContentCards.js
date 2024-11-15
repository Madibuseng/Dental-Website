
'use client'

import { useState, useEffect } from "react";




function ContentCards() {

    const [info, setInfo] = useState();
    
    useEffect(() => {
        fetch('http://localhost:3000/api')
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
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto -mt-20 '>
            {
                info &&
                info.sections?.map((card, index)=>(
                    <div key={index}>
                        <div className='p-4 rounded-lg ring-2 ring-gray-600'>
                            <h3 className="text-3xl">{card.title}</h3>
                            <p>{card.content}</p>
                        </div>

                    </div>
                ))

            }

        </div>
    </div>
  )
}

export default ContentCards