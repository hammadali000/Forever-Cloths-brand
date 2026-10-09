import React, { useState } from 'react'

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up')

  const onSubmitHandler = (e) => {
    e.preventDefault()
  }

  const isLogin = currentState === 'Login'

  const inputClass =
    'w-full px-3 py-2 border border-gray-800 rounded bg-white/70 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:-translate-y-0.5 focus:shadow-md'

  const linkClass =
    'cursor-pointer relative after:content-[""] after:absolute after:left-0 after:-bottom-0.5 after:h-[1px] after:w-0 after:bg-gray-800 after:transition-all after:duration-300 hover:after:w-full'

  return (
    <form
      onSubmit={onSubmitHandler}
      className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 bg-white/60 backdrop-blur-md rounded-xl p-8 shadow-md fade-up'
    >

      <div className='inline-flex items-center gap-2 mb-2 mt-4'>
        <p key={currentState} className='prata-regular text-3xl animate-pop'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>

      {/* Name input: smoothly khulta/band hota hai */}
      <div
        className={`w-full overflow-hidden transition-all duration-500 ease-in-out ${
          isLogin ? 'max-h-0 opacity-0' : 'max-h-16 opacity-100'
        }`}
      >
        <input
          className={inputClass}
          type="text"
          placeholder='Name'
          required={!isLogin}
          tabIndex={isLogin ? -1 : 0}
        />
      </div>

      <input className={inputClass} type="email" placeholder='Email' required />
      <input className={inputClass} type="password" placeholder='Password' required />

      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className={linkClass}>Forgot your password?</p>
        {isLogin
          ? <p onClick={() => setCurrentState('Sign Up')} className={linkClass}>Create Account</p>
          : <p onClick={() => setCurrentState('Login')} className={linkClass}>Login Here</p>
        }
      </div>

      <button className='bg-black text-white font-light px-8 py-2 mt-4 rounded transition-all duration-300 hover:bg-gray-800 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-95'>
        {isLogin ? 'Sign In' : 'Sign Up'}
      </button>

    </form>
  )
}

export default Login