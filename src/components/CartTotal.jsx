import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext)

  const subtotal = getCartAmount()
  const total = subtotal === 0 ? 0 : subtotal + delivery_fee

  return (
    <div className='w-full bg-white/60 backdrop-blur-md rounded-xl p-5 shadow-sm fade-up'>
      <div className='text-2xl'>
        <Title text1={'CART'} text2={'TOTALS'} />
      </div>

      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between fade-up' style={{ animationDelay: '100ms' }}>
          <p>Subtotal</p>
          <p key={subtotal} className='animate-pop'>{currency} {subtotal}.00</p>
        </div>

        <hr />

        <div className='flex justify-between fade-up' style={{ animationDelay: '200ms' }}>
          <p>Shipping Fee</p>
          <p>{currency} {delivery_fee}.00</p>
        </div>

        <hr />

        <div
          className='flex justify-between fade-up rounded-md px-2 py-2 -mx-2 bg-gradient-to-r from-pink-100/70 to-blue-100/70'
          style={{ animationDelay: '300ms' }}
        >
          <b>Total</b>
          <b key={total} className='animate-pop text-base'>{currency} {total}.00</b>
        </div>
      </div>
    </div>
  )
}

export default CartTotal