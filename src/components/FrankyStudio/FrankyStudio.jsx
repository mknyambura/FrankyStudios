import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import '../../components/FrankyStudio/FrankyStudio.scss'
import Body from '../Body/Body'
import { Link } from 'react-router-dom'


function FrankyStudio() {
  return (
    <div className='text-black'>
      <div className='bg-1 sm:h-[100vh] lg:h-[150vh]'>  
        <Header className='m-16'/>
        <div className='flex flex-col'>
          <div className='flex flex-col items-center gap-8'>
            <h1 className='sm:text-6xl md:text-5xl lg:text-7xl font-bold mt-20'>Frankys Studio Page</h1>
            <p className='text-2xl text-slate-400 mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit!</p>
            <div className='flex flex-row gap-12 items-center m-8'>
              <Link to='#'>
                <button className='bg-[#F97A33] rounded-xl px-14 py-4 text-xl font-semibold'>Frankys Studio</button>
              </Link>
              <Link to='/artists'>
                <button className='bg-[#9b05c9] rounded-xl px-14 py-4 text-xl font-semibold'>Artist Booking</button>
              </Link>
              <Link to='/artists'>
                <button className='bg-[#262227] rounded-xl px-14 py-4 text-xl font-semibold'><a href="#influencers" className='no-underline'>Influencer</a></button>
              </Link>

            </div>
          </div>
        </div>
      </div>
      <Body/>
      <Footer/>
    </div>
  )
}

export default FrankyStudio