import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import '../../components/ArtistPage/ArtistPage.scss'
import { BsEnvelopeFill, BsFillSendCheckFill, BsFillVolumeUpFill } from 'react-icons/bs'

import jody from '../../images/jody.png'
import ram from '../../images/ram.png'
import tripp from '../../images/tripp.png'
import robert from '../../images/robert.png'
import musician1 from '../../images/artist1.png'
import musician2 from '../../images/artist2.png'
import musician3 from '../../images/artist3.png'
import influencer1 from '../../images/influencer1.png'
import influencer2 from '../../images/influencer2.png'
import influencer3 from '../../images/influencer3.png'



function ArtistPage() {
  return (
    <div className='text-black '>
        <div className='bg-2 h-[85vh]'>  
          <Header className='m-16'/>
          <div className='flex flex-col'>
            <div className='flex flex-col items-center gap-8'>
              <h1 className='text-7xl font-bold mt-8'>Artists Page</h1>
              <p className='text-2xl text-slate-400 mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit!</p>
              <div className='flex flex-row gap-12 items-center m-8 text-white'>
                <button className='bg-[#F97A33] rounded-xl px-14 py-4 text-xl font-semibold'>Musicians</button>
                <button className='bg-[#9b05c9] rounded-xl px-14 py-4 text-xl font-semibold'>Artist</button>
                <button className='bg-[#262227] rounded-xl px-14 py-4 text-xl font-semibold'>Influencer</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className='flex flex-col text-black bg-[#f71dc70c]'>
          {/* Artists */}
          <div className='flex flex-row justify-between m-8'>
            <h1 className='font-bold text-5xl'>Artists</h1>
            <button className='bg-[#f97a33] rounded-md flex flex-row gap-4 items-center px-6 py-2 text-white'>
              <BsFillSendCheckFill/>
              Book
            </button>        
          </div>
          <div className='flex flex-row gap-8 '>
            <div className='m-12 bg-white flex flex-col items-center shadow-xl hover:shadow-2xl hover:shadow-slate-500 rounded-lg'>
              <img src={jody} alt="" />
              <h1 className='font-bold text-2xl'>Dr.Jody Levos</h1>
              <h1 className='text-slate-400'>Artist</h1>
            </div>

            <div className='m-12 bg-white flex flex-col items-center shadow-xl hover:shadow-2xl hover:shadow-slate-500 rounded-lg'>
              <img src={ram} alt="" />
              <h1 className='font-bold text-2xl'>Ram Shankar</h1>
              <h1 className='text-slate-400'>Influencer</h1>
            </div>

            <div className='m-12 bg-white flex flex-col items-center shadow-xl hover:shadow-2xl hover:shadow-slate-500 rounded-lg'>
              <img src={tripp} alt="" />
              <h1 className='font-bold text-2xl'>Tripp Roki</h1>
              <h1 className='text-slate-400'>Artist</h1>
            </div>
          </div>

          {/* Musicians */}
          <div className='flex flex-row justify-between m-8 '>
            <h1 className='font-bold text-5xl'>Musicians</h1>
            <button className='bg-[#f97a33] rounded-md flex flex-row gap-4 items-center px-6 py-2 text-white'>
              <BsFillSendCheckFill/>
              Book
            </button>        
          </div>
          <div className='flex flex-row gap-8 '>
            <div className='m-12 bg-white flex flex-col items-center shadow-xl hover:shadow-2xl hover:shadow-slate-500 rounded-lg'>
              <img src={musician1} alt="" />
              <h1 className='font-bold text-2xl'>Dr.Jody Levos</h1>
              <h1 className='text-slate-400'>Artist</h1>
            </div>

            <div className='m-12 bg-white flex flex-col items-center shadow-xl hover:shadow-2xl hover:shadow-slate-500 rounded-lg'>
              <img src={musician2} alt="" />
              <h1 className='font-bold text-2xl'>Ram Shankar</h1>
              <h1 className='text-slate-400'>Influencer</h1>
            </div>

            <div className='m-12 bg-white flex flex-col items-center shadow-xl hover:shadow-2xl hover:shadow-slate-500 rounded-lg'>
              <img src={musician3} alt="" />
              <h1 className='font-bold text-2xl'>Tripp Roki</h1>
              <h1 className='text-slate-400'>Artist</h1>
            </div>
          </div>

          {/* Influencer  */}
          <div className='flex flex-row justify-between m-8'>
            <h1 className='font-bold text-5xl'>Influencers</h1>
            <button className='bg-[#f97a33] rounded-md flex flex-row gap-4 items-center px-6 py-2 text-white'>
              <BsFillSendCheckFill/>
              Book
            </button>        
          </div>
          <div className='flex flex-row gap-8 '>
            <div className='m-12 bg-white flex flex-col items-center shadow-xl hover:shadow-2xl hover:shadow-slate-500 rounded-lg'>
              <img src={influencer1} alt="" />
              <h1 className='font-bold text-2xl'>Dr.Jody Levos</h1>
              <h1 className='text-slate-400'>Artist</h1>
            </div>

            <div className='m-12 bg-white flex flex-col items-center shadow-xl hover:shadow-2xl hover:shadow-slate-500 rounded-lg'>
              <img src={influencer2} alt="" />
              <h1 className='font-bold text-2xl'>Ram Shankar</h1>
              <h1 className='text-slate-400'>Influencer</h1>
            </div>

            <div className='m-12 bg-white flex flex-col items-center shadow-xl hover:shadow-2xl hover:shadow-slate-500 rounded-lg'>
              <img src={influencer3} alt="" />
              <h1 className='font-bold text-2xl'>Tripp Roki</h1>
              <h1 className='text-slate-400'>Artist</h1>
            </div>
          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default ArtistPage