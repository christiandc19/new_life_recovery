import React from 'react'
import ContactForm from '../contact/ContactForm'
import Fade from 'react-reveal/Fade';

import './ResidenceSection.css'


const ResidenceSection = () => {
  return (
<>
<div className='residence-section'>

<div className="residence-section-header container">
                <h1>OUR HOMES</h1><br/>
                <p>Welcome to our New Life Recovery Sober Living Community, where hope, support, and transformation flourish. We understand that the journey to recovery is a profound and courageous one. Our mission is to provide a safe, nurturing environment where individuals can rebuild their lives, rediscover their potential, and embrace a future free from addiction.
                </p>
</div>



<div className='residence-section-flex container'>

  <div className='residence-section-flex-left'>
      <h5>Safe Haven</h5>
      <p>Our serene, well-maintained residences offer a tranquil haven for your recovery journey. Each location is carefully selected to provide a peaceful environment conducive to healing.</p>

      <h5>Structured Support</h5>
      <p>Our structured daily routines include group meetings, therapy sessions, and recreational activities. This framework helps you build healthy habits and create a stable foundation for the future.</p>

      <h5>Peer Community</h5>
      <p>Connect with like-minded individuals who are on similar paths towards recovery. Sharing experiences, offering support, and celebrating achievements are integral parts of our community.</p>

  </div>

  <div className='residence-section-flex-right'>
      <img src="https://rodeo-recovery.s3.us-west-1.amazonaws.com/rodeo_recovery_medias/home1.png" alt="Home" loading="lazy"/>
  </div>

</div>



<div className='residence-section-flex container wrap-reverse'>

  <div className='residence-section-flex-left2'>

      <img src="https://rodeo-recovery.s3.us-west-1.amazonaws.com/rodeo_recovery_medias/home2.png" alt="Home" loading="lazy"/>
  </div>

  <div className='residence-section-flex-right2'>
      <h5>Professional Guidance</h5>
      <p>Our experienced staff includes licensed therapists, counselors, and recovery coaches who are passionate about helping you navigate the challenges of early recovery.</p>

      <h5>Life Skills Development</h5>
      <p>We offer workshops and resources to help you develop essential life skills such as budgeting, time management, and effective communication. These skills are crucial for long-term success.</p>

      <h5>Holistic Wellness</h5>
      <p>Embracing sobriety is not just about abstaining from substances; it's about nurturing your mind, body, and spirit. We offer yoga, meditation, fitness classes, and nutrition guidance to support your overall well-being.</p>
  </div>

</div>







<div className='ResidenceSection-flex container'>


                    <Fade left>
                    <div className='thumbnail'>
                    <img src="https://rodeo-recovery.s3.us-west-1.amazonaws.com/rodeo_recovery_medias/home3.png"  alt="Home" loading="lazy"/>
                    </div>
                    </Fade>

                    <Fade right>
                    <div className='thumbnail'>
                    <img src="https://rodeo-recovery.s3.us-west-1.amazonaws.com/rodeo_recovery_medias/home4.png"  alt="Home" loading="lazy"/>
                    </div>
                    </Fade>                 

                    <Fade left>
                    <div className='thumbnail'>
                    <img src="https://rodeo-recovery.s3.us-west-1.amazonaws.com/rodeo_recovery_medias/home5.png"  alt="Home" loading="lazy"/>
                    </div>

                    </Fade>                          
                    <Fade right>
                    <div className='thumbnail'>
                    <img src="https://rodeo-recovery.s3.us-west-1.amazonaws.com/rodeo_recovery_medias/home6.png"  alt="Home" loading="lazy"/>
                    </div>
                    </Fade>                          

                    <Fade left>
                    <div className='thumbnail'>
                    <img src="https://rodeo-recovery.s3.us-west-1.amazonaws.com/rodeo_recovery_medias/home7.png"  alt="Home" loading="lazy"/>
                    </div>
                    </Fade>   

                    <Fade right>
                    <div className='thumbnail'>
                    <img src="https://rodeo-recovery.s3.us-west-1.amazonaws.com/rodeo_recovery_medias/home8.png"  alt="PHome" loading="lazy"/>
                    </div>
                    </Fade>  

                    </div> 

                    <div className="residence-section-header container">
                    <h1>Get in Touch</h1><br/>
                    <p>Are you ready to take the next step towards a fulfilling, sober life? Reach out to us today to learn more about our Sober Living Community and how we can support you on your journey to lasting recovery.
                    </p>
</div>
</div>

<ContactForm />

    </>
  )
}

export default ResidenceSection
