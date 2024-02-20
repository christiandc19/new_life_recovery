import React from 'react'
import './CommunitySection.css'

import wrapper1 from "../../assets/community_section.webp";
import { FaExternalLinkAlt } from "react-icons/fa";
const CommunitySection = () => {
    return (
        <>



<div className="community-section-container">

    <div className='commumity-header container'>
      <p>Addiction recovery communities refer to groups, organizations, or networks that offer support, guidance, and a sense of belonging to individuals recovering from addiction. These communities can take various forms, ranging from support groups like Alcoholics Anonymous (AA) or Narcotics Anonymous (NA) to sober living homes, rehab facilities, online forums, and other peer support networks.</p>
    </div>


        <div className="community-section-content container">
          <div className="community-section-left">
            <img src={wrapper1} alt="nurse" loading="lazy" />
          </div>

          <div className="community-section-right">

            <span><FaExternalLinkAlt /> </span><a href='https://vimeo.com/677765975' target="_blank" rel="noreferrer">What is a Recovery Community Organization (RCO)?</a> <br/>

            <span><FaExternalLinkAlt /> </span><a href='https://calrecovery.org/rco/' target="_blank" rel="noreferrer">About Recovery Community Organizations and ARCC</a> <br/>

            <span><FaExternalLinkAlt /> </span><a href='https://calrecovery.org/' target="_blank" rel="noreferrer">Addiction Recovery Communities of California</a> <br/>

            <span><FaExternalLinkAlt /> </span><a href='https://calrecovery.org/freestyle-recovery/' target="_blank" rel="noreferrer">Freestyle Recovery</a> <br/>

            <span><FaExternalLinkAlt /> </span><a href='https://www.recoveryanswers.org/research-post/recovery-community-centers-associated-with-well-being/' target="_blank" rel="noreferrer">Recovery community centers: Is participation in these newer recovery support services associated with better functioning and quality of life?</a> <br/>

            <span><FaExternalLinkAlt /> </span><a href='https://www.recoveryanswers.org/research-post/study-recovery-community-organization-participants-peer-based-recovery-support-modest-improvement-recovery-capital/' target="_blank" rel="noreferrer">Study of recovery community organization participants over time shows peer-based recovery support activities are associated with modest improvement in recovery capital</a> <br/>

            <span><FaExternalLinkAlt /> </span><a href='https://r1learning.com/r1-recoverycapital' target="_blank" rel="noreferrer">R1 Recovery Capital Solutions. Actionable Strengths-based Tools for Improving Outcomes</a>
          </div>
        </div>
        <div className='commumity-header container'>
        <p>These communities provide a sense of belonging, understanding, and shared experiences among people who are in recovery or seeking recovery from addiction. The primary goal is to create a supportive environment that promotes sobriety, personal growth, and positive lifestyle changes.</p>
        </div>

      </div>

        </>
    )
}

export default CommunitySection
