import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import ANGERDISORDER from '../components/MH-AngerDisorder/AngerDisorder'
import AngerDisorderSection from '../components/MH-AngerDisorder/AngerDisorderSection'
import ContactForm from '../components/contact/ContactForm'
import Insurance from '../components/insurance/InsuranceSection'


const AngerDisorder = () => {
  return (
    <>
    <Navbar /> 
    <ANGERDISORDER />
    <AngerDisorderSection />
    <Insurance />
    <ContactForm />
    <Footer />
     </>
  )
}

export default AngerDisorder