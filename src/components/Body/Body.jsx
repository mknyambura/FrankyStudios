import React from 'react'

import asana from '../../images/asana.png'
import hotjar from '../../images/hotjar.png'
import framer from '../../images/framer.png'
import tinder from '../../images//tinder.png'
import pendo from '../../images/pendo.png'
import chart from '../../images/Chart.png'
import jody from '../../images/jody.png'
import ram from '../../images/ram.png'
import tripp from '../../images/tripp.png'
import robert from '../../images/robert.png'
import blog1 from '../../images/blog1.png'
import blog2 from '../../images/blog2.png'
import blog3 from '../../images/blog3.png'


import {BsEnvelopeFill, BsFillSendCheckFill, BsFillVolumeUpFill} from 'react-icons/bs'
import {GiNotebook} from 'react-icons/gi'


function Body() {
  return (
    <div>
        <div className='flex flex-col items-center gap-8 ml-16 mr-16 mb-16'>
        <h1 className='text-black text-5xl font-bold'>Trusted by 20,000+ customers across Europe</h1>
        <p className='text-[#F97A33] text-xl'>4.9/5 Rating based on 20K+ reviews</p>
        <div className='flex flex-row gap-8 items-center'>
          <div className='flex flex-row items-center'>
            <img src={asana} alt="" width={80}/>
            <p className='text-slate-700 text-3xl font-semibold'>asana</p>
          </div>
          <div className='flex flex-row items-center'>
            <img src={hotjar} alt="" width={80}/>
            <p className='text-slate-700 text-3xl font-semibold'>hotjar</p>
          </div>
          <div className='flex flex-row items-center'>
            <img src={framer} alt="" width={80}/>
            <p className='text-slate-700 text-3xl font-semibold'>framer</p>
          </div>
          <div className='flex flex-row items-center'>
            <img src={tinder} alt="" width={80}/>
            <p className='text-slate-700 text-3xl font-semibold'>tinder</p>
          </div>
          <div className='flex flex-row items-center'>
            <img src={pendo} alt="" width={80}/>
            <p className='text-slate-700 text-3xl font-semibold'>pendo</p>
          </div>
        </div>
      </div>

      <div className='text-black flex flex-row items-center gap-8 m-16 justify-between'>
        <div className='flex flex-col gap-8 items-center'>
          <h1 className='text-[#f94a33]'>WHAT IS FRANKYS STUDIOS</h1>
          <p className='text-5xl font-bold'>We start with discovery call to understand</p>
          <p className='text-slate-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className='bg-[#f97a33] rounded-md flex flex-row gap-4 items-center px-6 py-2 text-white'>
            <BsFillSendCheckFill/>
            Get in Touch
          </button>
        </div>

        <div className='flex items-center'>
          <img src={chart} alt="" />
        </div>
      </div>

      <div className='text-black flex flex-col gap-8 bg-[#f71dc70c]'>
        <div className='flex flex-col gap-8 items-center mt-16'>
          <h1 className='text-[#f97a33]'>WHAT WE DO</h1>
          <p className='font-bold text-5xl'>We're a Digital Marketing Pro</p>
        </div>
        <div className='flex flex-row items-center gap-8 justify-evenly m-16'>
          <div className='flex flex-col gap-8 items-center shadow-xl hover:shadow-2xl hover:shadow-slate-500 rounded-lg bg-white'>
            <button disabled="disabled" className='bg-blue-700 px-2 py-2 rounded-md mt-4'><BsFillVolumeUpFill className='text-white text-4xl'/></button>
            <h1 className='font-bold text-2xl ml-4 mr-4 mb-4'>Social Media</h1>
            <p className='text-slate-400 ml-4 mr-4 mb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Iste asperiores laboriosam reprehenderit tempora quasi. 
              Quos officiis, voluptatum reiciendis voluptas, nobis fugit dolore, placeat possimus ullam soluta voluptates omnis quisquam! Consequatur.</p>
          </div>
          <div className='flex flex-col gap-8 items-center shadow-xl hover:shadow-2xl hover:shadow-slate-500 rounded-lg bg-white'>
            <button disabled="disabled" className='bg-red-400 px-2 py-2 rounded-md mt-4'><BsEnvelopeFill className='text-white text-4xl'/></button>
            <h1 className='font-bold text-2xl ml-4 mr-4 mb-4'>Email Marketing</h1>
            <p className='text-slate-400 ml-4 mr-4 mb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Iste asperiores laboriosam reprehenderit tempora quasi. 
              Quos officiis, voluptatum reiciendis voluptas, nobis fugit dolore, placeat possimus ullam soluta voluptates omnis quisquam! Consequatur.</p>
          </div>
          <div className='flex flex-col gap-8 items-center shadow-xl hover:shadow-2xl hover:shadow-slate-500 rounded-lg bg-white'>
            <button disabled="disabled" className='bg-purple-600 px-2 py-2 rounded-md mt-4'><GiNotebook className='text-white text-4xl'/></button>
            <h1 className='font-bold text-2xl ml-4 mr-4 mb-4'>Content Marketing</h1>
            <p className='text-slate-400 ml-4 mr-4 mb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Iste asperiores laboriosam reprehenderit tempora quasi. 
              Quos officiis, voluptatum reiciendis voluptas, nobis fugit dolore, placeat possimus ullam soluta voluptates omnis quisquam! Consequatur.</p>
          </div>
        </div>
      </div>

      <div className='flex flex-col text-black m-16'>
        <h1 className='text-[#F97A33]'>OUR EXPERT TEAM</h1>
        <div className='flex flex-row justify-between mt-8 mb-8'>
          <h1 className='font-bold text-3xl'>Book Our Artists</h1>
          <button className='bg-[#f97a33] rounded-md flex flex-row gap-4 items-center px-6 py-2 text-white'>
            <BsFillSendCheckFill/>
            Get in Touch
          </button>        </div>
        <div className='flex flex-row gap-8 '>
          <div className='flex flex-col items-center shadow-xl rounded-lg'>
            <img src={jody} alt="" />
            <h1 className='font-bold text-2xl'>Dr.Jody Levos</h1>
            <h1 className='text-slate-400'>Artist</h1>
          </div>

          <div className='flex flex-col items-center shadow-xl rounded-lg'>
            <img src={ram} alt="" />
            <h1 className='font-bold text-2xl'>Ram Shankar</h1>
            <h1 className='text-slate-400'>Influencer</h1>
          </div>

          <div className='flex flex-col items-center shadow-xl rounded-lg'>
            <img src={tripp} alt="" />
            <h1 className='font-bold text-2xl'>Tripp Roki</h1>
            <h1 className='text-slate-400'>Artist</h1>
          </div>

          <div className='flex flex-col items-center shadow-xl rounded-lg'>
            <img src={robert} alt="" />
            <h1 className='font-bold text-2xl'>Robert Gspai</h1>
            <h1 className='text-slate-400'>Artist</h1>
          </div>
        </div>
      </div>
      
      <div className='flex flex-col gap-8  text-black justify-center items-center bg-[#f71dc70c]'>
        <div className='flex flex-col gap-8 ml-16 mr-16 mb-8 mt-8 items-center'>
          <h1 className='text-[#F97A33]'>OUR BLOG</h1>
          <h1 className='font-bold text-3xl'>Explore Our Blog</h1>
        </div>
        <div className='flex flex-row items-center gap-8 ml-16 mr-16 mb-8 mt-8 '>
          <div className='flex flex-col gap-6 justify-between shadow-xl hover:shadow-2xl hover:shadow-slate-500 rounded-lg bg-white'>
            <img src={blog1} alt="" />
            <h1 className='font-bold text-2xl ml-4 mr-4 mb-4'>Merge Instagram Accounts</h1>
            <p className='text-slate-400 ml-4 mr-4 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Excepturi quae necessitatibus sunt eaque! 
              Unde dolorem, libero debitis, consequuntur odio aperiam hic molestias, possimus earum voluptas aliquam tenetur quod cupiditate nulla.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Nobis quisquam quo ex consectetur exercitationem maxime dignissimos doloremque porro modi quidem harum ratione, officiis natus magnam molestiae laborum necessitatibus optio qui!
            </p>
          </div>
          <div className='flex flex-col gap-8 justify-between shadow-xl hover:shadow-2xl hover:shadow-slate-500 rounded-lg bg-white'>
            <img src={blog2} alt="" />
            <h1 className='font-bold text-2xl ml-4 mr-4 mb-4'>Merge Instagram Accounts</h1>
            <p className='text-slate-400 ml-4 mr-4 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Excepturi quae necessitatibus sunt eaque! 
              Unde dolorem, libero debitis, consequuntur odio aperiam hic molestias, possimus earum voluptas aliquam tenetur quod cupiditate nulla.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Nobis quisquam quo ex consectetur exercitationem maxime dignissimos doloremque porro modi quidem harum ratione, officiis natus magnam molestiae laborum necessitatibus optio qui!
            </p>
          </div>
          <div className='flex flex-col gap-8 justify-between shadow-xl hover:shadow-2xl hover:shadow-slate-500 rounded-lg bg-white'>
            <img src={blog3} alt="" />
            <h1 className='font-bold text-2xl ml-4 mr-4 mb-4'>Merge Instagram Accounts</h1>
            <p className='text-slate-400 ml-4 mr-4 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Excepturi quae necessitatibus sunt eaque! 
              Unde dolorem, libero debitis, consequuntur odio aperiam hic molestias, possimus earum voluptas aliquam tenetur quod cupiditate nulla.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Nobis quisquam quo ex consectetur exercitationem maxime dignissimos doloremque porro modi quidem harum ratione, officiis natus magnam molestiae laborum necessitatibus optio qui!
            </p>
          </div>
        </div>
        <button className='bg-[#f97a33] w-[20%] rounded-md flex flex-row gap-4 items-center justify-center px-6 py-2 text-white mb-16'>
            <BsFillSendCheckFill/>
            Read More Posts
          </button>
      </div>
    </div>
  )
}

export default Body