import React from 'react'
import { FiCheck } from 'react-icons/fi';

import './BipolarDisorderSection.css'

const BipolarDisorder = () => {
  return (
    <>
            <div className='bipolar-section container'>
              <div className='bipolar-section-content'>
                <div className='bipolar-section-header'>
                  <h1>BIPOLAR DISORDER</h1>
                  <p> Also known as manic depression, bipolar disorder is a mental health condition in which one suffers extreme mood swings (mania/hypomania to lows/depression). Episodes of mania may create feelings of euphoria, energy, or irritability.
                  </p>
                </div>

                <div className='bipolar-section-flex'>

                  <div className='bipolar-section-left'>
                    <p>Episodes of bipolar depression can include symptoms of:<br/><br/>
                    <ul>
                      <li><FiCheck/>  Sadness.</li>
                      <li><FiCheck/>  Hopelessness.</li>
                      <li><FiCheck/> Loss of pleasure/interest in activities.</li>
                      <li><FiCheck/>  Psychologic distress.</li>
                      <li><FiCheck/> Stress.</li>
                      <li><FiCheck/> Drug use.</li>
                      <li><FiCheck/> Alcohol abuse.</li>
                      <li><FiCheck/> Irregular sleep patterns.</li>
                    </ul>
                    Although these mood swings aren’t frequent, they can cause changes to energy levels, sleep, judgment, decision-making, and overall behavior.

                    </p>
                  </div>

                  <div className='bipolar-section-right'>
                    <img src='https://sunset-rehab.s3.us-west-1.amazonaws.com/meth-addiction.jpg' alt="activities" />
                  </div>
                </div>
              </div>
            </div>

    </>
  )
}

export default BipolarDisorder
