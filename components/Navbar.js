import React from 'react'

export default function Navbar() {
  return (
    <header className='flex justify-around'>
      <div className='flex'>
        <img src='/logo.png' className='h-32' />
        <h1 className='text-[#d9d9d9] font-play font-bold text-lg my-auto'>India Flowers</h1>

      </div>
      <div className='lg:flex space-x-12 text-lg hidden  font- font-play'>
        <h1 className='text-[#d9d9d9] cursor-pointer hover:underline my-auto'>Home</h1>
        <h1 className='text-[#d9d9d9] my-auto'>Flowers</h1>
        <h1 className='text-[#d9d9d9] my-auto'>Categories</h1>
        <h1 className='text-[#d9d9d9] my-auto'>About</h1>
      
      </div>
      <div className='my-auto '>
      <div className='bg-[#94327D] cursor-pointer hover:bg-[#c544a7] px-4 py-2 my-auto rounded-full'>
          <h1 className='text-white  font-play my-auto'>Contact</h1>

        </div>

      </div>
    </header>
  )
}
