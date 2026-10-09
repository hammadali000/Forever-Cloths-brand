import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Collection from './pages/Collection'
import Cart from './pages/Cart'
import Product from './pages/Product'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
  import { ToastContainer, toast } from 'react-toastify';
  
const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
            <div className='bg-blobs'>
        <span className='blob blob1'></span>
        <span className='blob blob2'></span>
        <span className='blob blob3'></span>
      </div>

      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/about' element = {<About />} />
        <Route path='/collection' element = {<Collection />} />
        <Route path='/cart' element = {<Cart />} />
        <Route path='/product/:productId' element = {<Product />} />
        <Route path='/orders' element = {<Orders />} />
        <Route path='/placeorder' element = {<PlaceOrder />} />
        <Route path='/contact' element = {<Contact />} />
        <Route path='/login' element = {<Login />} />
      </Routes>
      <Footer />
      </div>
  )
}

export default App