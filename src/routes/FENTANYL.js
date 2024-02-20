import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import FENTANYL from '../components/Addiction-Fentanyl/Fentanyl'
import FentanylSection from '../components/Addiction-Fentanyl/FentanylSection'
import ContactForm from '../components/contact/ContactForm'
import Insurance from '../components/insurance/InsuranceSection'


const Fentanyl = () => {
  return (
    <>
    <Navbar /> 
    <FENTANYL />
    <FentanylSection />
    <Insurance />
    <ContactForm />
    <Footer />
     </>
  )
}

export default Fentanyl