import React from 'react'
import { Link } from 'react-router-dom'
import { imgPath } from '../helpers/functions-general'

const Footer = () => {
  return (
    <footer className='pt-10'>
      <div className="container">
        <div className='grid text-center md:grid-cols-[1.8fr,_.5fr,_.5fr,_.5fr]'>
          
          <div className='footer-box'>
            <img src={`${imgPath}/footerlogo.png`} alt=""/>
            <p className='opacity-40 mb-8'>Get newsletter update  for upcoming product and best discount for all item</p>
            <div>            
            <input placeholder='Your Email' className='border border-gray py-4 w-[20rem] px-5 rounded-3xl mr-5'/>
            <Link to="/" className='py-4 px-10 bg-black text-white font-semibold rounded-full text-sm '>Submit</Link>
            </div>

          </div>

          <div className='footer-box'>
            <h4 className='mb-5'>Product</h4>
            <ul className='text-gray-400'>
              <li>Tshirt</li>
              <li>Jacket</li>
              <li>Shoes</li>
              <li>Pants</li>
              <li>Sunglasses</li>
              <li>Tuxedo</li>
            </ul>
          </div>

          <div className='footer-box'>
            <h4 className='mb-5'>Categories</h4>
            <ul className='text-gray-400'>
              <li>Man</li>
              <li>Woman</li>
              <li>Kids</li>
              <li>Gift</li>
              <li>New Arrival</li>
            </ul>
          </div>

          <div className='footer-box'>
          <h4 className='mb-5'>Our Social Media</h4>
            <ul className='text-gray-400'>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>YouTube</li>
              <li>Twitter</li>
            </ul>
          </div>

        </div>
      </div>
      <div className='flex flex-col gap-2  md:grid md:grid-cols-[1.8fr,_.4fr,_.4fr,_.4fr] py-5 px-5 items-center bg-black text-white'>



  <div>
  <p>© 2023 Tulos Production</p>
</div>

<div><h5>Terms & Condition</h5></div>
<div><h5>Privacy Policy</h5></div>
<div><h5>Cookie Policy</h5></div>





</div>
    </footer>
  )
}

export default Footer