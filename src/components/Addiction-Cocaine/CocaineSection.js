import React from 'react'
import { BsDot } from 'react-icons/bs';

import './CocaineSection.css'

const CocaineSection = () => {
  return (
    <>
      <div className='cocaine-section container'>
        <div className='cocaine-section-content'>

          <div className='cocaine-section-header'>
          <h1>Cocaine Addiction Treatment and Symptoms</h1>
              <p>Derived from the leaves of the coca plant most commonly grown in South America, cocaine is a highly addictive stimulant that affects the brain by elevating dopamine levels in your central nervous system. It is typically consumed by snorting (most common), injection, or smoking. <br/><br/>
              It is one of the most addictive drugs, as it only raises dopamine levels for a brief time (usually about 15-30 minutes), which quickly increases your tolerance and reprograms your brain’s reward system to crave more. <br/><br/>
              According to AddictionCenter.com, more people are admitted to emergency rooms for cocaine use than any other drug, and each day, approximately 1,800 Americans try cocaine for the first time.
              </p>
          </div>



          <div className='cocaine-section-flex'>

            <div className='cocaine-section-left'>
              <h1>Signs & Symptoms of Cocaine Addiction:</h1>

              <h5>Mental</h5>
                <ul>
                  <li><BsDot/> Paranoia</li>
                  <li><BsDot/> Irritability</li>
                  <li><BsDot/> Mood swings</li>
                  <li><BsDot/> Over-excitement</li>
                  <li><BsDot/> Violent behavior</li>
                  <li><BsDot/> Trouble sleeping</li>
                </ul>

                <h5>Physical</h5>
                <ul>
                  <li><BsDot/> Slurred speech</li>
                  <li><BsDot/> Blurred vision</li>
                  <li><BsDot/> Poor judgment </li>
                  <li><BsDot/> Slowed reaction time </li>
                </ul>
            </div>

            <div className='cocaine-section-right'>
              <img src='https://sunset-rehab.s3.us-west-1.amazonaws.com/fentanyl-addiction.jpg' alt="activities" />
            </div>
    </div>

    <div className='cocaine-section-header'>
              <h5>Personal</h5>
                <ul>
                  <li><BsDot/> Legal issues</li>
                  <li><BsDot/> Missing from work</li>
                  <li><BsDot/> Financial problems</li>
                  <li><BsDot/> Evading responsibilities</li>
                  <li><BsDot/> Being consistently late for work</li>
                </ul>
          </div>

          <div className='cocaine-section-header'>
          <h1>Effects of Cocaine Addiction</h1>
              <p>Cocaine use can particularly be strenuous on the heart and your body’s cardiovascular system, even causing death sometimes.<br/><br/>
              Combining stimulants can also lead to potentially deadly consequences, most seriously, overdose and death. A few common effects of cocaine addiction include:
              </p><br/>
              <ul>
                  <li><BsDot/> Stroke</li>
                  <li><BsDot/> Heart failure</li>
                  <li><BsDot/> Brain damage</li>
                  <li><BsDot/> Cardiac arrest</li>
                  <li><BsDot/> Sinus damage</li>
                  <li><BsDot/> Physical impairment</li>
                </ul>
                <h1>Cocaine Addiction Treatment Options</h1>
                <p>If you know someone coping with a cocaine addiction, there are options out there for those seeking treatment. Attentiveness and community support are crucial during the recovery phase, particularly during the early stages, as one experiences the physical symptoms of withdrawal. Some of the most effective ways to take on a cocaine addiction typically include:</p><br/>
                <ul>
                  <li><BsDot/> Behavioral therapy</li>
                  <li><BsDot/> Support groups (Cocaine Anonymous)</li>
                  <li><BsDot/> Counseling (Group & individual)</li>
                </ul>

          </div>


  </div>

</div>

    </>
  )
}

export default CocaineSection
