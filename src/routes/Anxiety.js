import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import ANXIETY from '../components/MH-Anxiety/Anxiety'
import AnxietySection from '../components/MH-Anxiety/AnxietySection'
import Insurance from '../components/insurance/InsuranceSection'
import ContactForm from '../components/contact/ContactForm'


const Anxiety = () => {
  return (
    <>
    <Navbar /> 
    <ANXIETY />
    <AnxietySection />
    <Insurance />
    <ContactForm />
    <Footer />
     </>
  )
}

export default Anxiety