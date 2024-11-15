import React from 'react'
import { imgPath } from '../helpers/functions-general'

const NewCollectionItem = ({item, key}) => {

  return (
    <section className='new-collection' key={key}>
        <div className="container">


            <div><img src={`${imgPath}/${item.img}`} alt="" className='rounded-[1.5rem] w-[1800px]'/></div>
            <div className='py-4'>
                <h5 className='mb-2'>{item.title}</h5>
                <p className='opacity-40 font-semibold mb-2'>{item.sub}</p>
                <h5>${item.price}</h5>
            </div>
           
            


        </div>
    </section>
  )
}

export default NewCollectionItem