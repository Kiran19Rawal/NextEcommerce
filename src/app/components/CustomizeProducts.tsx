import React from 'react'

export default function CustomizeProducts() {
  return (
    <div className="flex flex-col gap-6">
      <h4 className='font-medium'>Choose a color</h4>
      <ul className='flex items-center gap-3'>
      <li className='w-8 h-8 bg-red-500 rounded-full ring-1 ring-gray-300 cursor-pointer relative'>
            <div className=' absolute h-10 w-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>
        </li>
        <li className='w-8 h-8 bg-blue-500 rounded-full ring-1 ring-gray-300 cursor-pointer relative'>
        </li>
        <li className='w-8 h-8 bg-green-500 rounded-full ring-1 ring-gray-300 cursor-not-allowed relative'>
        <div className='absolute bg-red-400 top-1/2 left-1/2 w-10 h-[2px] rotate-45 transform -translate-x-1/2 -translate-y-1/2'></div>
        </li>
      </ul>



      <h4 className='font-medium'>Choose a size</h4>
      <ul className='flex items-center gap-3'>
      <li className='ring-1 ring-base text-base rounded-md py-1 px-4 text-sm cursor-pointer'>Small</li>
      <li className='ring-1 ring-base text-white bg-base rounded-md py-1 px-4 text-sm cursor-pointer'>Medium</li>
      <li className='ring-1 ring-pink-200 text-white bg-pink-200 rounded-md py-1 px-4 text-sm cursor-pointer'>Large</li>
      </ul>
    </div>
  )
}
