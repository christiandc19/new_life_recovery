import React from "react";
import "./HomeSection1.css";
import { Link } from "react-router-dom";
import { FaPills } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { BiBrain } from "react-icons/bi";
import { Link as LinkRoll } from "react-scroll";
import Zoom from 'react-reveal/Zoom';

const HomeSection1 = () => {
  return (
    <>
      <div className="section1">
        <div className="section1-header">
          <h1>WHAT WE OFFER</h1>
          {/* <h2>Services from our best professionals</h2> */}
          <p>
            Top level physiotherapy professional, evidenced based treatment. We
            diagnose the cause and provide you with the best possible treatment.
          </p>
        </div>

        <div className="section1-cards">
          <div className="wwa-cards-contents">
            <div className="card1 card">
              <Zoom duration={2000}>
                <div className="card-content">
                  <FaPills className="card-icon1" />
                  <h1>Substance Abuse Programs</h1>
                  <p>
                    Treatment options for a multitude of substance use
                    disorders. Whether you suffer from alcohol, prescription
                    drugs, or other substance abuse disorders, find better
                    healing with us.
                  </p>
                  <LinkRoll
                    activeClass="active"
                    to="top"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <Link to="/substance-abuse">
                      <div className="card3-btn">
                        <h5>LEARN MORE</h5>
                      </div>
                    </Link>
                  </LinkRoll>
                </div>
              </Zoom>
            </div>

            <div className="card2 card">
              <Zoom duration={2000}>
                <div className="card-content">
                  <MdWorkOutline className="card-icon2" />
                  <h1>Jobs Program</h1>
                  <p>
                    Our most unique feature sets you up with interview clothes,
                    interview skills, resume assistance, and all the resources
                    you need to get a job with a great company.
                  </p>
                  <LinkRoll
                    activeClass="active"
                    to="top"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <Link to="/jobs">
                      <h5>LEARN MORE</h5>
                    </Link>
                  </LinkRoll>
                </div>
              </Zoom>
            </div>

            <div className="card3 card">
              <Zoom duration={2000}>
                <div className="card-content">
                  <BiBrain className="card-icon3" />
                  <h1>Mental Health Programs</h1>
                  <p>
                    {" "}
                    We provide access to specific mental health services offered
                    by a multidisciplinary team. It is for adults, teenagers and
                    children who present symptoms of the most common mental
                    disorders, such as an anxiety disorder or depression.
                  </p>
                  <LinkRoll
                    activeClass="active"
                    to="top"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    <Link to="/mental-health">
                      <h5>LEARN MORE</h5>
                    </Link>
                  </LinkRoll>
                </div>
              </Zoom>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection1;
