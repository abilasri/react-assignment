import React from 'react'
import { Link } from 'react-router-dom'

const Facilities = () => {
  return (
    <div className=' '>
          <section className="relative h-100 overflow-hidden">
  {/* <img
    src={}
    alt="About Us"
    className="w-full h-full object-cover"
  /> */}

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-20">
      Facilities
    </h1>
    <p className="text-lg md:text-xl max-w-2xl">
      Delivering precision testing with integrity and excellence
    </p>

    {/* Breadcrumb */}
    <div className="flex mt-4 text-sm gap-2 opacity-80">
      <Link to="/" className="hover:text-red-400">Home</Link>
      <span>/</span>
      <span className="text-red-400">Facilities</span>
    </div>
  </div>
</section>
    </div>
  )
}

export default Facilities
