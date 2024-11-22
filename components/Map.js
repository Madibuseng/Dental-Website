import React from 'react'

function Map() {
  return (
    <div>
        <div className='max-w-6xl mx-auto p-4 h-96'>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434508862!2d-122.41941618467844!3d37.77492927975982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c2e633e3d%3A0x501567681f648765!2s8%20Sunset%20Ln!5e0!3m2!1sen!2sus!4v1699983603000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                loading="lazy"
                >
            </iframe>

        </div>
    </div>
  )
}

export default Map