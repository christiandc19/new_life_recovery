import React from 'react'
import { FiCheck } from 'react-icons/fi';

import './AnxietySection.css'

const AnxietySection = () => {
  return (
    <>
            <div className='anxiety-section container'>
              <div className='anxiety-section-content'>

                <div className='anxiety-section-header'>
                  <h1>ANXIETY DISORDER</h1>
                  <p> As a normal reaction to stress, anxiety generally refers to the worry or fear related to the unknown, the future, or uncertain outcomes of situations. An anxiety disorder is more than just the everyday stress that the average person experiences. Anxiety disorders indicate deeper problems, and the symptoms of anxiety begin to affect your ability to function and cope with day-to-day life.<br/> <br/>Those with anxiety disorders look for drugs or alcohol to cope with day-to-day life. This can result in the worsening of symptoms, straining of relationships with others, and the obstruction of performing well at work or school.

                  </p>
                </div>

                <div className='anxiety-section-flex'>

                  <div className='anxiety-section-left'>
                  <h1>SIGNS AND SYMPTOMS OF ANXIETY DISORDER</h1>

                    <p>Although there are several individual anxiety disorders, there are some symptoms to look out for that may indicate the presence of one or multiple of these anxiety disorders.<br/><br/>
                    <ul>
                      <li><FiCheck/>  Panic attacks</li>
                      <li><FiCheck/>  Restlessness</li>
                      <li><FiCheck/> Trouble sleeping</li>
                      <li><FiCheck/>  Hyperventilation</li>
                      <li><FiCheck/> Constant worry or fear</li>
                      <li><FiCheck/> Interference in work, school, or personal relationships</li>
                      <li><FiCheck/> Avoiding things that trigger anxiety (certain places, things, people, etc.)</li>
                    </ul>
                    </p>
                  </div>

                  <div className='anxiety-section-right'>
                    <img src='https://sunset-rehab.s3.us-west-1.amazonaws.com/mdma-addiction.jpg' alt="activities" />
                  </div>

                </div>


                <div className='anxiety-section-header'>
                  <h1>EFFECTS OF ANXIETY DISORDER</h1>
                  <p> The effects of anxiety can be wide-ranging. Those dealing with an anxiety disorder may turn to substances like drugs and alcohol to cope with day-to-day life. This can result in the worsening of symptoms, straining of your personal relationships, and a decrease of your performance at school or on the job.
                  </p>


                  <h1>ANXIETY DISORDER TREATMENT</h1>
                  <p> With a solid plan and medical counseling, anxiety disorders don't have to dictate your quality of life. The right combination of treatment centers can be a great place to start. Common anxiety disorder treatments include:
                  <br/><br/>
                    <ul>
                      <li><FiCheck/>  Psychotherapy</li>
                      <li><FiCheck/>  Cognitive treatment</li>
                      <li><FiCheck/> Behavioral therapy</li>
                      <li><FiCheck/>  Lifestyle changes</li>
                      <li><FiCheck/> Anti-anxiety medication</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
   
    </>
  )
}

export default AnxietySection
