import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import RESIDENCE from '../components/residence/Residence'
import ResidenceSection from '../components/residence/ResidenceSection'


const Residence = () => {
  return (
    <>
    <Navbar /> 
    <RESIDENCE />
    <ResidenceSection />
    <Footer />
     </>
  )
}

export default Residence