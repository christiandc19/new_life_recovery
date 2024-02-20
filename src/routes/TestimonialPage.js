import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Testimonials from '../components/testimonials/Testimonials'
import TestimonialsSection from '../components/testimonials/TestimonialsSection'
import ContactForm from "../components/contact/ContactForm";



const TestimonialPage = () => {
  return (
    <>
           <Navbar /> 
           <Testimonials />
            <TestimonialsSection />
            <ContactForm />
           <Footer />

    </>
  )
}

export default TestimonialPage
