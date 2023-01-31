import React from 'react'

function Footer() {
  return (
    <>
      
      <div className='bg-red w-full p-5 mt-[97px]'>
        <div>
          <ul className='flex pb-3 text-[15px] justify-center text-white font-poppins space-x-12'>
            <li className='hover:text-red-500'><a href="/about">About Us</a></li>
            <li className='hover:text-red-500'><a href="/about">Policies</a></li>
            <li className='hover:text-red-500'><a href="/about">Terms&Conditions</a></li>
            <li className='hover:text-red-500'><a href="/about">Enquries</a></li>
          </ul>
        </div>

        <div className='flex justify-center text-[20px] font-poppins text-white'>
          <p>© 2022-2023, MLedger.com, Inc. or its affiliates</p>
        </div>
      </div>
    </>
  )
}

export default Footer