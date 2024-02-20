import React from 'react'
import './AlcoholSection.css'
import { FiCheck } from 'react-icons/fi';

const AlcoholSection = () => {
  return (
<>
<div className='alcohol-section container'>
    <div className='alcohol-section-header'>
        <h1>ALCOHOLISM</h1>
        <p>The most acute form of alcohol abuse, alcoholism is the inability to manage one’s drinking habits. If left untreated, even the smallest amount of alcohol abuse can quickly spiral out of control.
        <br/> <br/> Alcoholism (also referred to as ‘alcohol use disorder’, or AUD) is a disease. Consistent alcohol abuse over time can negatively impact career goals, personal relationships, and responsibilities, not to mention your physical health.</p>
    </div>

  <div className='alcohol-section-content'>
    <div className='alcohol-section-flex'>

      <div className='alcohol-section-left'>
        <h1>Warning Signs</h1>
        <ul>
          <li><FiCheck/> Constant craving for more alcohol</li>
          <li><FiCheck/> Prioritizing alcohol over other responsibilities</li>
          <li><FiCheck/> Drinking more to avoid withdrawal (increased tolerance)</li>
        </ul>
        <h1>Effects of Alcoholism</h1>
        <p>Despite being legal to purchase and widely culturally accepted, there are still many harmful side effects of alcohol abuse.<br/><br/>In the short term, excessive amounts of alcohol can impair your judgment and motor functions. Consistent alcohol abuse over time can lead to an increased risk of long-term health complications.</p>
        <h1>Short-Term</h1>
        <ul>
          <li><FiCheck/> Slurred speech</li>
          <li><FiCheck/> Blurred vision</li>
          <li><FiCheck/> Poor judgment </li>
          <li><FiCheck/> Slowed reaction time </li>
        </ul>
      </div>

      <div className='alcohol-section-right'>
        <img src='https://sunset-rehab.s3.us-west-1.amazonaws.com/cocaine-addiction.jpg' alt="activities" />
       </div>

    </div>

    <div className='alcohol-section-header'>
        <h1>Long-Term</h1>
        <ul>
          <li><FiCheck/> Heart disease</li>
          <li><FiCheck/> Brain damage</li>
          <li><FiCheck/> Organ failure </li>
          <li><FiCheck/> Increased cancer risk </li>
        </ul>
        <h1>Alcohol Addiction Treatment Options</h1>
        <p>If you struggle with alcohol use disorder, there are resources out there to help you seek treatment and work towards long-term healing. Overcoming alcoholism typically involves three key stages of recovery:</p><br/>
        <ul>
          <li><b>Detoxification </b>The first step in recovery is to rid yourself of the dependency on alcohol. Due to the physical discomfort of withdrawal, medical professionals may be involved at this stage. </li><br/>
          <li><b>Rehabilitation </b>Once you detox fully, the rehabilitation process begins. </li><br/>
          <li><b>Maintenance </b>Recovery programs, counseling, and support meetings are a few effective next steps toward long-term sobriety.  </li><br/>
        </ul>

    </div>



  </div>

</div>

    </>
  )
}

export default AlcoholSection
