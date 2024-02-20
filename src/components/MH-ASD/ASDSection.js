import React from 'react'

import './ASDSection.css'
import { FiCheck } from 'react-icons/fi';

const ASDSection = () => {
  return (
    <>
            <div className='asd-section container'>
              <div className='asd-section-content'>

                <div className='asd-section-header'>
                  <h1>ACUTE STRESS DISORDER</h1>
                  <p> Acute Stress Disorder (ASD) is your brain’s reaction to a traumatic event. Trauma can be direct or indirect. That is, the trauma that causes disorders like ASD can either be a direct, first-hand experience (ex. violence, harm, and sexual assault), or through indirect involvement in a traumatic event, for example, learning about the abrupt passing of a loved one. Acute Stress Disorder affects not just the individual, but also those nearest and dearest to them. If left untreated for an extended time, ASD can cause further development of other disorders.
                  </p>
                </div>

                <div className='asd-section-flex'>

                  <div className='asd-section-left'>
                  <h1>WHAT IS ASD?</h1>

                    <p>Trauma can be direct or indirect. That is, the trauma that causes ASD can either be a direct, first-hand experience (ex. violence, harm, and sexual assault), or through experiencing a traumatic event indirectly, like discovering the abrupt and unexpected passing of a loved one.<br/>Acute Stress Disorder affects not just you, the one coping with the trauma, but also those nearest and dearest to you. If left untreated for an extended amount of time, ASD can cause the development of other disorders and complications. 
                    </p>
                  </div>

                  <div className='asd-section-right'>
                    <img src='https://sunset-rehab.s3.us-west-1.amazonaws.com/mdma-addiction.jpg' alt="activities" />
                  </div>

                </div>


                <div className='asd-section-header'>
                    <h1>SIGNS AND SYMPTOMS OF ASD</h1>
                    <h5>MENTAL</h5>
                    <ul>
                      <li><FiCheck/>  Negative mood swings.</li>
                      <li><FiCheck/>  Inability to focus.</li>
                      <li><FiCheck/> Distortion of reality.</li>
                      <li><FiCheck/>  Psychologic distress.</li>
                      <li><FiCheck/> Flashbacks of the traumatic event.</li>
                      <li><FiCheck/> Avoiding certain related places, people, or memories.</li>
                    </ul>

                    <h5>PHYSICAL</h5>
                    <ul>
                      <li><FiCheck/>  Chest pain.</li>
                      <li><FiCheck/>  Headaches.</li>
                      <li><FiCheck/> Trouble sleeping.</li>
                      <li><FiCheck/>   Difficulty breathing.</li>
                      <li><FiCheck/> Heart palpitation.</li>
                    </ul>

                    <h5>BEHAVIOR</h5>
                    <ul>
                      <li><FiCheck/>  Dissociative symptoms (Numbness, Isolation, Disconnection from others).</li>
                      <li><FiCheck/>  Exaggerated response to external stimuli related to the event.</li>
                    </ul><br/>



                    <div className='asd-section-flex'>

                    <div className='asd-section-left'>
                    <h1>DETECTING ACUTE STRESS DISORDER</h1>
                      <p>Diagnosing ASD typically comes after displaying at least 9 of these symptoms consistently for 3 days and up to 1 month after the traumatic event:
                      </p>
                      <h5>RELATIONSHIP TO SELF</h5>
                        <ul>
                          <li><FiCheck/>  Trouble concentrating.</li>
                          <li><FiCheck/>  Avoiding distressing memories.</li>
                          <li><FiCheck/>  Memory loss of the traumatic event.</li>
                          <li><FiCheck/>  Avoiding external reminders of the traumatic event.</li>
                          <li><FiCheck/>   Recurring, involuntary memories of the traumatic event.</li>
                          <li><FiCheck/>  Consistent inability to experience positive emotions.</li>
                        </ul>
                    </div>

                    <div className='asd-section-right'>
                      <img src='https://sunset-rehab.s3.us-west-1.amazonaws.com/alcohol-addiction.jpg' alt="activities" />
                    </div>

                    </div>

                    <h5>RELATIONSHIP TO OTHERS</h5>
                        <ul>
                          <li><FiCheck/>  Hypervigilance.</li>
                          <li><FiCheck/>  Startled responses.</li>
                          <li><FiCheck/>  Angry outbursts/Lashing out.</li>
                        </ul>

                        <h5>RELATIONSHIP TO YOUR SORROUNDINGS</h5>
                        <ul>
                          <li><FiCheck/>  Altered perception of reality.</li>
                          <li><FiCheck/>  Recurring dreams of the event.</li>
                          <li><FiCheck/>  Exaggerated responses to loud stimuli.</li>
                          <li><FiCheck/>  Attempting to avoid any reminders of the event.</li>
                          <li><FiCheck/> Psychological or physical stress when reminded of the event.</li>

                        </ul>
                </div>
              </div>
            </div>

    </>
  )
}

export default ASDSection

