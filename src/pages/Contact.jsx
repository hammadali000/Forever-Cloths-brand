import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t fade-up'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>

        {/* image: left se aati hai */}
        <div className='slide-left overflow-hidden rounded-xl md:max-w-[480px] w-full shadow-md hover:shadow-2xl transition-shadow duration-500'>
          <img
            className='w-full transition-transform duration-700 ease-out hover:scale-105'
            src={assets.contact_img}
            alt=""
          />
        </div>

        {/* text: right se aata hai */}
        <div className='slide-right flex flex-col justify-center items-start gap-6 bg-white/60 backdrop-blur-md rounded-xl p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg'>
          <p className='font-semibold text-xl text-gray-600 fade-up' style={{ animationDelay: '300ms' }}>
            Our Store
          </p>
          <p className='text-gray-500 fade-up' style={{ animationDelay: '400ms' }}>
            54709 Willms Station <br />
            Suite 350, Washington, USA
          </p>
          <p className='text-gray-500 fade-up' style={{ animationDelay: '500ms' }}>
            Tel: (415) 555-0132 <br />
            Email: admin@forever.com
          </p>
          <p className='font-semibold text-xl text-gray-600 fade-up' style={{ animationDelay: '600ms' }}>
            Careers at Forever
          </p>
          <p className='text-gray-500 fade-up' style={{ animationDelay: '700ms' }}>
            Learn more about our teams and job openings.
          </p>
          <button
            className='group border border-black px-8 py-4 text-sm flex items-center gap-2 transition-all duration-500 hover:bg-black hover:text-white hover:shadow-lg active:scale-95 fade-up'
            style={{ animationDelay: '800ms' }}
          >
            Explore Jobs
            <span className='transition-transform duration-300 group-hover:translate-x-2'>→</span>
          </button>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  )
}

export default Contact