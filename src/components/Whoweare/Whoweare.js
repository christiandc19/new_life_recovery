import React from 'react'
import './Whoweare.css'
import Fade from 'react-reveal/Fade';

import { BsCheckLg } from 'react-icons/bs';
import WhoWeAre from '../../assets/peaceful-man.webp'
import leaf2 from "../../assets/leaf.webp";


const Whoweare = () => {
  return (
<>

<div className='homeSection2 '>
        <div className='homeSection2-content container'>

        <Fade left>
            <div className='homeSection2-left'>

            <h1>ABOUT NEW LIFE RECOVERY</h1>
                <h2>Empowering Minds, Healing Lives: Your Path to Wellness Begins Here.</h2>
                <p>At New Life Recovery, we provide safe and comfortable medical detox services for those struggling with addiction.</p> 
                             
                <div className='checklist'>
                    <div className='homeSection2-icon'><BsCheckLg />
                    </div>
                    <div>
                        <p>A comprehensive medical assessment by a doctor to create an        individualized treatment plan.</p>
                    </div>
                </div>    
                <br />
                <div className='checklist'>
                    <div className='homeSection2-icon'><BsCheckLg />
                    </div>
                    <div>
                        <p>Urine tests and other lab tests.</p>
                    </div>
                </div>     
                <br />
                <div className='checklist'>
                    <div className='homeSection2-icon'><BsCheckLg />
                    </div>
                    <div>
                        <p> The doctor prescribes a series of personalized medications to reduce the severity of withdrawal symptoms, slowly tapering off over time.</p>
                    </div>
                </div>                       
            </div>
        </Fade>

        <Fade right>
            <div className='homeSection2-right'>
                    <img src={WhoWeAre} loading="lazy" alt='psychologist'/>
                    <div className="leaf2">
                        <img src={leaf2} alt="leaf" loading="lazy" />
                    </div>
            </div>
        </Fade>

        </div>

      </div>


</>
  )
}

export default Whoweare