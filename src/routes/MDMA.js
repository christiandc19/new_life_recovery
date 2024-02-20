import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import MDMA from '../components/Addiction-MDMA/Mdma'
import MdmaSection from '../components/Addiction-MDMA/MdmaSection'
import ContactForm from '../components/contact/ContactForm'
import Insurance from '../components/insurance/InsuranceSection'


const Mdma = () => {
  return (
    <>
    <Navbar /> 
    <MDMA />
    <MdmaSection />
    <Insurance />
    <ContactForm />
    <Footer />
     </>
  )
}

export default Mdma