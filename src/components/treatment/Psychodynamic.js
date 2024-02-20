import React from 'react'
import './Psychodynamic.css'
import PSYCHODYNAMIC from "../../assets/psychodynamic.jpg";

const Psychodynamic = () => {
  return (
    <>
      
        <div className='psychodynamic'>

            <div className='psychodynamic-content container'>

                <div className='psychodynamic-flex'>

                    <div className='psychodynamic-left'>
                        <img src={PSYCHODYNAMIC} alt="activities" />
                    </div>

                    <div className='psychodynamic-right'>
                        <h1>Psychodynamic Therapy</h1>
                        <p>Psychodynamic therapy is a talking therapy. This means that it is based on the concept that talking about problems can help people learn and develop the skills they need to address them. <br /><br />

                        It is an approach that embraces the multifaceted aspects of an individual’s life. It strives to help people understand the sometimes unknown or unconscious motivations behind difficult feelings and behaviors.<br /><br />

                        Having this insight can lead to symptom relief, help people feel better, and allow them to make better choices.</p>
                        <br />

                        <div className='source'>
                            <p>Source: Medical News Today</p>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    </>
  )
}

export default Psychodynamic
