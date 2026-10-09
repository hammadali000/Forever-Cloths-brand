import React from 'react'

const NewsLetterBox = () => {
    const onSUbmitHandler = (event) => {
        event.preventDefault ();
    }
  return (
    <div className='text-center'>
<p className='text-gray-800 text-2xl font-medium'>Subscribe Now & get 20% off</p>
<p className='text-gray-400 mt-3'>Hier steht ein Beispieltext, der den Platz für Ihren Inhalt freihält. Ersetzen Sie ihn später durch Ihren eigenen Text.</p>
<form onSubmit={onSUbmitHandler} className='w-full sm:w-1/2  flex items-center gap-3 mx-auto my-6 border pl-3 '>
    <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your Email' required />
    <button type='Submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
</form>
    </div>
  )
}

export default NewsLetterBox