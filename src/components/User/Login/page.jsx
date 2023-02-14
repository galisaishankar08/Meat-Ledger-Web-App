import React from 'react'

import Logo from '../../Images/logo.svg'
import Footer from '../../Footer/Home'

function page() {
  return (
    <div className="">
      <img className='mx-10 my-10 h-[130px] w-[200px]' src={Logo} alt="Logo" />


      <div>
        <h1 className="font-cadetbold text-red text-center text-[48px]">LOGIN</h1>

        <div className='flex justify-center'>
          <label htmlFor="email" className='font-poppins text-[20px] text-red'>
            Email <br/>
            <input type="email" className='text-black p-1 border-[1px] rounded-[10px] border-red border-opacity-50 bg-grey bg-opacity-50' name="email" id="email" />
            </label>
        </div>

        {/* <br /> */}

        <div className='flex justify-center'>
          <label htmlFor="password" className='font-poppins text-[20px] text-red'>
            Password <br/>
            <input type="password" className='text-black p-1 border-[1px] rounded-[10px] border-red border-opacity-50 bg-grey bg-opacity-50' name="password" id="password" />
            </label>
        </div>

        <div className='flex justify-center'>
          <a href="/" className='text-[15px] text-red font-poppins'>Forgot Password?</a>
        </div>

        <div className='flex justify-center mt-1'>
          <input className='bg-red text-white font-poppins text-[14px] py-2 px-10 rounded-md' type="submit" value='Login'/>
        </div>

        <div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default page