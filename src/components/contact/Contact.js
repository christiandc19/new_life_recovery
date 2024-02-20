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
                  <h2><span><MdPhoneCallback /></span> <a href="tel:2135844445">(213) 584-4445</a></h2>
            </Fade>
            </div>
     </div>

      <ContactForm />

      </>
    )
}

export default Contact