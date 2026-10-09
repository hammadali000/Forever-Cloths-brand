import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relavent');

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  useEffect(() => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }

    if (sortType === 'low-high') {
      productsCopy.sort((a, b) => a.price - b.price);
    } else if (sortType === 'high-low') {
      productsCopy.sort((a, b) => b.price - a.price);
    }

    setFilterProducts(productsCopy);
  }, [category, subCategory, sortType, products, search, showSearch])

  const labelClass = 'flex gap-2 items-center cursor-pointer transition-all duration-300 hover:translate-x-1 hover:text-black'
  const boxClass = `border border-gray-300 bg-white/60 backdrop-blur-md rounded-lg pl-5 transition-all duration-500 ease-in-out overflow-hidden sm:max-h-96 sm:py-3 sm:opacity-100`

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      {/* filter option */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
          FILTERS
          <img className={`h-3 sm:hidden transition-transform duration-300 ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>

        {/* category filter */}
        <div className={`${boxClass} mt-6 ${showFilter ? 'max-h-96 py-3 opacity-100' : 'max-h-0 py-0 opacity-0 border-transparent'}`}>
          <p className='mb-3 text-sm font-medium'>CATEGORY</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-800'>
            <label className={labelClass}>
              <input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory} /> Men
            </label>
            <label className={labelClass}>
              <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory} /> Women
            </label>
            <label className={labelClass}>
              <input className='w-3' type="checkbox" value={'Kids'} onChange={toggleCategory} /> Kids
            </label>
          </div>
        </div>

        {/* subcategory filter */}
        <div className={`${boxClass} my-5 ${showFilter ? 'max-h-96 py-3 opacity-100' : 'max-h-0 py-0 opacity-0 border-transparent'}`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-800'>
            <label className={labelClass}>
              <input className='w-3' type="checkbox" value={'Topwear'} onChange={toggleSubCategory} /> Topwear
            </label>
            <label className={labelClass}>
              <input className='w-3' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory} /> Bottomwear
            </label>
            <label className={labelClass}>
              <input className='w-3' type="checkbox" value={'Winterwear'} onChange={toggleSubCategory} /> Winterwear
            </label>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4 fade-up'>
          <Title text1={'ALL'} text2={'COLLECTION'} />
          <select
            onChange={(e) => setSortType(e.target.value)}
            className='border-gray-300 border-2 text-sm px-2 rounded bg-white/70 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-300'
          >
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {filterProducts.length === 0 ? (
          <p className='text-center text-gray-500 py-20 fade-up'>No products found</p>
        ) : (
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
            {filterProducts.map((item, index) => (
              <div
                key={item._id}
                className='fade-up'
                style={{ animationDelay: `${(index % 8) * 80}ms` }}
              >
                <ProductItem name={item.name} id={item._id} price={item.price} image={item.image} />
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  )
}

export default Collection