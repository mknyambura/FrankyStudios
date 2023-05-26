import React, { useEffect } from 'react'

import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import { useTranslation } from 'react-i18next';

import '../Header/Header.scss'

import { MdPhoneInTalk } from 'react-icons/md'
import { SlArrowDown } from 'react-icons/sl'

import Phone from '../../images/phone-ringing-520.png'
import { Link } from 'react-router-dom';

function Header() {
 
  
  return (
    <div className='bg-transparent flex flex-row items-center justify-between text-slate-400' >
      <h1 className='font-semibold text-3xl m-16'><span className='text-[#F97A33]'>Franky </span>Studio.</h1>
      <div className='flex flex-row gap-8 m-16 text-xl'>
        <Link to='/' className='text-[#F97A33]'>Home</Link>
        <Link to='/frankys-studio' id='home' className='hover:text-[#F97A33]'>Franky's Studio</Link>
        <Link to='/artists' className='hover:text-[#F97A33]'>Artist Booking</Link>
        <h1 className='hover:text-[#F97A33]'>About Us</h1>
      </div>
      <div className='flex flex-row gap-4 m-16 text-md'>        
        <Dropdown >
          <Dropdown.Toggle className='hover:text-[#F97A33] flex flex-row items-center gap-4' variant="success" id="dropdown-basic">
            Select Language 
            <SlArrowDown width={30}/>
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
    </div>
    
  )
}

export default Header