import Image from "next/image";
import React from "react";

export default function CartModel() {
  const cartItems = true;

  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div className="">Cart is empty</div>
      ) : (
        <>
        <h2 className="text-xl">Shopping cart</h2>
          {/* // list */}
          <div className="flex flex-col gap-8">
            {/* item  */}

            <div className="flex gap-4">
              <Image
                src="https://images.pexels.com/photos/25935100/pexels-photo-25935100/free-photo-of-work-coffee.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="">
                {/* top */}
                <div className="">
                  {/* title  */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">s333</div>
                  </div>
                  {/* description */}
                  <div className="text-sm text-gray-500">available</div>
                </div>
                {/* bottom */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div><div className="flex gap-4">
              <Image
                src="https://images.pexels.com/photos/25935100/pexels-photo-25935100/free-photo-of-work-coffee.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="">
                {/* top */}
                <div className="">
                  {/* title  */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">s333</div>
                  </div>
                  {/* description */}
                  <div className="text-sm text-gray-500">available</div>
                </div>
                {/* bottom */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
          </div>
          {/* //   bottom  */}
          <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span>Subtotal</span>
              <span>$49</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            </p>
            <div className="flex justify-between text-sm">
                <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">View Cart</button>
                <button className="">Checkout</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
