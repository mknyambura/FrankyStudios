import React from 'react'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'


import '../../components/LandingPage/LandingPage.scss'
import Body from '../Body/Body'


function LandingPage() {
  return (
    <div className='text-white'>
      <div className='bg h-[150vh]'>  
        <Header className='m-16'/>
        <div className='flex flex-col'>
          <div className='flex flex-col items-center gap-8'>
            <h1 className='text-7xl font-bold mt-20'>Build Your Brand's Voice</h1>
            <p className='text-2xl text-slate-300 mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit!</p>
            <div className='flex flex-row gap-24 items-center m-8'>
              <button className='bg-[#F97A33] rounded-xl px-14 py-4 text-xl font-semibold'>Frankys Studio</button>
              <button className='bg-[#9b05c9] rounded-xl px-14 py-4 text-xl font-semibold'>Artist Booking</button>
            </div>
          </div>
        </div>
      </div>

      <Body/>
      <Footer/>
    </div>
  )
}

export default LandingPage