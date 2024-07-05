import React from 'react'
import { Link } from 'react-router-dom'

function Cart() {
  return (
    <>
        <div className="mx-auto max-w-7xl px-2 lg:px-0">
  <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      Shopping Cart
    </h1>
    <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
      <section
        aria-labelledby="cart-heading"
        className="rounded-lg bg-white lg:col-span-8"
      >
        <h2 id="cart-heading" className="sr-only">
          Items in your shopping cart
        </h2>
        <ul role="list" className="divide-y divide-gray-200">
          <div className="">
            <li className="flex py-6 sm:py-6 ">
              <div className="flex-shrink-0">
                <img
                  src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/54a510de-a406-41b2-8d62-7f8c587c9a7e/air-force-1-07-lv8-shoes-9KwrSk.png"
                  alt="Nike Air Force 1 07 LV8"
                  className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
                />
              </div>
              <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                  <div>
                    <div className="flex justify-between">
                      <h3 className="text-sm">
                        <Link to="#" className="font-semibold text-black">
                          Nike Air Force 1 07 LV8
                        </Link>
                      </h3>
                    </div>
                    <div className="mt-1 flex text-sm">
                      <p className="text-sm text-gray-500">Orange</p>
                      <p className="ml-4 border-l border-gray-200 pl-4 text-sm text-gray-500">
                        8 UK
                      </p>
                    </div>
                    <div className="mt-1 flex items-end">
                      <p className="text-xs font-medium text-gray-500 line-through">
                        ₹48,900
                      </p>
                      <p className="text-sm font-medium text-gray-900">  ₹47,199</p>
                        <p className="text-sm font-medium text-green-500">5% Off</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <div className="mb-2 flex">
              <div className="min-w-24 flex">
                <button type="button" className="h-7 w-7">
                  -
                </button>
                <input
                  type="text"
                  className="mx-1 h-7 w-9 rounded-md border text-center"
                  value="1"
                />
                <button
                  type="button"
                  className="flex h-7 w-7 items-center justify-center"
                >
                  +
                </button>
              </div>
              <div className="ml-6 flex text-sm">
                <button
                  type="button"
                  className="flex items-center space-x-1 px-2 py-1 pl-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="text-red-500"
                  >
                    <path d="M3 6h18"></path>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                  </svg>
                  <span className="text-xs font-medium text-red-500">Remove</span>
                </button>
              </div>
            </div>
          </div>
         
       
        </ul>
      </section>
      <section
        aria-labelledby="summary-heading"
        className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0"
      >
        <h2
          id="summary-heading"
          className=" border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
        >
          Price Details
        </h2>
        <div>
          <dl className=" space-y-1 px-2 py-4">
            <div className="flex items-center justify-between">
              <dt className="text-sm text-gray-800">Price (3 item)</dt>
              <dd className="text-sm font-medium text-gray-900">₹ 52,398</dd>
            </div>
            <div className="flex items-center justify-between pt-4">
              <dt className="flex items-center text-sm text-gray-800">
                <span>Discount</span>
              </dt>
              <dd className="text-sm font-medium text-green-700">- ₹ 3,431</dd>
            </div>
            <div className="flex items-center justify-between py-4">
              <dt className="flex text-sm text-gray-800">
                <span>Delivery Charges</span>
              </dt>
              <dd className="text-sm font-medium text-green-700">Free</dd>
            </div>
            <div className="flex items-center justify-between border-y border-dashed py-4 ">
              <dt className="text-base font-medium text-gray-900">Total Amount</dt>
              <dd className="text-base font-medium text-gray-900">₹ 48,967</dd>
            </div>
          </dl>
          <div className="px-2 pb-4 font-medium text-green-700">
            You will save ₹ 3,431 on this order
          </div>
        </div>
      </section>
    </form>
  </div>
</div>
    </>
  )
}

export default Cart
