import React from 'react'
import Header from './Header'
import Banner from './Banner'
import Footer from './Footer'
import NewCollection from './NewCollection'

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
        <Footer/>

    </>
  )
}

export default Homepage