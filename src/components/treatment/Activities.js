import React from 'react'
import './Activities.css'
import { AiFillCheckCircle } from "react-icons/ai";
import ActivitiesIMG from "../../assets/activities-min.webp";

const Activities = () => {
  return (
    <>
      <div className='activities'>

        <div className='actvities-content container'>

            <div className='activities-flex'>

                <div className='activities-flex-left'>
                <h1>Recreations</h1>
            <p>
                New Life Recovery promotes fun activities that clients learn how to
                develop interests and hobbies that helps then improve their mental
                health. Clients must be cleared by the doctor to participate.
                Organized activities may include but are not limited to:
            </p>
            <ul>
              <br />
              <li>
                <AiFillCheckCircle className="star" /> Movies.
              </li>
              <li>
                <AiFillCheckCircle className="star" /> Bowling.
              </li>
              <li>
                <AiFillCheckCircle className="star" /> Beach/Lake Activities.
              </li>
              <li>
                <AiFillCheckCircle className="star" /> Miniature Golf.
              </li>
              <li>
                <AiFillCheckCircle className="star" /> Bonfires (Weather permitting).
              </li>
              <li>
                <AiFillCheckCircle className="star" /> Major League Baseball Games.
              </li>
              <li>
                <AiFillCheckCircle className="star" /> Hiking/Nature walk.
              </li>
              <li>
                <AiFillCheckCircle className="star" /> Community Pool.
              </li>
            </ul>

                </div>

                <div className='activities-flex-right'>
                <img src={ActivitiesIMG} alt="activities" />

                </div>

            </div>

        </div>

      </div>
    </>
  )
}

export default Activities
