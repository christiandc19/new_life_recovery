import React from 'react'
import { FiCheck } from 'react-icons/fi';

import './SchizoaffectiveSection.css'

const SchizoaffectiveSection = () => {
  return (
<>
            <div className='schizoaffective-section container'>
              <div className='schizoaffective-section-content'>

                <div className='schizoaffective-section-flex'>

                  <div className='schizoaffective-section-left'>
                    <h1>SCHIZOAFFECTIVE DISORDER</h1>
                    <p>Schizoaffective is a disorder characterized as delusions or hallucinations present, accompanied by mood disorder symptoms, either:</p><br/>
                    <ul>
                      <li><FiCheck/>  Bipolar (episodes of mania and occasional depression)</li>        
                      <li><FiCheck/>   Depressive (depression episodes)</li>           
                    </ul><br/>
                    <p>Schizoaffective episodes tend to vary in length, with some people having repeated episodes. If left untreated, schizoaffective can lead to social problems or difficulties at work and school.<br/><br/>This can lead to further problems, like a profound sense of loneliness and setbacks in your professional and personal life (difficulty keeping a job, or even performing daily functions).</p>
                  </div>

                  <div className='schizoaffective-section-right'>
                    <img src='https://sunset-rehab.s3.us-west-1.amazonaws.com/fentanyl-addiction.jpg' alt="activities" />
                  </div>
                </div>
              </div>
            </div>

</>
  )
}

export default SchizoaffectiveSection
