import React from "react";
import { Link as LinkRoll } from "react-scroll";
import { Link } from "react-router-dom";
import Zoom from 'react-reveal/Zoom';

import "./TherapyMH.css";

import anxiety from '../../assets/anxiety.webp'
import depression from '../../assets/depression.webp'
import bipolar from '../../assets/bipolar.webp'

const TherapyMH = () => {
  return (
    <>
      <div className="TherapyMH">
        <div className="content">
            <div className="TherapyMH-left">
              <div className="left-content container">
                <h1>CONDITIONS WE TREAT</h1>
                <p>Let's Talk About Mental Health</p>
                <br />
              </div>
            </div>

          <div className="TherapyMH-right container">
          <Zoom duration={2000}>
              <div className="box1 item">
                <div className="box-content">
                  <img src={anxiety} alt="depressed man"/>
                  <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                    <Link to="/anxiety">
                      <h1>ANXIETY</h1>
                      </Link>
                    </LinkRoll>
                  <p>
                  A persistent, often overwhelming feeling of apprehension or fear about future uncertainties, accompanied by physical symptoms such as increased heart rate and restlessness.
                  </p>
                </div>
              </div>
            </Zoom>

            <Zoom duration={2000}>
              <div className="box2 item">
                <div className="box-content">
                  <img src={bipolar} alt="depressed woman"/>
                  <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                    <Link to="/depression">
                      <h1>DEPRESSION</h1>
                      </Link>
                    </LinkRoll>
                  <p>
                  Persistent feelings of sadness, hopelessness, and a lack of interest or pleasure in activities, often accompanied by physical symptoms like fatigue and changes in sleep and appetite.
                  </p>
                </div>
              </div>
            </Zoom>

            <Zoom duration={2000}>
              <div className="box3 item">
                <div className="box-content">
                <img src={depression} alt="depressed man"/>
                  <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                    <Link to="/bipolar-disorder">
                      <h1>BIPOLAR</h1>
                    </Link>
                  </LinkRoll>
                  <p>
                  Extreme mood swings between manic highs, marked by elevated energy and euphoria, and depressive lows, characterized by profound sadness and lethargy.
                  </p>
                </div>
              </div>
            </Zoom>

            
          </div>
        </div>


        <div className="mental-health-btn">
            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/mental-health">
                  <button>VIEW ALL</button>
              </Link>
            </LinkRoll>
          </div>



      </div>
    </>
  );
};

export default TherapyMH;
