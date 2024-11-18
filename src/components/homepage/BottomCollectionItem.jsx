import React from 'react'
import { imgPath } from '../helpers/functions-general'
import { Link } from 'react-router-dom'

const BottomCollectionItem = ({item, key}) => {
  return (
    <section key={key}>
        <div className='relative'>
            <img src={`${imgPath}/${item.img}`} alt="" className='rounded-[1.5rem] w-[1200px] h-[500px]'/>
            <div className='absolute bottom-10 left-5 '>            
            <h2 className='uppercase mb-5'>{item.title}</h2>
            <Link className='py-4 px-10 bg-white text-black font-semibold rounded-full text-sm'>{item.button}</Link>
            </div>

        </div>
    </section>
  )
}

export default BottomCollectionItem