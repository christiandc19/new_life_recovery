import React from 'react'
import './Dialectal.css'
import DIALECTAL from "../../assets/dialectal.webp";

const Dialectal = () => {
  return (
    <>
      <div className='dialectal'>

<div className='dialectal-content container'>

    <div className='dialectal-flex'>

        <div className='dialectal-left'>
                        <h1>Dialectical Behavioral Therapy (DBT)</h1>
                        <p>Dialectical Behavioral Therapy (DBT) is a treatment developed by psychologist Marsha Linehan to help patients who suffer from emotional dysregulation which results in self-destructive behaviors. It was originally designed to treat patients with suicidal behaviors and borderline personality disorder, and it has since proven to be an effective in the treatment of depression, bipolar disorder, substance use disorders, eating disorders, other personality disorders, and impulse control disorders.</p>
                        <br />
                        <p>Dialectical Behavioral Therapy is aimed at helping individuals understand the triggers that lead to destructive and impulsive behaviors and develop new skills to cope with emotion dysregulation. The treatment also focuses on developing a capacity to hold onto seemingly contradictory truths like the need for both acceptance and change.  </p>
                        <br />
                        <p>A complete DBT treatment generally starts with a commitment to at least 6 months of treatment to learn the skills and apply them, but often requires longer to improve understanding and generalization of the skills to everyday life. </p>

                    

                        <div className='source'>
                            <p>Article written by: Elizabeth Loran Ph.D.</p>
                        </div>
    
        </div>

        <div className='dialectal-right'>
        <img src={DIALECTAL} alt="activities" />

        </div>

    </div>

</div>

</div>
    </>
  )
}

export default Dialectal
