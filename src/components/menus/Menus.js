import React from "react";
import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";
import "./Menus.css";

import { AiOutlineArrowRight } from "react-icons/ai";

const Menus = () => {
  return (
    <>
      <div className="mh-cards-header container">
        <h1>
          NEW LIFE RECOVERY TREATMENT CENTER OFFERS VARIOUS MENTAL HEALTH
          PROGRAMS{" "}
        </h1>
        <p>
          At New Life Recovery Treatment Center, clients receive individual therapy
          alongside a range of additional treatments, including relapse
          prevention, trauma therapy, mindfulness meditation, transportation,
          yoga, and more. We offer support that clients need to allow them to
          gradually go back to treatment.
        </p>
      </div>

      <div class="mh-card-wrap"></div>

      {/* Mental Health Thumbnails */}

      <div className="top-flex">
        <div className="top-flexItem">
          <div className="top-flex-image">
            <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/alcoholism.jpg"
              alt="Alcoholism"
              loading="lazy"
            />
          </div>

          <div className="top-flex-caption">
            <h2>DEPRESSION</h2>
            <LinkRoll
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Link to="/depression">
                <p>
                  LEARN MORE{" "}
                  <span>
                    <AiOutlineArrowRight />
                  </span>
                </p>
              </Link>
            </LinkRoll>
          </div>
        </div>

        <div className="top-flexItem">
          <div className="top-flex-image">
            <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/cocaine.jpg"
              alt="anxiety"
              loading="lazy"
            />
          </div>

          <div className="top-flex-caption">
            <h2>ANXIETY</h2>
            <LinkRoll
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Link to="/anxiety">
                <p>
                  LEARN MORE{" "}
                  <span>
                    <AiOutlineArrowRight />
                  </span>
                </p>
              </Link>
            </LinkRoll>
          </div>
        </div>

        <div className="top-flexItem">
          <div className="top-flex-image">
            <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/heroin.jpg"
              alt="Panic Disorder"
              loading="lazy"
            />
          </div>

          <div className="top-flex-caption">
            <h2>PANIC DISORDER</h2>
            <LinkRoll
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Link to="/panic-disorder">
                <p>
                  LEARN MORE{" "}
                  <span>
                    <AiOutlineArrowRight />
                  </span>
                </p>
              </Link>
            </LinkRoll>
          </div>
        </div>

        <div className="top-flexItem">
          <div className="top-flex-image">
            <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/fentanyl.jpg"
              alt="Stress Disorder"
              loading="lazy"
            />
          </div>

          <div className="top-flex-caption">
            <h2>STRESS DISORDER</h2>
            <LinkRoll
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Link to="/acute-stress-disorder">
                <p>
                  LEARN MORE{" "}
                  <span>
                    <AiOutlineArrowRight />
                  </span>
                </p>
              </Link>
            </LinkRoll>
          </div>
        </div>

        <div className="top-flexItem">
          <div className="top-flex-image">
            <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/kratom.jpg"
              alt="Anger Disorder"
              loading="lazy"
            />
          </div>

          <div className="top-flex-caption">
            <h2>ANGER DISORDER</h2>
            <LinkRoll
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Link to="/anger-disorder">
                <p>
                  LEARN MORE{" "}
                  <span>
                    <AiOutlineArrowRight />
                  </span>
                </p>
              </Link>
            </LinkRoll>
          </div>
        </div>

        <div className="top-flexItem">
          <div className="top-flex-image">
            <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/opiate.jpg"
              alt="ADHD"
              loading="lazy"
            />
          </div>

          <div className="top-flex-caption">
            <h2>ADHD DISORDER</h2>
            <LinkRoll
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Link to="/adhd">
                <p>
                  LEARN MORE{" "}
                  <span>
                    <AiOutlineArrowRight />
                  </span>
                </p>
              </Link>
            </LinkRoll>
          </div>
        </div>

        <div className="top-flexItem">
          <div className="top-flex-image">
            <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/meth.jpg"
              alt="PTSD"
              loading="lazy"
            />
          </div>

          <div className="top-flex-caption">
            <h2>PTSD DISORDER</h2>
            <LinkRoll
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Link to="/ptsd">
                <p>
                  LEARN MORE{" "}
                  <span>
                    <AiOutlineArrowRight />
                  </span>
                </p>
              </Link>
            </LinkRoll>
          </div>
        </div>

        <div className="top-flexItem">
          <div className="top-flex-image">
            <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/opioid.jpg"
              alt="Bipolar Disorder"
              loading="lazy"
            />
          </div>

          <div className="top-flex-caption">
            <h2>BIPOLAR DISORDER</h2>
            <LinkRoll
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Link to="/bipolar-disorder">
                <p>
                  LEARN MORE{" "}
                  <span>
                    <AiOutlineArrowRight />
                  </span>
                </p>
              </Link>
            </LinkRoll>
          </div>
        </div>

        <div className="top-flexItem">
          <div className="top-flex-image">
            <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/oxycodone.jpg"
              alt="Schizoaffective"
              loading="lazy"
            />
          </div>

          <div className="top-flex-caption">
            <h2>SCHIZOAFFECTIVE</h2>
            <LinkRoll
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Link to="/schizoaffective">
                <p>
                  LEARN MORE{" "}
                  <span>
                    <AiOutlineArrowRight />
                  </span>
                </p>
              </Link>
            </LinkRoll>
          </div>
        </div>

        <div className="top-flexItem">
          <div className="top-flex-image">
            <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/prescriptions.jpg"
              alt="Schizophrenia"
              loading="lazy"
            />
          </div>

          <div className="top-flex-caption">
            <h2>SCHIZOPHRENIA</h2>
            <LinkRoll
              activeClass="active"
              to="top"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Link to="/schizophrenia">
                <p>
                  LEARN MORE{" "}
                  <span>
                    <AiOutlineArrowRight />
                  </span>
                </p>
              </Link>
            </LinkRoll>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menus;
