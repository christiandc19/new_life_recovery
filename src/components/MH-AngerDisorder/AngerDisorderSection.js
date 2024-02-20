import React from 'react'
import './AngerDisorderSection.css'

import { FiCheck } from 'react-icons/fi';


const AngerDisorderSection = () => {
  return (
<>

<div className='anger-section container'>
              <div className='anger-section-content'>
                <div className='anger-section-header'>
                  <h1>INTERMITTENT EXPLOSIVE DISORDER</h1>
                  <p> The most significant factor which can determine Intermittent Explosive Disorder is that the reaction exceeds the circumstances, and should be disproportionate to the appropriate amount of anger.<br/><br/>
                  The behavior pattern can be not only detrimental to your life and goals but also to the safety of those around you. Relationships can be strained and school or work performance is affected as well.
                  </p>
                </div>

                <div className='anger-section-flex'>

                  <div className='anger-section-left'>
                    <p>Most common in people under 35, Intermittent Explosive Disorder (IED), is a chronic mental health disorder characterized by impulsive, violent, and aggressive behavior, often culminating in verbal and physical outbursts of rage. A few of the most common examples of IED ‘attacks’ or ‘spells’ can include:<br/><br/>
                    <ul>
                      <li><FiCheck/>  Negative mood swings.</li>
                      <li><FiCheck/>  Inability to focus.</li>
                      <li><FiCheck/> Distortion of reality.</li>
                      <li><FiCheck/>  Psychologic distress.</li>
                      <li><FiCheck/> Flashbacks of the traumatic event.</li>
                      <li><FiCheck/> Avoiding certain related places, people, or memories.</li>
                    </ul>

                    </p>
                  </div>

                  <div className='anger-section-right'>
                    <img src='https://sunset-rehab.s3.us-west-1.amazonaws.com/heroin-addiction.jpg' alt="activities" />
                  </div>
                </div>
              </div>
            </div>


</>
  )
}

export default AngerDisorderSection
