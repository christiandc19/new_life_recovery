import React from 'react'
import './Interpersonal.css'
import INTERPERSONAL from "../../assets/interpersonal.webp";
import { AiFillCheckCircle } from "react-icons/ai";

const Interpersonal = () => {
  return (
    <>
      <div className='interpersonal'>

<div className='interpersonal-content container'>

    <div className='interpersonal-flex'>

        <div className='interpersonal-left'>
                        <h1>Interpersonal Psychotherapy</h1>
                        <p>Interpersonal psychotherapy is a time-limited, focused, and evidence-based approach to treat mood disorders. The main goal of IPT is to improve the quality of a client’s interpersonal relationships and social functioning, it aims to help reduce overall distress. IPT provides strategies to resolve problems within four key areas.</p>
                       
                        <br />
                            <ul>
                            <br />
                            <li>
                                <AiFillCheckCircle className="star" /> It addresses interpersonal deficits, including social isolation or involvement in unfulfilling relationships.
                            </li>
                            <li>
                                <AiFillCheckCircle className="star" /> It can help patients manage unresolved grief—if the onset of distress is linked to the death of a loved one, either recent or past.
                            </li>
                            <li>
                                <AiFillCheckCircle className="star" /> IPT can help with difficult life transitions like retirement, divorce, or a move.
                            </li>
                            <li>
                                <AiFillCheckCircle className="star" /> IPT is recommended for dealing with interpersonal disputes that emerge from conflicting expectations between partners, family members, close friends, or coworkers.
                            </li>
                            </ul>


                        <div className='source'>
                            <p>Reference: National Institutes of Health
</p>
                        </div>
    
        </div>

        <div className='interpersonal-right'>
        <img src={INTERPERSONAL} alt="activities" />

        </div>

    </div>

</div>

</div>
    </>
  )
}

export default Interpersonal
