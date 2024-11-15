import React from 'react'
import BannerItem from './BannerItem'
import { Link } from 'react-router-dom'
import { imgPath } from '../helpers/functions-general'

const Banner = ({img, header, subheader}) => {
  return (
    <section>
        <div className="container">
            <div to="/" className='relative'>
            <img src={`${imgPath}/${img}`} alt="" className='rounded-2xl max-h-[900px] w-full object-cover '/>
            <div className='absolute bottom-10 left-5 text-white'>
                <h2 className='uppercase'>{header}</h2>
                <small>{subheader}</small>
                
            </div>
            <Link to="/" className='absolute bottom-10 right-5 py-1 px-6 bg-white text-black font-semibold rounded-full text-sm'>Buy Now</Link>
            </div>
        </div>
    </section>
  )
}

export default Banner