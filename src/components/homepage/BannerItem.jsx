import React from 'react'
import { imgPath } from '../helpers/functions-general'

const BannerItem = ({img, header, subheader}) => {
  return (
    <div className="banner-item relative">

        <img src={`${imgPath}/${img}`} alt="" />

        <div>
            <h2 className='mb-5'>{header}</h2>
            <small>{subheader}</small>
        </div>
    </div>
  )
}

export default BannerItem