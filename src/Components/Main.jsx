import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter} from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover'  src='https://images.unsplash.com/photo-1613722157509-c4b641ec3479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=4140&q=80'/>
        <div className='w-full h-screen absolute top-0 bg-white/10'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
            <h1 className='sm:text-5xl text-4xl font-semibold italic hover:not-italic font-serif  hover:text-violet-500 animate-[wiggle_1s_ease-in-out_infinite] '>Dwight k. Schrute</h1>
            <h2 className='flex sm:text-3xl text-2xl pt-3 text-indigo-600 '> 
                <TypeAnimation sequence={[
                    'D',
                     1000,
                    'Determind',
                    2000,
                    'W',
                    1000,
                    'Worker',
                    2000,
                    'I',
                     1000,
                    'Intense',
                    2000,
                    'G',
                    1000,
                    'Good Worker',
                    2000,
                    'H',
                     1000,
                    'Hard Worker',
                    2000,
                    'T',
                    1000,
                    'Terrific',
                    2000,

                ]}
                wrapper='div'
                cursor={true}
                repeat={Infinity}
                style={{fontSize: '1em', paddingLeft: '5px'}}/>
            </h2>
            <div className='flex justify-between pt-4 max-w-[150px] w-full'>
                <FaFacebookF  src="www.facebook.com" className='cursor-pointer rounded-full shadow-lg bg-indigo-200'   size={30}/>
                <FaLinkedinIn className='cursor-pointer rounded-full shadow-lg bg-indigo-200'  size={30}/> 
                <FaInstagram  className='cursor-pointer rounded-full shadow-lg bg-indigo-200'  size={30}/> 
                <FaTwitter    className='cursor-pointer rounded-full shadow-lg bg-indigo-200' size={30}/> 

            </div>
            </div>
        </div>
    </div>
  )
}

export default Main