import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../assets/logo/logo.png.png'

const Banner = () => {
  return (
    <div className=' bg-gray-500 h-[900px]' >
       <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 pt-36'>
         <div className='flex flex-col justify-center'>
            <h3>Hi, I’m Animes Barman</h3>
            <h1>Web Application Developer</h1>
            <p>with a passion for crafting intuitive and visually appealing websites.From responsive design to smooth user interactions,
                 I focus on every detail.Let's collaborate to bring your vision to life.Explore my portfolio and see how I can help you achieve your goals.</p>
                 <div>
                    <a href="">Download CV</a>
                    <Link>Contact Me</Link>
                 </div>
        </div>
        <div className='flex justify-center items-center'>
            <img className='border-2 rounded-full bg-red-400' src={logo} alt="" />
        </div>
       </div>
    </div>
  )
}

export default Banner