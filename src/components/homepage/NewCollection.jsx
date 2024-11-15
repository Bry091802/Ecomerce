import React from 'react'
import NewCollectionItem from './NewCollectionItem'

const NewCollection = () => {

    const newCollectionArray = [
        {
            img: "card-1.png",
            title: "Loro Piana",
            sub: "Slim-Fit Stripped Silk and Linen-Blend Polo Shirt",
            price: "45",
        },
        {
            img: "card-2.png",
            title: "White Pants",
            sub: "Slim-Fit man pants",
            price: "95",
        },
        {
            img: "card-3.png",
            title: "Bidha Glasses",
            sub: "Black Glasses with luxury finishing",
            price: "50",
        },
        {
            img: "card-4.png",
            title: "Brown Bomber",
            sub: "Luxury unisex bomber jacket",
            price: "52",
        },
        {
            img: "card-5.png",
            title: "Leather Shoes Jack",
            sub: "Man leather shoes",
            price: "89",
        },
        {
            img: "card-6.png",
            title: "Grey tshirt",
            sub: "Unisex grey Shirt",
            price: "21",
        },
    ]


  return (
    <div>
        <div className="container">
            <div className='text-center py-5'>
                <h3 className='uppercase mb-4'>new collection</h3>
                <p className='opacity-40'>Our latest collection, where classic and contemporary styles converge in perfect harmony.</p>
            </div>
            <div className='grid grid-cols-3 gap-2'>            
                {newCollectionArray.map((item, key)=>(

            <NewCollectionItem item={item} key={key}/>

            ))}
            </div>

        </div>
    </div>
  )
}

export default NewCollection