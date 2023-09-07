import React from 'react'

const HistoryItems = ({ year, title, duration, location, details}) => {
  const navyFrame = {
    font: 'semibold',
    text: 'white',
    bg: 'blue-500',
    rounded: 'md'
  }
  return (
    <ol className='flex flex-col md:fkex-row relative border-l border-stone-400'>
    <li className=' mb-8 ml-4 pl-1 pt-4 shadow-md rounded-md shadow-blue-200'>
        <div  className='absolute w-3 h-3  bg-blue-500 mt-1.5 -left-1.5 md:rounded-md border-blue-500'/>
            <p className="flex  flex-wrap gap-2 flex-row items-center justify-start text-emerald-400 text-s md: text-sm">
           
            <span  className='inline-block px-2 py-1 font-semibold text-white bg-blue-500 rounded-md ' > {title}</span>
            <span className='inline-block px-2 py-1 font-semibold text-white bg-blue-500 rounded-md'>{year}</span>
            <span className='inline-block px-2 py-1 font-semibold text-white bg-blue-500 rounded-md'>{duration}</span>
            <span className='inline-block px-2 py-1 font-semibold text-white bg-blue-500 rounded-md'>{location}</span>
         </p>
         <p>
            <span className='text-sm text-zinc-900'>{details}</span>
         </p>
 </li>
</ol>
  )
}

export default HistoryItems