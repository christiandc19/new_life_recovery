import React from 'react'
import './TeamSection.css'
import Zoom from 'react-reveal/Zoom';


import Ashley from '../../assets/Ashley.webp'
import Anthony from '../../assets/Anthony.webp'
import Imelda from '../../assets/Imelda.webp'


const TeamSection = () => {
    return (
        <>
        <div className='team-main'>
        <div className='team-section container'>
        <h1>MEET THE CORE</h1>
        <p>At New Life Recovery, we believe in the power of a dedicated and caring team to support individuals on their path to recovery from mental health and substance abuse challenges. Get to know the compassionate professionals who are here to guide and assist you every step of the way</p>
            <div>
                <div className="content">

                    <div className='team-right'>
                    <Zoom duration={1000}>
                    <div className='team-thumbnail'>
                        <img src={ Ashley } alt="Ashley" loading="lazy"/>
                        <div>                   
                        <p><b>Ashley Shelton</b><br/><i>Clinical Director</i></p>
                        </div>
                    </div>
                    </Zoom>

                    <Zoom duration={1000}>
                    <div className='team-thumbnail'>
                    <img src={ Anthony } alt="Anthony" loading="lazy"/>
                        <p><b>Anthony Raines</b><br/><i>Lead Case Manager</i></p>  
                    </div>
                    </Zoom>    

                    <Zoom duration={1000}>
                    <div className='team-thumbnail'>
                    <img src={ Imelda } alt="Imelda" loading="lazy"/>
                        <p><b>Imelda Medina</b><br/><i>Lead Nurse</i></p>  
                    </div>
                    </Zoom>                 


                    </div>
                </div>
            </div>
        </div>


</div>

</>
    )
}

export default TeamSection
