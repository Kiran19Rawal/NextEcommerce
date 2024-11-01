import React from 'react'
import ProductImages from '../components/ProductImages'
import CustomizeProducts from '../components/CustomizeProducts'
import Add from '../components/Add'

export default function SinglePage() {
  return (
    <div className='px-4 md:px-8 lg:px-16 2xl:px-64 relative flex flex-col lg:flex-row gap-16'>
      {/* img  */}
      <div className='w-full lg:w-1/2 lg:sticky top-20 h-max'>
        <ProductImages />
      </div>
      {/* text  */}
      <div className='w-full lg:w-1/2 flex flex-col gap-6'>
      <h1 className="text-4xl font-medium">Product Details</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos atque quibusdam magni optio quia suscipit exercitationem, impedit error rerum quis praesentium temporibus minima, maxime ipsum mollitia, repellat incidunt autem magnam.</p>
      
      <div className='h-[2px] bg-gray-100'></div>
      <div className='flex items-center gap-4'>
        <h3 className='text-xl text-gray-500 line-through'>50</h3>
        <h3 className='font-medium text-2xl'>60</h3>
      </div>
      <div className='h-[2px] bg-gray-100'></div>
      <div className='text-sm'>
        <h4 className='font-medium mb-4'>Title</h4>
        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, nam veritatis tempore rerum autem nostrum in aliquam vitae libero, quis iusto delectus sapiente corrupti amet laudantium dignissimos ex officia possimus!</p>
      </div><div className='text-sm'>
        <h4 className='font-medium mb-4'>Title</h4>
        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, nam veritatis tempore rerum autem nostrum in aliquam vitae libero, quis iusto delectus sapiente corrupti amet laudantium dignissimos ex officia possimus!</p>
      </div><div className='text-sm'>
        <h4 className='font-medium mb-4'>Title</h4>
        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, nam veritatis tempore rerum autem nostrum in aliquam vitae libero, quis iusto delectus sapiente corrupti amet laudantium dignissimos ex officia possimus!</p>
      </div>

      <CustomizeProducts />
      <Add />
      </div>

    </div>
  )
}
