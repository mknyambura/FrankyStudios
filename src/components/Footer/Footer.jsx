import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div>
      <div className='text-black flex sm:flex-col lg:flex-row justify-between lg:items-center m-16 gap-8'>
        <div className='flex flex-col gap-2 w-[30%] items-center justify-center'>
          <Link to='/' className='font-semibold text-3xl mb-8'><span className='text-[#F97A33]'>Franky </span>Studio.</Link>
          <p className='text-slate-500'>We would love to hear from you!</p>
          <p className='font-bold text-xl'>support@email.com</p>
          <div className='flex flex-row gap-8'>
            <BsFacebook/>
            <BsTwitter/>
            <BsInstagram/>
            <BsLinkedin/>
          </div>
        </div>

        <div className='flex sm:flex-col md:flex-col lg:flex-row gap-8 w-[70%] justify-evenly'>
          <div className='flex flex-col gap-4'>
            <h1 className='font-bold text-xl'>About us</h1>
            <Link to='/' className='hover:text-[#F97A33] hover:cursor-pointer hover:underline text-slate-400'>Home</Link>
            <h1 className='hover:text-[#F97A33] hover:cursor-pointer hover:underline text-slate-400'>How it Works</h1>
            <h1 className='hover:text-[#F97A33] hover:cursor-pointer hover:underline text-slate-400'>For Brands</h1>
            <h1 className='hover:text-[#F97A33] hover:cursor-pointer hover:underline text-slate-400'>Help & Support</h1>
          </div>

          <div className='flex flex-col gap-4'>
            <h1 className='font-bold text-xl'>Legal</h1>
            <h1 className='hover:text-[#F97A33] hover:cursor-pointer hover:underline text-slate-400'>Privacy Policy</h1>
            <h1 className='hover:text-[#F97A33] hover:cursor-pointer hover:underline text-slate-400'>Terms of Use</h1>
          </div>

          <div className='flex flex-col gap-4'>
            <h1 className='font-bold text-xl'>About us</h1>
            <h1 className='hover:text-[#F97A33] hover:cursor-pointer hover:underline text-slate-400'>Home</h1>
            <h1 className='hover:text-[#F97A33] hover:cursor-pointer hover:underline text-slate-400'>How it Works</h1>
            <h1 className='hover:text-[#F97A33] hover:cursor-pointer hover:underline text-slate-400'>For Brands</h1>
            <h1 className='hover:text-[#F97A33] hover:cursor-pointer hover:underline text-slate-400'>Help & Support</h1>
          </div>
        </div>

      </div>
      <div className='flex flex-col items-center text-black gap-8 m-16'>
        <div className='bg-slate-400 h-[1px] w-[80%]'></div>
        <p className='text-slate-600'>Copyright, ©2023 All rights reserved </p>
      </div>
    </div>
  )
}

export default Footer