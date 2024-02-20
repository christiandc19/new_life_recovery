import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import TEAM from '../components/team/Team'
import TEAMSECTION from '../components/team/TeamSection'
import ContactForm from '../components/contact/ContactForm'


const Team = () => {
  return (
    <>
    <Navbar /> 
    <TEAM />
    <TEAMSECTION />
    <ContactForm />
    <Footer />
     </>
  )
}

export default Team