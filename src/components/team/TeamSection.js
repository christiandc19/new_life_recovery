import React from 'react'
import './TeamSection.css'
import Fade from 'react-reveal/Fade';


import Ashley from '../../assets/Ashley.webp'
import Honey from '../../assets/Honey.webp'
import Anthony from '../../assets/Anthony.webp'
import Imelda from '../../assets/Imelda.webp'


const TeamSection = () => {
    return (
        <>
        <div className='team-main'>
        <div className='team-section container'>
        <h1>MEET THE CORE</h1>
        <p>We seek to provide the highest quality care for any addiction situation to create long-term sobriety in a safe and effective environment built on love, acceptance, and tolerance. We work every day to create addict programming that gives you the time and tools needed to live a sober life today, and then vigorously push you to fulfill your dreams tomorrow. </p>
            <div>
                <div className="content">

                    <div className='team-right'>
                    <Fade top>
                    <div className='team-thumbnail'>
                        <img src={ Ashley } alt="Ashley" loading="lazy"/>
                        <div>                   
                        <p><b>Ashley Shelton</b><br/><i>Clinical Director</i></p>
                        </div>
                    </div>
                    </Fade>


                    <Fade top>
                    <div className='team-thumbnail'>
                    <img src={ Honey } alt="Honey" loading="lazy"/>
                    <p><b>Honey Phipps</b><br/><i>Executive Director</i></p>
                    </div>
                    </Fade>


                    <Fade bottom>
                    <div className='team-thumbnail'>
                    <img src={ Anthony } alt="Anthony" loading="lazy"/>
                        <p><b>Anthony Raines</b><br/><i>Lead Case Manager</i></p>  
                    </div>
                    </Fade>    

                    <Fade bottom>
                    <div className='team-thumbnail'>
                    <img src={ Imelda } alt="Imelda" loading="lazy"/>
                        <p><b>Imelda Medina</b><br/><i>Lead Nurse</i></p>  
                    </div>
                    </Fade>                 


                    </div>
                </div>
            </div>
        </div>


</div>

</>
    )
}

export default TeamSection
