import React from 'react'
import './TreatmentPlan.css'
import TREATMENTPLAN from "../../assets/treatment-plan.webp";
import { AiFillCheckCircle } from "react-icons/ai";

const TreatmentPlan = () => {
  return (
    <>
      
        <div className='treatmentPlan'>

            <div className='treatmentPlan-content container'>
                
                <div className='treatment-header'>
                <h1>Treatment Plan</h1>
                <p>All treatment clients will have a recovery/treatment plan developed within 30 days of admission. Measurement and re-assessment of treatment plan progress happen on a weekly basis through the weekly summary. In the weekly summary, the drug and alcohol counselor will ensure that action steps to be taken by client or counselor are on target and that the action step achievements will enable resolution of the objective. All treatment plans are reviewed by and signed off on by the clinical director.</p>
                </div>

                
                <div className='treatmentPlan-flex'>

                    <div className='treatmentPlan-left'>
                        <img src={TREATMENTPLAN} alt="activities" />
                    </div>

                    <div className='treatmentPlan-right'>
                    <p>
                    The treatment plan will be developed between client and counselor
                    from key information gleaned from the assessment and intake
                    process. This treatment plan will be goal and action oriented with
                    objective and measurable criteria. Each treatment plan will have a
                    statement of problem(s) with which the client identifies,
                    statement of objectives to be reached that addressees each
                    problem, action steps for client and counselor to ensure that
                    objective will be completed.
                    <br />
                    <br />
                    Counselor and client will work together to compose a treatment
                    plan with clear objectives and goals based on key areas intake
                    assessment. It will include: challenges that the client may
                    encounter during recovery process, clear methods of navigating
                    obstacles in recovery, action steps to be taken by the program
                    and/or client to overcome the challenges of recovery.
            </p>

            <p>Psychodynamic therapy is based on the following key principles:</p>

                        <br />
                            <ul>
                            <br />
                            <li>
                                <AiFillCheckCircle className="star" /> Counselor and client will set clear and tangible goals regarding above mentioned obstacles.
                            </li><br />
                            <li>
                                <AiFillCheckCircle className="star" /> Counselor and client will brainstorm potential hurdles as client attempts to accomplish goals.
                            </li><br />
                            <li>
                                <AiFillCheckCircle className="star" /> Past experiences affect the present.
                            </li>
                            </ul> 

        

                    </div>

                </div>

            </div>

        </div>

    </>
  )
}

export default TreatmentPlan
