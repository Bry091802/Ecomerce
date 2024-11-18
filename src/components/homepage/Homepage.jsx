import React from 'react'
import Header from './Header'
import Banner from './Banner'
import Footer from './Footer'
import NewCollection from './NewCollection'
import BottomBanner from './BottomBanner'
import BottomCollection from './BottomCollection'

const Homepage = () => {
  return (  
    <>
        <Header/>
        <Banner
        img="banner.jpg"
        header="tolus spring collection"
        subheader="Find out our best spring collection. Offering our best quality product in a Tolus Spring Collection"
        />
        <NewCollection/>
        <BottomBanner
        img="secondbanner.png"
        header="wear to wedding"
        subheader="A symphony of exquisite designs tailored for your unforgettable moments"
        btn="See Details"
        />
        <BottomCollection/>
        <Footer/>

    </>
  )
}

export default Homepage