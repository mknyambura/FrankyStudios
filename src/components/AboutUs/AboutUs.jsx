import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

import Body from '../Body/Body'
import '../AboutUs/AboutUs.scss'

function AboutUs() {
  return (
    <div className='text-black'>
      <div className='bg-3 h-[85vh]'>  
        <Header className='m-16'/>
        <div className='flex flex-col'>
          <div className='flex flex-col items-center gap-8'>
            <h1 className='text-7xl font-bold mt-20'>About Us</h1>
          </div>
        </div>
      </div>

      <Body/>
      <Footer/>
    </div>
  )
}

export default AboutUs