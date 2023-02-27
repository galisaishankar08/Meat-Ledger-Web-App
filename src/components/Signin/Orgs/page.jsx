import React, { useState } from 'react'
import { useLocation } from "react-router-dom";
import Axios from 'axios';

import Logo from '../../Images/logo.svg'
import Meat from '../../Images/Meat.mp4'

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function Page({setAuthenticated}) {
  const [usertype, setUsertype] = useState('');
  const { pathname } = useLocation();
  const p = pathname.slice(1, 2);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailLabel, setEmailLabel] = useState('Email');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if (!emailPattern.test(event.target.value)) {
      setEmailLabel('Email Invalid');
    } else {
      setEmailLabel('Email');
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleClick = () => {
    let relink = '';
    if(p==='h'){
      relink = '/herdsman/signup';
    }
    else if(p==='s'){
      relink = '/slaughter/signup';
    }
    else{
      relink = '/retailer/signup';
    }
    window.location.href = relink;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(p==='h'){
      setUsertype('herdsman');
    }
    else if(p==='s'){
      setUsertype('slaughter');
    }
    else{
      setUsertype('retailer');
    }

    Axios.post("http://localhost:3001/server/orgs/signin", {
        email: email,
        password: password,
      })
        .then((response) => {
            console.log(response);
            setAuthenticated(true);
            const relink = '/'+response.data.user.usertype;
            console.log(relink);
            localStorage.setItem(relink, JSON.stringify(response.data.user));
            window.location.href = relink;
        }, (error) => {
            console.log(error.response.data);
        });
  }
  return (
    <div className="">
      <img className='mx-10 my-10 h-[130px] w-[200px]' src={Logo} alt="Logo" />

      <div className='flex m-auto justify-center px-[300px]'>
        <video autoPlay loop muted width="320" height="240" src={Meat} className='flex-1 object-cover rounded-l-lg'/>

        <form onSubmit={handleSubmit} className='bg-white  flex-1 rounded-r-lg p-10 pt-7 m-auto shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)]'>
          <h1 className="relative font-cadetbold text-red text-center text-[48px]">LOGIN</h1>

          <div className='flex justify-center mb-3'>
            <label className={emailLabel === 'Email' ? 'text-black font-poppins text-[16px]' : 'text-red font-poppins text-[16px]'}>
              Email <br/>
              <input type="email" name="email" onChange={handleEmailChange} className={emailLabel === 'Email' ? 'text-slate-800 text-base p-3 w-[260px] border-b-2 rounded-[5px] outline-none border-black bg-slate-600 bg-opacity-10 hover:border-[2px]' : 'text-slate-800 text-base p-3 w-[260px] border-b-2 rounded-[7px] border-red bg-slate-600 bg-opacity-10 focus:outline-red hover:border-[2px]'}/>
              </label>
          </div>

          {/* <br /> */}

          <div className='flex justify-center mb-3'>
            <label className='font-poppins text-[16px] text-black'>
              Password <br/>
              <input type="password" name="password" onChange={handlePasswordChange} value={password} className='text-slate-800 text-base p-3 w-[260px] border-b-2 rounded-[5px] outline-none border-black bg-slate-600 bg-opacity-10 hover:border-[2px]'/>
              </label>
          </div>

          <div className='flex justify-end mb-2'>
            <a href="/" className='text-[15px] text-red font-poppins font-bold underline hover:font-normal'>Forgot Password?</a>
          </div>

          <div className='flex justify-center mb-3'>
            <input className='bg-red text-white font-poppins text-[14px] py-2 px-10 rounded-md shadow-md shadow-slate-500 hover:scale-110' type="submit" value='Login'/>
          </div>

          <div className='flex justify-center'>
            <p className='text-[15px] font-poppins'>Not registered yet? </p><p onClick={handleClick} className='text-[15px] text-red font-poppins font-bold underline ml-1 hover:font-normal cursor-pointer'>Create an Account</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Page