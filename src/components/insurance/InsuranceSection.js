import React from 'react'
import Fade from 'react-reveal/Fade';
import './InsuranceSection.css'

import Aetna from '../../assets/aetna.webp'
import Beacon from '../../assets/beacon.webp'
import Bluecross from '../../assets/bluecross.webp'
import Cigna from '../../assets/cigna.webp'
import Horizon from '../../assets/horizon.webp'
import Anthem from '../../assets/anthem.webp'



const InsuranceInsert = () => {
    return (
        <>
        <div className='InsuranceSection'>
            <div className="InsuranceSection-container">
                <div>
                <h1>WE WORK WITH MAJOR INSURANCE</h1>
                <p>If you don’t see your insurance provider below, please reach out to us to find a way to assist you further.</p>
                </div>
                <div className="content container">
                            <Fade bottom>
                                <div className='insurance-thumbnail'>
                                <img src={Aetna}  alt="Aetna Insurance Logo" loading="lazy"/>
                                </div>
                            </Fade>


                            <Fade bottom>
                                <div className='insurance-thumbnail'>
                                <img src={Beacon} alt="Beacon Insurance Logo" loading="lazy"/>
                                </div>
                            </Fade>

                            <Fade bottom>
                                <div className='insurance-thumbnail'>
                                <img src={Bluecross} alt="Bluecross Insurance Logo" loading="lazy"/>
                                </div>
                            </Fade>

                            <Fade bottom>
                                <div className='insurance-thumbnail'>
                                <img src={Cigna} alt="Cigna Insurance Logo" loading="lazy"/>
                                </div>
                            </Fade>

                            <Fade bottom>
                                <div className='insurance-thumbnail'>
                                <img src={Horizon} alt="Horizon Insurance Logo" loading="lazy"/>
                                </div>
                            </Fade>

                            <Fade bottom>
                                <div className='insurance-thumbnail'>
                                <img src={Anthem}  alt="Optum Health Insurance Logo" loading="lazy"/>
                                </div>
                            </Fade>
                </div>
            </div>
        </div>



        </>
    )
}

export default InsuranceInsert
