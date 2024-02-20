import React from 'react'
import Fade from 'react-reveal/Fade';

import './Jobs.css'
import JobSection from '../../components/jobs/JobSection'
import Contact2 from '../contact/Contact2'

const Jobs = () => {
    return (
        <>
        <div className='jobs submenu'>

                <div className="jobs-content">
                    <Fade top>
                    <h1>EMPLOYMENT ASSISTANCE</h1>
                    </Fade>
                </div>
            </div>
        <JobSection />
        <Contact2 />
        </>
    )
}

export default Jobs