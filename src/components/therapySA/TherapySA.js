import React from "react";
import "./TherapySA.css";
import { Link as LinkRoll } from "react-scroll";
import { Link } from "react-router-dom";
import Zoom from 'react-reveal/Zoom';
import Alcohol from '../../assets/alcohol.webp'
import Heroin from '../../assets/heroin.webp'
import Cocaine from '../../assets/cocaine.webp'

const TherapySA = () => {
  return (
    <>
      <div className="therapySA">
        <div className="therapySA-content">
          <div className="therapySA-header container">
            <h1>Our Substance Abuse Programs</h1>
            <p>
              Our compassionate staff utilizes established medical treatments to
              decrease withdrawal effects in an empathetic environment. In the
              meantime, you’ll receive behavioral health care from experienced
              counselors to boost your chances for an effective recovery.
            </p>
          </div>

          <div className="therapySA-flex container">

          <Zoom duration={2000}>
            <div className="therapySA-flexItem">
              <div className="flex-img">
                <img
                  src={Alcohol}
                  alt="Alcoholism"
                  loading="lazy"
                />
              </div>

              <div className="flex-caption">
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                    <Link to="/alcohol">
                      <h1>ALCOHOL ADDICTION</h1>
                    </Link>
                </LinkRoll>
                <p>
                  Inability to manage one’s drinking habits. It is the most
                  acute form of alcohol abuse.
                </p>
              </div>
            </div>
          </Zoom>


          <Zoom duration={2000}>
            <div className="therapySA-flexItem">
              <div className="flex-img">
                <img
                  src={Heroin}
                  alt="Alcoholism"
                  loading="lazy"
                />
              </div>

              <div className="flex-caption">
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                    <Link to="/heroin">
                      <h1>HEROIN ADDICTION</h1>
                    </Link>
                </LinkRoll>
                <p>
                  Heroin is an opioid stimulant created from morphine and the
                  seed of the poppy plant. It usually appears in either powder
                  form or as a sticky tar substance.
                </p>
              </div>
            </div>
          </Zoom>

          <Zoom duration={2000}>
            <div className="therapySA-flexItem">
              <div className="flex-img">
                <img
                  src={Cocaine}
                  alt="Alcoholism"
                  loading="lazy"
                />
              </div>

              <div className="flex-caption">
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                    <Link to="/cocaine">
                      <h1>COCAINE ADDICTION</h1>
                    </Link>
                </LinkRoll>
                <p>
                  A highly addictive stimulant that affects the brain by
                  elevating levels of dopamine (a chemical associated with
                  reward or pleasure).
                </p>
              </div>
            </div>
            </Zoom>
          </div>

          <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
            <Link to="/substance-abuse">
              <div className="therapySA-btn">
                <button>VIEW ALL</button>
              </div>
            </Link>
          </LinkRoll>
        </div>
      </div>
    </>
  );
};

export default TherapySA;
