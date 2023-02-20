import React, { useState } from 'react'
import { useLocation } from "react-router-dom";
import Axios from 'axios';

import Logo from '../../Images/logo.svg'
import Meat from '../../Images/meat.jpg'

const namePattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
const contactPattern = /^\d{10}$/;
const addressPattern = /^[a-zA-Z0-9\s,'-]*$/;

function Page() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRePassword] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');

  const [flag, setFlag] = useState(false);

  const [nameLabel, setNameLabel] = useState('Name');
  const [emailLabel, setEmailLabel] = useState('Email');
  const [passwordLabel, setPasswordLabel] = useState('Password');
  const [repasswordLabel, setRePasswordLabel] = useState('Re-Enter Password');
  const [contactLabel, setContactLabel] = useState('Contact');
  const [addressLabel, setAddressLabel] = useState('Address');

  const [usertype, setUsertype] = useState('');
  const { pathname } = useLocation();
  const p = pathname.slice(1, 2);

  const handleNameChange = (event) => {
    setName(event.target.value);
    if (!namePattern.test(event.target.value)) {
      setNameLabel('Name Invalid');
    } else {
      setNameLabel('Name');
    }
  };

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
    if (!passwordPattern.test(event.target.value)) {
      setPasswordLabel('Password Invalid');
    } else {
      setPasswordLabel('Password');
    }
  };

  const handleRePasswordChange = (event) => {
    setRePassword(event.target.value);
    if (password !== event.target.value) {
      setRePasswordLabel('Password not matched');
    } else {
      setRePasswordLabel('Re-Enter Password');
    }
  };

  const handleContactChange = (event) => {
    setContact(event.target.value);
    if (!contactPattern.test(event.target.value)) {
      setContactLabel('Contact Invalid');
    } else {
      setContactLabel('Contact');
    }
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
    if (!addressPattern.test(event.target.value)) {
      setAddressLabel('Address Invalid');
    } else {
      setAddressLabel('Address');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(name !=='' && email !== '' && password !== '' && repassword !=='' && contact !== '' && address !== '') {
      if( namePattern.test(name) && emailPattern.test(email) && passwordPattern.test(password) && repassword === password && contactPattern.test(contact) && addressPattern.test(address)){
        setFlag(true);
      }
      else{
        setFlag(false);
      }
    }else{
      setFlag(false);
    }

    if(p==='h'){
      setUsertype('herdsman');
    }
    else if(p==='s'){
      setUsertype('slaughter');
    }
    else{
      setUsertype('retailer');
    }

    if(flag===true){
      const refdata = new FormData(e.target);
      const data = Object.fromEntries(refdata.entries());

      console.log(data);
   
      Axios.post("http://localhost:3001/orgs/signup/new", {
        name: data.name,
        email: data.email,
        password: data.password,
        contact: data.contact,
        address: data.address,
        usertype: usertype,
      })
        .then((response) => {
            console.log(response);
            window.location.href("/"+usertype+"/signin");
        }, (error) => {
            console.log(error.response.data);
        });
    }
  };
  
  return (
    <>
    <div className="">
      <img className='m-10 h-[130px] w-[200px]' src={Logo} alt="Logo" />
      <div className='flex m-auto justify-center px-[300px]'>
        <img src={Meat} alt="Meat" className='flex-1 object-cover h-[503px] shadow-2xl rounded-l-lg'/>
     
      <form onSubmit={handleSubmit} className='bg-white  flex-1 rounded-r-lg p-10 pt-7 m-auto shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)]'>
        <h1 className="relative font-cadetbold text-red text-center text-[48px]">SIGN UP</h1>

        <div className='relative flex justify-center space-x-10 mb-5'>

          {/* Name */}

          <label className={nameLabel === 'Name' ? 'text-black font-poppins text-[16px]' : 'text-red font-poppins text-[16px]'}>
            {nameLabel} <br />
            <input type="text" name='name' onChange={handleNameChange} value={name} className={nameLabel === 'Name' ? 'text-slate-800 text-base p-3  border-b-2 rounded-[5px] outline-none border-black bg-slate-600 bg-opacity-10 hover:border-[3px]' : 'text-slate-800 text-base p-3 w-[260px] border-b-2 rounded-[7px] border-red bg-slate-600 bg-opacity-10 focus:outline-red hover:border-[2px]'} />
          </label>

          <label className={emailLabel === 'Email' ? 'text-black font-poppins text-[16px]' : 'text-red font-poppins text-[16px]'}>
             {emailLabel} <br />
            <input type="email" name="email" onChange={handleEmailChange} value={email} className={emailLabel === 'Email' ? 'text-slate-800 text-base p-3  border-b-2 rounded-[5px] outline-none border-black bg-slate-600 bg-opacity-10 hover:border-[3px]' : 'text-slate-800 text-base p-3 w-[260px] border-b-2 rounded-[7px] border-red bg-slate-600 bg-opacity-10 focus:outline-red hover:border-[2px]'} />
          </label>
        </div>

        {/* <br /> */}

        <div className='relative flex justify-center space-x-10 mb-5'>
          <label className={passwordLabel === 'Password' ? 'text-black font-poppins text-[16px]' : 'text-red font-poppins text-[16px]'}>
            {passwordLabel} <br/>
            <input type="password" name="password" onChange={handlePasswordChange} value={password} className={passwordLabel === 'Password' ? 'text-slate-800 text-base p-3  border-b-2 rounded-[5px] outline-none border-black bg-slate-600 bg-opacity-10 hover:border-[3px]' : 'text-slate-800 text-base p-3 w-[260px] border-b-2 rounded-[7px] border-red bg-slate-600 bg-opacity-10 focus:outline-red hover:border-[2px]'} />
          </label>

          <label className={repasswordLabel === 'Re-Enter Password' ? 'text-black font-poppins text-[16px]' : 'text-red font-poppins text-[20px]'}>
            {repasswordLabel} <br/>
            <input type="password" onChange={handleRePasswordChange} value={repassword} className={repasswordLabel === 'Re-Enter Password' ? 'text-slate-800 text-base p-3 border-b-2 rounded-[5px] outline-none border-black bg-slate-600 bg-opacity-10 hover:border-[3px]' : 'text-slate-800 text-base p-3 w-[260px] border-b-2 rounded-[7px] border-red bg-slate-600 bg-opacity-10 focus:outline-red hover:border-[2px]'} />
          </label>
        </div>

        <div className='relative flex justify-center space-x-10 mb-5'>

          {/* Contact */}

          <label className={contactLabel === 'Contact' ? 'text-black font-poppins text-[16px]' : 'text-red font-poppins text-[16px]'}>
            {contactLabel} <br/>
            <input type="text" name="contact" onChange={handleContactChange} value={contact} className={contactLabel === 'Contact' ? 'text-slate-800 text-base p-3 border-b-2 rounded-[5px] outline-none border-black bg-slate-600 bg-opacity-10 hover:border-[3px]' : 'text-slate-800 text-base p-3 w-[260px] border-b-2 rounded-[7px] border-red bg-slate-600 bg-opacity-10 focus:outline-red hover:border-[2px]'} />
          </label>

          <label className={addressLabel === 'Address' ? 'text-black font-poppins text-[16px]' : 'text-red font-poppins text-[16px]'}>
            {addressLabel} <br/>
            <input type="text" name="address" onChange={handleAddressChange} value={address} className={addressLabel === 'Address' ? 'text-slate-800 text-base p-3 border-b-2 rounded-[5px] outline-none border-black bg-slate-600 bg-opacity-10 hover:border-[3px]' : 'text-slate-800 text-base p-3 w-[260px] border-b-2 rounded-[7px] border-red bg-slate-600 bg-opacity-10 focus:outline-red hover:border-[2px]'} />
          </label>
        </div>

        <div className='relative flex justify-center space-x-2 font-poppins mb-5'>
          <input type="checkbox" name="checked" className='mt-1 w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300' required/>
          <label htmlFor="t&c">
                   I have read and accept the <a href="/" className='text-red font-bold underline underline-offset-2'>Terms & Conditions</a>
          </label>  
        </div>

        <div className='relative top-2 flex justify-center mt-1'>
          <input className='bg-red text-white font-poppins text-[14px] py-2 px-10 rounded-md shadow-lg shadow-slate-500 hover:scale-110' type="submit" value='Signup'/>
        </div>
      </form>

      </div>
     
    </div>
    </>
  )
}

export default Page