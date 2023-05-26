import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import '../../components/ArtistPage/ArtistPage.scss'
import { BsFillSendCheckFill } from 'react-icons/bs'


function ArtistPage() {
  return (
    <div className='text-black'>
        <div className='bg-2 h-[150vh]'>  
          <Header className='m-16'/>
          <div className='flex flex-col'>
            <div className='flex flex-col items-center gap-8'>
              <h1 className='text-7xl font-bold mt-20'>Artists Page</h1>
              <p className='text-2xl text-slate-400 mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit!</p>
              <div className='flex flex-row gap-24 items-center m-8 text-white'>
                <button className='bg-[#F97A33] rounded-xl px-14 py-4 text-xl font-semibold'>Musicians</button>
                <button className='bg-[#9b05c9] rounded-xl px-14 py-4 text-xl font-semibold'>Artist</button>
                <button className='bg-[#262227] rounded-xl px-14 py-4 text-xl font-semibold'>Influencer</button>
              </div>
            </div>
          </div>
        </div>

        <div>
            <div>
                <div className='flex flex-row justify-between'>
                    <h1 className='font-bold text-7xl'>Musicians</h1>
                    <button className='bg-[#f97a33] rounded-md flex flex-row gap-4 items-center px-6 py-2 text-white'>
                        <BsFillSendCheckFill/>
                            Get in Touch
                    </button>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
      <Footer/>
    </div>
  )
}

export default ArtistPage