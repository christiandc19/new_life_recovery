import React from 'react'
import './MissionSection.css'
import ContactForm from '../contact/ContactForm'
import Mission from '../../assets/mission-img1.webp'



const MissionSection = () => {
    return (
        <>
            <div className='mission-section contianer'>

                                <div className='flex-left'>
                                    <div className='mission-section-header'>
                                        <h1> OUR MISSION </h1>
                                        <p>We seek to provide the highest quality care for any addiction situation to create long-term sobriety in a safe and effective environment built on love, acceptance, and tolerance. We work every day to create addict programming that gives you the time and tools needed to live a sober life today, and then vigorously push you to fulfill your dreams tomorrow. </p>
                                    </div>

                                    <h1><span>01. </span>Support <span> Group</span></h1>
                                    <p>Therapy and support groups for either addiction or mental health disorders</p>

                                    <h1><span>02. </span>Compassionate <span> Staff</span></h1>
                                    <p>Compassionate staff that is dedicated to your success</p>

                                    <h1><span>03. </span>Proven <span> Method</span></h1>
                                    <p>Evidence-based practices that give you the best chance of recovery</p>

                                    <h1><span>04. </span>Job <span> Assistance</span></h1>
                                    <p>Employment tools and resources to get you hired.</p>
                                </div>


                                <div className='flex-right'>
                                        <img src={ Mission} alt="Woman Therapist" loading="lazy"/>
                                </div>

                            </div>


        <ContactForm />

</>
    )
}

export default MissionSection
