import React from 'react'
import { imgPath } from '../helpers/functions-general'
import { Link } from 'react-router-dom'

const BottomBanner = ({img, header, subheader, btn}) => {
  return (
    <div className='pb-20'>
        <div className="container">
            <img src={`${imgPath}/${img}`} alt="" className='rounded-2xl max-h-[900px] w-full object-cover'/>
            <div className='text-center'>
                <h2 className='uppercase mt-10 mb-2'>{header}</h2>
                <p className='opacity-40 mb-10'>{subheader}</p>
                <Link to="/" className='py-4 px-10 bg-black text-white font-semibold rounded-full text-sm '>{btn}</Link>
            </div>
            
        </div>
    </div>
  )
}

export default BottomBanner