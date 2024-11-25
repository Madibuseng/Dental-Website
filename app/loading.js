import React from 'react'

function loading() {
  return (
    <div class="flex flex-wrap gap-16 max-w-md mx-auto mt-12">
        <div class="spinner-4 relative w-12 animate-spin">
            <div class="absolute top-0 left-0  bg-green w-4 h-4 rounded-full"></div>
            <div class="absolute top-1/2 right-0 bg-black w-4 h-4 rounded-full"></div>
        </div>
    </div>
  )
}

export default loading