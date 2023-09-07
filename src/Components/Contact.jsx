import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040] m-auto md:pl-2- p-4 py-16 '>
       <h1 className='text-center text-yellow-300 bg-black rounded-lg shadow-[0_0_3000px_purple] py-4 text-4xl font-semibold  '>Contact</h1> 
      <form action='' method='POST' encType='multipart/form-data'> 
      <div className='grid md:grid-cols-2 gap-4 w-full py-2 '>
        <div className='flex flex-col p-2'>
          <label className='uppercase text-sm py-2 font-semibold  '>Name </label>
          <input className='bg-pink-100 rounded-md hover:bg-purple-200  border-2 p-2 flex 'type='text' name='name'/>
        </div>
        <div className='flex flex-col p-2' >
          <label className='uppercase text-sm py-2 font-semibold ' >Phone number</label>
          <input className='bg-pink-100 rounded-md hover:bg-purple-200 border-2 p-2 flex ' type='text' name='phone'/>
        </div>
      </div>
      <div className='flex flex-col p-2'>
          <label className='uppercase text-sm py-2 font-semibold ' >Email</label>
          <input className='bg-pink-100 rounded-md hover:bg-purple-200 border-2 p-2 flex  '  type='email' name='email'/>
      </div>
      <div className='flex flex-col p-2'>
          <label className='uppercase text-sm py-2 font-semibold ' >Subject</label>
          <input className='bg-pink-100 rounded-md hover:bg-purple-200 border-2 p-2  '  type='text' name='subject'/>
      </div>
      <div className='flex flex-col p-2'>
          <label className='uppercase text-sm py-2 font-semibold  ' >Message</label>
          <textarea className='bg-pink-100 rounded-md hover:bg-purple-200 '  rows={10} name='message'></textarea>
      </div>
      <div className='float-right p-2'>
      <button className='bg-blue-500   text-white rounded-md p-2 '>
        SEND MESSAGE
      </button>
      </div>
      </form>
      </div>
  )
}

export default Contact;