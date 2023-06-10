import React, { useEffect, useState } from 'react'

import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import { useTranslation } from 'react-i18next';

import '../Header/Header.scss'

import { FaBars, FaTimes } from 'react-icons/fa'

import { MdPhoneInTalk } from 'react-icons/md'
import { SlArrowDown } from 'react-icons/sl'

import Phone from '../../images/phone-ringing-520.png'
import { Link } from 'react-router-dom';

function Header() {

  const [open, setOpen] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  
  const handleclick =() => {
    setOpen(!open)
  }
  
  return (
    <div className='bg-transparent flex flex-row items-center justify-between text-slate-400' >
      <div className='lg:flex mg:flex-row justify-between items-center py-12'>
        <div className='font-bold text-3xl sm:px-16'>
          <span className='text-[#F97A33]'>Franky </span>Studio.
        </div>
        <div className='absolute right-8 top-[5%] lg:hidden' onClick={handleclick}>
          {
            open ?  <FaBars className='text-[#FF723A] text-3xl'/> : <FaTimes className='text-[#FF723A] text-3xl'/>
          }
        </div>
        <ul className={`sm:w-full md:w-full lg:w-auto sm:z-10 md:z-10 z-[-1] sm:absolute md:absolute lg:static sm:py-6 sm:px-6 sm:mb-6 sm:mt-6 md:py-6 md:px-6 md:mb-6 md:mt-6 sm:bg-[#FF723A] md:bg-[#FF723A] sm:text-white md:text-white lg:bg-transparent flex sm:flex-col md:flex-col lg:flex-row gap-4 items-center ${open ? "top-[-1090px]": "top-auto"}`}>
          <li className='opacity-70 hover:font-bold active:text-[#FF723A] active:underline hover:cursor-pointer'>
            <a href="/">Home</a>
          </li>
          <li className='opacity-70 hover:font-bold active:text-[#FF723A] active:underline hover:cursor-pointer'>
            <a href="/frankys-studio">Frankys Studio</a>
          </li>
          <li className='opacity-70 hover:font-bold active:text-[#FF723A] active:underline hover:cursor-pointer'>
            <a href="/artists">Artists</a>
          </li>
          <li className='opacity-70 hover:font-bold active:text-[#FF723A] active:underline hover:cursor-pointer'>
            <a href="/about-us">About Us</a>
          </li>
          
          <div className='flex flex-row gap-4 m-16 text-md'>        
            <Dropdown >
              <Dropdown.Toggle className=' flex flex-row items-center gap-4' variant="success" id="dropdown-basic">
                Select Language 
                <SlArrowDown width={30} className='active:text-[#F97A33]'/>
              </Dropdown.Toggle>

              <Dropdown.Menu className='flex flex-col'>
                <Dropdown.Item href="#/english" className='hover:text-[#F97A33] cursor-pointer'>English</Dropdown.Item>
                <Dropdown.Item href="#/french" className='hover:text-[#F97A33] cursor-pointer'>French</Dropdown.Item>
                <Dropdown.Item href="#/german" className='hover:text-[#F97A33] cursor-pointer'>German</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <button className='flex flex-row gap-4 border bg-slate-800 hover:bg-[#F97A33] hover:text-white border-slate-600 px-2 py-2 rounded-md items-center'>
              <MdPhoneInTalk/>
              +321 8765 432
            </button>

          </div>
        </ul>
      </div>
    </div>
    
  )
}

export default Header