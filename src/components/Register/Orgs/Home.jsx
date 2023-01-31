import React from 'react'

import Logo from '../../img/logo.svg'
import Footer from '../../Footer/Home'

function Home() {
  return (
    <div className="">
      <img className='m-10 h-[130px] w-[200px]' src={Logo} alt="Logo" />


      <div>
        <h1 className="relative font-cadetbold text-red text-center text-[48px]">SIGN UP</h1>

        <div className='relative flex justify-center space-x-20 mb-5'>

          {/* Name */}

          <label htmlFor="name" className='font-poppins text-[20px] text-red'>
            Name <br/>
            <input type="text" className='text-slate-800 text-sm p-3 w-[260px] border-[1px] rounded-[10px] border-black border-opacity-50 bg-grey bg-opacity-50' name="email" id="email" />
          </label>

          <label htmlFor="email" className='font-poppins text-[20px] text-red'>
            Email <br/>
            <input type="email" className='text-slate-800 text-sm p-3 w-[260px] border-[1px] rounded-[10px] border-black border-opacity-50 bg-grey bg-opacity-50' name="email" id="email" />
          </label>
        </div>

        {/* <br /> */}

        <div className='relative flex justify-center space-x-20 mb-5'>
          <label htmlFor="password" className='font-poppins text-[20px] text-red'>
            Password <br/>
            <input type="password" className='text-slate-800 text-sm p-3 w-[260px] border-[1px] rounded-[10px] border-black border-opacity-50 bg-grey bg-opacity-50' name="password" id="password" />
          </label>

          <label htmlFor="password" className='font-poppins text-[20px] text-red'>
            Re-Enter Password <br/>
            <input type="password" className='text-slate-800 text-sm p-3 w-[260px] border-[1px] rounded-[10px] border-black border-opacity-50 bg-grey bg-opacity-50' name="password" id="password" />
          </label>
        </div>

        <div className='relative flex justify-center space-x-20 mb-5'>

          {/* Contact */}

          <label htmlFor="name" className='font-poppins text-[20px] text-red'>
            Contact <br/>
            <input type="text" className='text-slate-800 text-sm p-3 w-[260px] border-[1px] rounded-[10px] border-black border-opacity-50 bg-grey bg-opacity-50' name="contact" id="contact" />
          </label>

          <label htmlFor="email" className='font-poppins text-[20px] text-red'>
            Address <br/>
            <input type="text" className='text-slate-800 text-sm p-3 w-[260px] border-[1px] rounded-[10px] border-black border-opacity-50 bg-grey bg-opacity-50' name="email" id="email" />
          </label>
        </div>

        <div className='relative flex justify-center space-x-2 font-poppins mb-5'>
          <input type="checkbox" name="t&c" className='mt-1 w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300' required/>
          <label htmlFor="t&c">
                   I have read and accept the <a href="/" className='text-blue-500 underline underline-offset-2'>Terms & Conditions</a>
          </label>  
        </div>

        <div className='relative top-2 flex justify-center mt-1'>
          <input className='bg-red text-white font-poppins text-[14px] py-2 px-10 rounded-md' type="submit" value='Signup'/>
        </div>

        <div>
        </div>
      </div>

      <div className='top-20'>
            <Footer />
      </div>
    </div>
  )
}

export default Home