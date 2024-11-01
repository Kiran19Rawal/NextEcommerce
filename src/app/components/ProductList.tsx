import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProductList() {
  return (
    <div className="flex gap-x-10 gap-y-16 justify-between flex-wrap">
      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
      <div className="relative w-full h-80">
        <Image
          src="https://images.pexels.com/photos/25935100/pexels-photo-25935100/free-photo-of-work-coffee.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
          sizes="25vw"
          className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          ></Image>
        <Image
          src="https://images.pexels.com/photos/23503919/pexels-photo-23503919/free-photo-of-palm-trees-in-the-background-of-a-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
          sizes="25vw"
          className="absolute object-cover rounded-md "
          ></Image>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Computer</span>
            <span className="font-semibold">Rs. 3000</span>
          </div>
          <div className="text-sm text-gray-500">descriptoin</div>
          <button className="rounded-2xl ring-1 ring-base text-base hover:bg-base hover:text-white w-max px-2">Add to cart</button>
      </Link>

      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
      <div className="relative w-full h-80">
        <Image
          src="https://images.pexels.com/photos/25935100/pexels-photo-25935100/free-photo-of-work-coffee.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
          sizes="25vw"
          className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          ></Image>
        <Image
          src="https://images.pexels.com/photos/23503919/pexels-photo-23503919/free-photo-of-palm-trees-in-the-background-of-a-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
          sizes="25vw"
          className="absolute object-cover rounded-md "
          ></Image>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">ssssss product.name</span>
            <span className="font-semibold">aaaaaaaaaa product.price?.price</span>
          </div>
          <div className="text-sm text-gray-500">descriptoin</div>
          <button className="rounded-2xl ring-1 ring-base text-base hover:bg-base hover:text-white w-max px-2">Add to cart</button>
      </Link>

      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
      <div className="relative w-full h-80">
        <Image
          src="https://images.pexels.com/photos/25935100/pexels-photo-25935100/free-photo-of-work-coffee.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
          sizes="25vw"
          className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          ></Image>
        <Image
          src="https://images.pexels.com/photos/23503919/pexels-photo-23503919/free-photo-of-palm-trees-in-the-background-of-a-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
          sizes="25vw"
          className="absolute object-cover rounded-md "
          ></Image>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">ssssss product.name</span>
            <span className="font-semibold">aaaaaaaaaa product.price?.price</span>
          </div>
          <div className="text-sm text-gray-500">descriptoin</div>
          <button className="rounded-2xl ring-1 ring-base text-base hover:bg-base hover:text-white w-max px-2">Add to cart</button>
      </Link>

      <Link href="/test" className="w-full flex flex-col gap-1 sm:w-[45%] lg:w-[22%]">
      <div className="relative w-full h-80">
        <Image
          src="https://images.pexels.com/photos/25935100/pexels-photo-25935100/free-photo-of-work-coffee.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
          sizes="25vw"
          className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          ></Image>
        <Image
          src="https://images.pexels.com/photos/23503919/pexels-photo-23503919/free-photo-of-palm-trees-in-the-background-of-a-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
          sizes="25vw"
          className="absolute object-cover rounded-md "
          ></Image>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">ssssss product.name</span>
            <span className="font-semibold">aaaaaaaaaa product.price?.price</span>
          </div>
          <div className="text-sm text-gray-500">descriptoin</div>
          <button className="rounded-2xl ring-1 ring-base text-base hover:bg-base hover:text-white w-max px-2">Add to cart</button>
      </Link>
    </div>
  );
}
