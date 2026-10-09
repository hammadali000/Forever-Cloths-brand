import React from 'react'

const items = ['FREE SHIPPING', 'EASY RETURNS', '100% ORIGINAL', 'CASH ON DELIVERY', 'NEW ARRIVALS']

const Marquee = () => {
  const row = [...items, ...items]
  return (
    <div className='marquee overflow-hidden border-y py-3 my-10 bg-white/50 backdrop-blur-md'>
      <div className='marquee-track'>
        {[...row, ...row].map((text, i) => (
          <span key={i} className='mx-8 text-sm tracking-[0.3em] text-gray-600 whitespace-nowrap'>
            {text} <span className='mx-8'>✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default Marquee