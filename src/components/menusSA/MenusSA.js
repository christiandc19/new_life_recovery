import React from "react";
import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";
import "./MenusSA.css";

import { AiOutlineArrowRight } from "react-icons/ai";

const MenusSA = () => {
  return (
    <>
      <div className="mh-cards-header container">
        <h1>
          {" "}
          NEW LIFE RECOVERY TREATMENT CENTER OFFERS VARIOUS SUBSTABCE ABUSE
          PROGRAMS{" "}
        </h1>
        <p>
          There are numerous options for addressing concerns related to
          substance use and addiction and each individual will have their own
          set of goals when engaging in treatment. Every person’s experience is
          different, and what has been effective for some people may not be
          effective for others. If you or someone you care about is struggling
          with alcohol, cannabis, or other substance use, find the right help
          for you below.
        </p>
      </div>

      {/* Mental Health Thumbnails */}

      <div className="top-flex">
        <div class="main">
          <div class="view view-fourth">
            <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/alcoholism.jpg"
              alt="Alcoholism"
              loading="lazy"
            />
            <div class="mask">
              <LinkRoll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Link to="/alcohol">
                  <p>
                    Learn More{" "}
                    <span>
                      <AiOutlineArrowRight />
                    </span>
                  </p>
                </Link>
              </LinkRoll>
            </div>
          </div>

          <div className="title">
            <h2>ALCOHOLISM</h2>
          </div>
        </div>

        <div class="main">
          <div class="view view-fourth">
            <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/cocaine.jpg"
              alt="Cocaine"
              loading="lazy"
            />
            <div class="mask">
              <LinkRoll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Link to="/cocaine">
                  <p>
                    Learn More{" "}
                    <span>
                      <AiOutlineArrowRight />
                    </span>
                  </p>
                </Link>
              </LinkRoll>
            </div>
          </div>

          <div className="title">
            <h2>COCAINE</h2>
          </div>
        </div>

        <div class="main">
          <div class="view view-fourth">
            <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/heroin.jpg"
              alt="Heroin"
              loading="lazy"
            />
            <div class="mask">
              <LinkRoll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Link to="/heroin">
                  <p>
                    Learn More{" "}
                    <span>
                      <AiOutlineArrowRight />
                    </span>
                  </p>
                </Link>
              </LinkRoll>
            </div>
          </div>

          <div className="title">
            <h2>HEROIN</h2>
          </div>
        </div>

        <div class="main">
          <div class="view view-fourth">
            <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/fentanyl.jpg"
              alt="Fentanyl"
              loading="lazy"
            />
            <div class="mask">
              <LinkRoll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Link to="/fentanyl">
                  <p>
                    Learn More{" "}
                    <span>
                      <AiOutlineArrowRight />
                    </span>
                  </p>
                </Link>
              </LinkRoll>
            </div>
          </div>

          <div className="title">
            <h2>FENTANYL</h2>
          </div>
        </div>

        <div class="main">
          <div class="view view-fourth">
            <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/kratom.jpg"
              alt="Kratom"
              loading="lazy"
            />
            <div class="mask">
              <LinkRoll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Link to="/kratom">
                  <p>
                    Learn More{" "}
                    <span>
                      <AiOutlineArrowRight />
                    </span>
                  </p>
                </Link>
              </LinkRoll>
            </div>
          </div>

          <div className="title">
            <h2>KRATOM</h2>
          </div>
        </div>

        <div class="main">
          <div class="view view-fourth">
            <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/opiate.jpg"
              alt="Opiate"
              loading="lazy"
            />
            <div class="mask">
              <LinkRoll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Link to="/opiate">
                  <p>
                    Learn More{" "}
                    <span>
                      <AiOutlineArrowRight />
                    </span>
                  </p>
                </Link>
              </LinkRoll>
            </div>
          </div>

          <div className="title">
            <h2>OPIATE</h2>
          </div>
        </div>

        <div class="main">
          <div class="view view-fourth">
            <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/mdma.jpg"
              alt="MDMA"
              loading="lazy"
            />
            <div class="mask">
              <LinkRoll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Link to="/mdma">
                  <p>
                    Learn More{" "}
                    <span>
                      <AiOutlineArrowRight />
                    </span>
                  </p>
                </Link>
              </LinkRoll>
            </div>
          </div>

          <div className="title">
            <h2>MDMA</h2>
          </div>
        </div>

        <div class="main">
          <div class="view view-fourth">
            <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/meth.jpg"
              alt="Meth"
              loading="lazy"
            />
            <div class="mask">
              <LinkRoll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Link to="/meth">
                  <p>
                    Learn More{" "}
                    <span>
                      <AiOutlineArrowRight />
                    </span>
                  </p>
                </Link>
              </LinkRoll>
            </div>
          </div>

          <div className="title">
            <h2>METH</h2>
          </div>
        </div>

        <div class="main">
          <div class="view view-fourth">
            <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/opioid.jpg"
              alt="Opioid"
              loading="lazy"
            />
            <div class="mask">
              <LinkRoll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Link to="/opioid">
                  <p>
                    Learn More{" "}
                    <span>
                      <AiOutlineArrowRight />
                    </span>
                  </p>
                </Link>
              </LinkRoll>
            </div>
          </div>

          <div className="title">
            <h2>OPIOID</h2>
          </div>
        </div>

        <div class="main">
          <div class="view view-fourth">
            <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/oxycodone.jpg"
              alt="Oxycodone"
              loading="lazy"
            />
            <div class="mask">
              <LinkRoll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Link to="/oxycodone">
                  <p>
                    Learn More{" "}
                    <span>
                      <AiOutlineArrowRight />
                    </span>
                  </p>
                </Link>
              </LinkRoll>
            </div>
          </div>

          <div className="title">
            <h2>OXYCODONE</h2>
          </div>
        </div>

        <div class="main">
          <div class="view view-fourth">
            <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/prescriptions.jpg"
              alt="Prescriptions"
              loading="lazy"
            />
            <div class="mask">
              <LinkRoll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Link to="/prescriptions">
                  <p>
                    Learn More{" "}
                    <span>
                      <AiOutlineArrowRight />
                    </span>
                  </p>
                </Link>
              </LinkRoll>
            </div>
          </div>

          <div className="title">
            <h2>PRESCRIPTIONS</h2>
          </div>
        </div>

        <div class="main">
          <div class="view view-fourth">
            <img
              src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/xanax.jpg"
              alt="Xanax"
              loading="lazy"
            />
            <div class="mask">
              <LinkRoll
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Link to="/xanax">
                  <p>
                    Learn More{" "}
                    <span>
                      <AiOutlineArrowRight />
                    </span>
                  </p>
                </Link>
              </LinkRoll>
            </div>
          </div>

          <div className="title">
            <h2>XANAX</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenusSA;
