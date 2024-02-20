import React from "react";
import { Link } from "react-router-dom";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import logo from '../../assets/nav-logo-wh.png'
import "./FooterStyles.css";
import { MdPhoneCallback } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";


import { Link as LinkRoll } from "react-scroll";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="top">
            <div className="logo-footer">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to='/'>
                  <img src={logo} alt="Oxnard Rehab Logo" loading="lazy"/>
                </Link>
              </LinkRoll>
            </div>


            <div>
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <BsFillArrowUpCircleFill className="icon" />
              </LinkRoll>
            </div>



          </div>



          <div className="col-container">


{/* NAVIGATION */}

            <div className="col">
              <h3>Navigation</h3>

{/* HOME */}

              <div>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/">
                    <p>Home</p>
                  </Link>
                </LinkRoll>
              </div>

{/* JOB */}

              <div>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/insurance">
                    <p>Insurance</p>
                  </Link>
                </LinkRoll>
              </div>


{/* CONTACT */}

            <div>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/contact">
                    <p>Call Us</p>
                  </Link>
                </LinkRoll>
              </div>

            </div>



            <div className="col">
              <h3>Company</h3>

{/* DETOX */}
              <div className="hide">
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/mission">
                    <p>Our Mission</p>
                  </Link>
                </LinkRoll>
              </div>

{/* RESIDENTIAL */}

              <div>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/team">
                    <p>Our Team</p>
                  </Link>
                </LinkRoll>
              </div>

{/* PHP */}

            <div>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/testimonials">
                    <p>Testimonials</p>
                  </Link>
                </LinkRoll>
              </div>

            </div>







            <div className="col">
              <h3>Treatment Programs</h3>

{/* PHP */}
              <div>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/mental-health">
                    <p>Mental Health</p>
                  </Link>
                </LinkRoll>
              </div>
{/* IOP */}

              <div>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/substance-abuse">
                    <p>Substance Abuse Programs</p>
                  </Link>
                </LinkRoll>
              </div>

{/* OP */}

              <div>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/jobs">
                    <p>Jobs Program</p>
                  </Link>
                </LinkRoll>
              </div>

            </div>






{/* Contact */}
            <div className="col">
              <h3>CONTACT</h3>
              <div>
                  <p><span><MdPhoneCallback /></span> <a href="tel:1234567890">(213) 584-4445</a></p>
              </div>

              <div>
                  <p><span><MdAlternateEmail  /><a href = "mailto: abc@example.com">info@santamonicarehab.biz</a></span></p>
              </div>

              <div>
                  <p><span><FiMapPin  /></span> Santa Monica, California</p>
              </div>
            </div>
          </div>








          <p className="copyright">
            <p>
              &copy; 2024 New Life Recovery All rights
              reserved
            </p>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
