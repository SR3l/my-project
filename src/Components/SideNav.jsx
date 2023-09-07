import { AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail } from 'react-icons/ai';
import React, { useState } from 'react';
import {BsPerson} from 'react-icons/bs';
import {GrProjects} from 'react-icons/gr';
import {FcHome} from 'react-icons/fc';
import {TbHandClick} from 'react-icons/tb';



const SideNav = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }
  return (
    <div>
        <FcHome onClick={handleNav} className='absolute top-4 right-4 z-[99] ' /> 
        <TbHandClick className='absolute top-8 right-4 '/>
        {
            nav ? (
                <div className=' fixed w-full h-screen bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-200 flex flex-col justify-center items-center z-20'>
                    <a href='#main' className='w-[75%] flex 
                                                justify-center 
                                                items-center 
                                                rounded-full
                                                shadow-lg
                                                bg-gray-100
                                                shadow-gray-400
                                                m-2
                                                p-4
                                                cursor-pointer
                                                hover:scale-110
                                                ease-in duration-150'>
                        <AiOutlineHome size={20} />
                        <span className='pl-4'>Home</span>
                    </a>
                    <a href='#work' className='w-[75%] flex 
                                                justify-center 
                                                items-center 
                                                rounded-full
                                                shadow-lg
                                                bg-gray-100
                                                shadow-gray-400
                                                m-2
                                                p-4
                                                cursor-pointer
                                                hover:scale-110
                                                ease-in duration-150'>
                        <GrProjects size={20} />
                        <span className='pl-4'>Work</span>
                    </a>
                    <a href='#projects' className='w-[75%] flex 
                                                justify-center 
                                                items-center 
                                                rounded-full
                                                shadow-lg
                                                bg-gray-100
                                                shadow-gray-400
                                                m-2
                                                p-4
                                                cursor-pointer
                                                hover:scale-110
                                                ease-in duration-150'>
                        <AiOutlineProject size={20} />
                        <span className='pl-4'>Projects</span>
                    </a>
                    <a href='#main' className='w-[75%] flex 
                                                justify-center 
                                                items-center 
                                                rounded-full
                                                shadow-lg
                                                bg-gray-100
                                                shadow-gray-400
                                                m-2
                                                p-4
                                                cursor-pointer
                                                hover:scale-110
                                                ease-in duration-150'>
                        <BsPerson size={20} />
                        <span className='pl-4'>Resume</span>
                    </a>
                    <a href='#contact' className='w-[75%] flex 
                                                justify-center 
                                                items-center 
                                                rounded-full
                                                shadow-lg
                                                bg-gray-100
                                                shadow-gray-400
                                                m-2
                                                p-4
                                                cursor-pointer
                                                hover:scale-110
                                                ease-in duration-150'>
                        <AiOutlineMail size={20} />
                        <span className='pl-4'>Contact me</span>
                    </a>
                </div> 
            )
            : (
                <div></div>
            )}
            <div className='md:block hidden fixed top-[25%]   '>
                <div className='flex flex-col'>
                    <a herf='#main' className='rounded-full shadow-lg bg-blue-200  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineHome size={15} />
                    </a>
                    <a herf='#work' className='rounded-full shadow-lg bg-blue-200  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <GrProjects />
                    </a>

                    <a herf='#projects' className='rounded-full shadow-lg bg-blue-200  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineProject />
                    </a>

                    <a herf='#main' className='rounded-full shadow-lg bg-blue-200  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <BsPerson />
                    </a>

                    <a herf='#contact' className='rounded-full shadow-lg bg-blue-200  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail />
                    </a>





                    </div>
             </div>
        </div>
  );
};

export default SideNav;