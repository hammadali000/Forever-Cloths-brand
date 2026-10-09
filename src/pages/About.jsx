import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  const cards = [
    {
      title: 'Quality Assurance:',
      text: 'We meticulously select and vet each product to ensure it meets our stringent quality standards.',
    },
    {
      title: 'Convenience:',
      text: 'With our user-friendly interface and hassle-free ordering process, shopping has never been easier.',
    },
    {
      title: 'Exceptional Customer Service:',
      text: 'Our team of dedicated professionals is here to assist you every way, ensuring your satisfaction is our top priority.',
    },
  ]

  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t fade-up'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>

        {/* image: left se aati hai */}
        <div className='slide-left overflow-hidden rounded-xl w-full md:max-w-[450px] shadow-md hover:shadow-2xl transition-shadow duration-500'>
          <img
            className='w-full transition-transform duration-700 ease-out hover:scale-105'
            src={assets.about_img}
            alt=""
          />
        </div>

        {/* text: right se aata hai */}
        <div className='slide-right flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p className='fade-up' style={{ animationDelay: '300ms' }}>
            Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.
          </p>
          <p className='fade-up' style={{ animationDelay: '450ms' }}>
            Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.
          </p>
          <b className='text-gray-800 fade-up' style={{ animationDelay: '600ms' }}>OUR MISSION</b>
          <p className='fade-up' style={{ animationDelay: '700ms' }}>
            Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.
          </p>
        </div>
      </div>

      <div className='text-4xl py-4 fade-up'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row gap-4 text-sm mb-20'>
        {cards.map((card, index) => (
          <div
            key={card.title}
            className='fade-up flex-1 border bg-white/60 backdrop-blur-md rounded-xl px-10 md:px-10 py-8 sm:py-14 flex flex-col gap-5 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:bg-white/80'
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <b className='text-base'>{card.title}</b>
            <p className='text-gray-600'>{card.text}</p>
          </div>
        ))}
      </div>

      <NewsLetterBox />
    </div>
  )
}

export default About