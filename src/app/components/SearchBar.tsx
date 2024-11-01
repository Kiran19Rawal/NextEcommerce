'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

export default function SearchBar() {

  const router= useRouter();

    const handleSearch=(e: React.FormEvent<HTMLFormElement>)=> {
      e.preventDefault();
      const formData=new FormData(e.currentTarget);
      const name=formData.get("name") as string;
      if(name){
        router.push(`/list?name=${name}`)
      }
    }


  return (
        <form className='flex  items-center justify-center bg-gray-100 gap-4 p-2 rounded-md flex-1 ' onSubmit={handleSearch}>
            <input type='text' name='name' placeholder='search' className='flex-1 bg-transparent outline-none'></input>
            <button className='cursor-pointer'>
                <Image src="/search.png" alt="search" width={16} height={16}></Image>
            </button>
        </form>
  )
}
