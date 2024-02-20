import React from 'react'
import { FiCheck } from 'react-icons/fi';

import './DepressionSection.css'

const DepressionSection = () => {
  return (
    <>
            <div className='depression-section container'>
              <div className='depression-section-content'>

                <div className='depression-section-header'>
                  <h1>DEPRESSION</h1>
                  <p> A common but serious mood disorder, depression can affect one’s overall behavior, sleep, eating, or ability to perform day-to-day tasks and obligations. There are several types of depression, but the most commonly diagnosed is Major Depressive Disorder (or Clinical Depression).
                  Depression can occur in people from all walks of life, including those that suffer from Bipolar Disorder, and during or after pregnancy for females.<br/>It is much more than just feeling sad or having a bad day. Everyone experiences that.<br/><br/>According to the CDC.gov, 1 in 6 adults experience depression, but it can happen to any age and any person. Many people with depression also suffer from other medical issues.Ranked as the third cause of Major depressive disorder (MDD) is the most severe form of depression. The most severe cases of MDD can result in suicide. There is clinical depression, and then there is Major Depressive Disorder.<br/><br/></p>
                </div>

                <div className='depression-section-flex'>

                  <div className='depression-section-left'>
                    <p>Symptoms of Major Depressive Disorder include:<br/><br/>
                    </p>
                    <ul>
                      <li><FiCheck/>  Angry outbursts/Irritability</li>
                      <li><FiCheck/>  Loss of interest in favorite activities</li>
                      <li><FiCheck/> Fatigue</li>
                      <li><FiCheck/>  Anxiety/Agitation/Restlessness</li>
                      <li><FiCheck/> Trouble sleeping</li>
                      <li><FiCheck/> Slowed thinking, speaking, and moving</li>
                      <li><FiCheck/> Trouble concentrating and remembering</li>
                      <li><FiCheck/> Unexplained physical ailments</li>
                      <li><FiCheck/> Suicidal thoughts/Thoughts of death</li>
                      <li><FiCheck/> Feeling worthless, guilt, and/or self-blame</li>
                    </ul>
                  </div>

                  <div className='depression-section-right'>
                    <img src='https://sunset-rehab.s3.us-west-1.amazonaws.com/mdma-addiction.jpg' alt="activities" />
                  </div>

                </div>
              </div>
            </div>
    </>
  )
}

export default DepressionSection
