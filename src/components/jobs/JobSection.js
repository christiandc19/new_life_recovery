import React from 'react'
import './JobSection.css'

import wrapper1 from "../../assets/jobs.webp";

const JobSection = () => {
    return (
        <>



<div className="jobs-container">
        <div className="wrapper-content container">
          <div className="jobs-left">
            <img src={wrapper1} alt="nurse" loading="lazy" />
          </div>

          <div className="jobs-right">
            <h1>JOBS PROGRAM</h1> <br />
            <h2>
              <i>Get hired at a great company in recovery</i>
            </h2>
            <br />
            <p>We strive to assist participants to acquire the knowledge and skills needed to obtain self-sufficiency through the enhancement of their capacity for civic engagement, community leadership by securing meaningful and gratifying employment that will empower themselves, their families, which will create stronger and safer communities.  
        <br /> <br />
        Our jobs program starts with getting an ID, to helping with a resume, to coaching for the interview, transportation to the actual work site, and coaching on how to keep the job and appropriate behavior. Work is NOT an option.  </p><br />

        <div className='job-link'>
        <p>For more information for our Jobs Program, visit <a href='https://www.transitionsfortomorrow.org/'>here.</a></p>
        </div>
          </div>
        </div>
      </div>

        </>
    )
}

export default JobSection
