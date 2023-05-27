import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import '../../components/ArtistPage/ArtistPage.scss'
import { BsEnvelopeFill, BsFacebook, BsFillSendCheckFill, BsFillVolumeUpFill, BsLinkedin, BsTwitter } from 'react-icons/bs'

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



function Booking() {
  return (
    <div className='text-black '>
        <div className='bg-2 h-[85vh]'>  
          <Header className='m-16'/>
          <div className='flex flex-col'>
            <div className='flex flex-col items-center gap-8'>
              <h1 className='text-7xl font-bold mt-8'>Booking Agency Page</h1>
              <p className='text-2xl text-slate-400 mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit!</p>
              <div className='flex flex-row gap-12 items-center m-4 text-white'>
                <button className='bg-[#F97A33] rounded-xl px-14 py-4 text-xl font-semibold'><a href="#musicians" className='no-underline'>Musicians</a></button>
                <button className='bg-[#9b05c9] rounded-xl px-14 py-4 text-xl font-semibold'><a href="#artists" className='no-underline'>Artist</a></button>
                <button className='bg-[#262227] rounded-xl px-14 py-4 text-xl font-semibold'><a href="#influencers" className='no-underline'>Influencer</a></button>
              </div>
            </div>
          </div>
        </div>
        
        <div className='text-black bg-[#f71dc70c]'>
            <div className='flex flex-col items-center mb-12'>
                <div className='flex flex-row justify-between m-8 shadow-xl shadow-slate-400 px-4 py-2 rounded-lg w-[80%] items-center'>
                    <h1 className='font-bold text-2xl'>Jody Levos Info</h1>
                    <div className='flex flex-row gap-2'>
                        <button className='px-2 py-2 border border-slate-950 rounded-full'><BsFacebook/></button>
                        <button className='px-2 py-2 border border-slate-950 rounded-full'><BsTwitter/></button>
                        <button className='px-2 py-2 border border-slate-950 rounded-full'><BsLinkedin/></button>
                    </div>
                </div>

                <div className='flex flex-row w-[80%] justify-between'>
                    <div className='flex flex-row gap-8 items-center'>
                        <img src={musician1} alt="" className='shadow-2xl rounded-full' width={200}/>
                        <div className='flex flex-col'>
                            <h1 className='font-bold text-3xl'>Jody Levos</h1>
                            <h1 className='text-slate-500 text-xl'>Artist</h1>
                            <h1 className='text-xl font-bold'><span className='text-[#f97a33]'>Franky </span>Studio.</h1>
                        </div>
                    </div>
                    <div className='bg-slate-600 h-[180px] w-[1px]'></div>
                    <div className=' flex items-center'>
                        <button className='bg-[#f97a33] rounded-md flex flex-row gap-4 items-center px-6 py-2 text-white'>
                            <BsFillSendCheckFill/>
                            Get in Touch
                        </button>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center mb-12'>
                <div className='flex flex-row justify-between m-8 shadow-xl shadow-slate-400 px-4 py-2 rounded-lg w-[80%] items-center'>
                    <h1 className='font-bold text-2xl'>Ram Shankar Info</h1>
                    <div className='flex flex-row gap-2'>
                        <button className='px-2 py-2 border border-slate-950 rounded-full'><BsFacebook/></button>
                        <button className='px-2 py-2 border border-slate-950 rounded-full'><BsTwitter/></button>
                        <button className='px-2 py-2 border border-slate-950 rounded-full'><BsLinkedin/></button>
                    </div>
                </div>

                <div className='flex flex-row w-[80%] justify-between'>
                    <div className='flex flex-row gap-8 items-center'>
                        <img src={musician2} alt="" className='shadow-2xl rounded-full' width={200}/>
                        <div className='flex flex-col'>
                            <h1 className='font-bold text-3xl'>Ram Shankar</h1>
                            <h1 className='text-slate-500 text-xl'>Artist</h1>
                            <h1 className='text-xl font-bold'><span className='text-[#f97a33]'>Franky </span>Studio.</h1>
                        </div>
                    </div>
                    <div className='bg-slate-600 h-[180px] w-[1px]'></div>
                    <div className=' flex items-center'>
                        <button className='bg-[#f97a33] rounded-md flex flex-row gap-4 items-center px-6 py-2 text-white'>
                            <BsFillSendCheckFill/>
                            Get in Touch
                        </button>
                    </div>
                </div>
            </div>

            <div className='flex flex-col items-center mb-12'>
                <div className='flex flex-row justify-between m-8 shadow-xl shadow-slate-400 px-4 py-2 rounded-lg w-[80%] items-center'>
                    <h1 className='font-bold text-2xl'>Roberta Gspai Info</h1>
                    <div className='flex flex-row gap-2'>
                        <button className='px-2 py-2 border border-slate-950 rounded-full'><BsFacebook/></button>
                        <button className='px-2 py-2 border border-slate-950 rounded-full'><BsTwitter/></button>
                        <button className='px-2 py-2 border border-slate-950 rounded-full'><BsLinkedin/></button>
                    </div>
                </div>

                <div className='flex flex-row w-[80%] justify-between mb-16'>
                    <div className='flex flex-row gap-8 items-center'>
                        <img src={musician3} alt="" className='shadow-2xl rounded-full' width={200}/>
                        <div className='flex flex-col'>
                            <h1 className='font-bold text-3xl'>Roberta Gspai</h1>
                            <h1 className='text-slate-500 text-xl'>Artist</h1>
                            <h1 className='text-xl font-bold'><span className='text-[#f97a33]'>Franky </span>Studio.</h1>
                        </div>
                    </div>
                    <div className='bg-slate-600 h-[180px] w-[1px]'></div>
                    <div className=' flex items-center'>
                        <button className='bg-[#f97a33] rounded-md flex flex-row gap-4 items-center px-6 py-2 text-white'>
                            <BsFillSendCheckFill/>
                            Get in Touch
                        </button>
                    </div>
                </div>
            </div>
        </div>
      <Footer/>
    </div>
  )
}

export default Booking