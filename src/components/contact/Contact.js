import React from "react";
import Fade from 'react-reveal/Fade';
import { MdPhoneCallback } from "react-icons/md";

import ContactForm from "./ContactForm";
import './Contact.css'


const Contact = () => {

    return (
      <>

<div className='contact-hero main-menu'>
            <div className="contact-hero-content">
            <Fade top>
                    <h1>HAVE SOME QUESTIONS?</h1>
            </Fade>
            <Fade right>
                  <p>Our Addiction and Recovery Support team is to assist you. </p>
                  <h2><span><MdPhoneCallback /></span> <a href="tel:4242530226">(424) 253-0226</a></h2>
            </Fade>
            </div>
     </div>

      <ContactForm />

      </>
    )
}

export default Contact