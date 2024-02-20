import React from 'react'
import { FiCheck } from 'react-icons/fi';

import './AdhdSection.css'

const AdhdSection = () => {
  return (
<>
<div className='adhd-section container'>
              <div className='adhd-section-content'>

                <div className='adhd-section-header'>
                  <h1>ADHD</h1>
                  <p> Attention-deficit/hyperactivity disorder (commonly known as ADHD) is a chronic condition characterized by a lack of attention and focus, and increased impulsive behavior. It often begins early in life and can continue into adulthood. ADHD in children can lead to developmental issues and learning complications.
                  Although the behaviors of one with ADHD may not seem dangerous, there can be very real consequences to a state of mind like this, and ADHD can lead to problems with relationships with friends and family or performance at work or school.
                  </p>
                </div>

                <div className='adhd-section-flex'>

                  <div className='adhd-section-left'>
                    <p>People with ADHD display a persistent pattern of impulsive hyperactivity and/or an inability to focus on any one thing for too long.<br /><br />The causes of ADHD still aren’t clear, but current research suggests that genetics play a significant role in ADHD cases. There are other possible causes for hyperactivity and inattention wholly unrelated to ADHD: <br /><br />
                    <ul>
                      <li><FiCheck/>  Brain injuries</li>
                      <li><FiCheck/>  Premature birth</li>
                      <li><FiCheck/> Fatigue</li>
                      <li><FiCheck/>  Exposure to harsh chemicals during pregnancy.</li>
                    </ul>

                    </p>
                  </div>

                  <div className='adhd-section-right'>
                    <img src='https://sunset-rehab.s3.us-west-1.amazonaws.com/xanax-addiction.jpg' alt="activities" />
                  </div>

                </div>


                <div className='adhd-section-header'>
                    <h1>SIGNS AND SYMPTOMS OF ASD</h1>
                    <p>There are many other issues with similar symptoms of ADHD. Sleep disorders, depression, anxiety, and even some learning disabilities can look very similar to ADHD and even have similar symptoms. A few common symptoms that could signify ADHD:</p>
                    <h5>MENTAL</h5>
                    <ul>
                      <li><FiCheck/>  Forgetfulness.</li>
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

                    <h5>PERSONAL</h5>
                    <ul>
                      <li><FiCheck/>   Impatience.</li>
                      <li><FiCheck/>  Disagreeable towards others.</li>
                      <li><FiCheck/>   Unable to resist temptation.</li>
                      <li><FiCheck/>    Losing & misplacing things.</li>
                    </ul><br/>



                    <div className='adhd-section-flex'>

                    <div className='adhd-section-left'>
                    <h1>INATTENTION</h1>
                      <p>Inattention can take many forms. Generally, inattention can be characterized by difficulty in following instructions, making careless mistakes, missing important details, and not appearing to listen to others.<br/><br/>For these reasons, those with ADHD may find it difficult to focus at school and work, leading to other related issues like maintaining good grades and meeting deadlines.<br/><br/>With ADHD, you may have trouble with organizing and executing tasks and priorities, lose objects at a heightened rate, and become easily distracted by external stimuli or by your thoughts.
                      </p>
                    </div>

                    <div className='adhd-section-right'>
                      <img src='https://sunset-rehab.s3.us-west-1.amazonaws.com/alcohol-addiction.jpg' alt="activities" />
                    </div>

                    </div>
                </div>
              </div>
            </div>
    </>
  )
}

export default AdhdSection
