import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid sm:grid-cols-[3fr_1fr_1fr] gap-4 my-10 mt-40 text-sm' >
<div>
    <img src={assets.logo} className='mb-5 w-32' alt="" />
    <p className='w-full md:w-2/3 text-gray-600'>Hier st eht ein Beispieltext, der den Platz für Ihren Inhalt freihält. Ersetzen Sie ihn später durch Ihren eigenen Text, sobald dieser fertig ist.</p>
</div>
<div >
    <p className='text-xl font-medium mb-5 '>COMPANY</p>
    <ul className='flex flex-col text-gray-600 gap-1'>
<li>Home</li>
<li>About Us </li>
<li>Delivery</li>
<li>Privacy Policy</li>
    </ul>
</div>
<div>
    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
    <ul className='flex flex-col text-gray-600 gap-1'>
        <li>+1-212-4523-0</li>
        <li>foreover344@gmail.com</li>
    </ul>

</div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2026@ forover.com - All Right Deserved</p>
        </div>
    </div>
  )
}

export default Footer