import React from 'react'
import './MissionSection.css'
// import Fade from 'react-reveal/Fade';
import ContactForm from '../contact/ContactForm'

import Mission from '../../assets/mission-img1.webp'
// import Staff from '../../assets/staff.jpg'
// import Clinic from '../../assets/clinic.jpg'
// import Work from '../../assets/employment-assistance.jpg'



const MissionSection = () => {
    return (
        <>


            <div className='missionSection container'>





                        <div className='missionSectionContent '>


                            <div>
                                <div className='missionSectionCaption'>
                                    <h1> OUR MISSION </h1>
                                    <p>We seek to provide the highest quality care for any addiction situation to create long-term sobriety in a safe and effective environment built on love, acceptance, and tolerance. We work every day to create addict programming that gives you the time and tools needed to live a sober life today, and then vigorously push you to fulfill your dreams tomorrow. </p>
                                </div>
                            
                            <div className='missionSectionFlex'>
                                <div className='flexLeftItem'>
                                    <h1><span>01. </span>Support <span> Group</span></h1>
                                    <p>Therapy and support groups for either addiction or mental health disorders</p>
                                </div>

                                <div className='flexLeftItem'>
                                    <h1><span>02. </span>Compassionate <span> Staff</span></h1>
                                    <p>Compassionate staff that is dedicated to your success</p>
                                </div>

                                <div className='flexLeftItem'>
                                    <h1><span>03. </span>Proven <span> Method</span></h1>
                                    <p>Evidence-based practices that give you the best chance of recovery</p>
                                </div>

                                <div className='flexLeftItem'>
                                    <h1><span>04. </span>Job <span> Assistance</span></h1>
                                    <p>Employment tools and resources to get you hired.</p>
                                </div>
                                </div>
                        </div>


                        <div className='flexRight'>
                            <div className='missionSectionRight'>
                                <img src={ Mission } alt="Woman Therapist" loading="lazy"/>
                            </div>
                        </div>


                </div>

            </div>


        {/* <div className='mission-section container'>
        <h1>YOUR HEALTH, OUR MISSION</h1>
        <p>We seek to provide the highest quality care for any addiction situation to create long-term sobriety in a safe and effective environment built on love, acceptance, and tolerance. We work every day to create addict programming that gives you the time and tools needed to live a sober life today, and then vigorously push you to fulfill your dreams tomorrow. </p>
            <div>
                <div className="content">
                            <div className='flex-right'>

                            <Fade top>
                    <div className='thumbnail'>
                        <img src={ Therapy } width="300" height="250" alt="Therapy Session" loading="lazy"/>
                        <div>                   
                        <p>Therapy and support groups for either addiction or mental health disorders</p>
                        </div>
                    </div>
                    </Fade>


                    <Fade bottom>
                    <div className='thumbnail'>
                    <img src={ Staff } width="300" height="250" alt="Clinic Staff" loading="lazy"/>
                    <p>Compassionate staff that is dedicated to your success</p>
                    </div>
                    </Fade>

                    <Fade top>
                    <div className='thumbnail'>
                    <img src={ Clinic } width="300" height="250" alt="Bluecross  Logo" loading="lazy"/>
                    <p>Evidence-based practices that give you the best chance of recovery</p>
                    </div>
                    </Fade>

                    <Fade bottom>
                    <div className='thumbnail'>
                    <img src={ Work } width="300" height="250" alt="People in Working Uniform" loading="lazy"/>
                        <p>Employment tools and resources to get you hired.</p>  
                    </div>
                    </Fade>                          

                    </div>
                </div>
            </div>
        </div> */}

        <ContactForm />

</>
    )
}

export default MissionSection
