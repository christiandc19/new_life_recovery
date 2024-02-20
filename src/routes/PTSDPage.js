import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import PTSD from '../components/MH-PTSD/PTSD'
import PTSDSection from '../components/MH-PTSD/PTSDSection'
import ContactForm from '../components/contact/ContactForm'
import Insurance from '../components/insurance/InsuranceSection'


const Ptsd = () => {
  return (
    <>
    <Navbar /> 
    <PTSD />
    <PTSDSection />
    <Insurance />
    <ContactForm />
    <Footer />
     </>
  )
}

export default Ptsd