import React from 'react'
import BottomCollectionItem from './BottomCollectionItem'

const BottomCollection = () => {

  const bottomCollectionArray = [
    {
      img: "card-7.png",
      title: "man",
      button: "See Details",
  },
    {
      img: "card-8.png",
      title: "woman",
      button: "See Details",
  },
    {
      img: "card-9.png",
      title: "kids",
      button: "See Details",
  },
  ]

  return (
    <div>
      <div className="container">
        <div className='flex flex-col md:flex-row gap-5 justify-center items-center'>
          {bottomCollectionArray.map ((item, key) =>(
            <BottomCollectionItem item={item} key={key}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BottomCollection