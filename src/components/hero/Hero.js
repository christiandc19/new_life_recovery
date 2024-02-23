import React from "react";
import Zoom from 'react-reveal/Zoom';
import "./Hero.css";
import Hero1 from '../../assets/Hero1.webp'
import Hero2 from '../../assets/Hero2.webp'
import Hero3 from '../../assets/Hero3.webp'
import Hero4 from '../../assets/Hero4.webp'

import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";

import { MdPhoneCallback } from "react-icons/md";
import Gauge from './Gauge'
import Logo from '../../assets/hero-logo-colored.png'

const Hero = () => {
  return (
    <>
    <div className="hero-content">

            <div className='hero-number'>
                  <h2><span><MdPhoneCallback /></span></h2>
                   <a href="tel:4242530226">(424) 253-0226</a>
            </div>


      <div className="hero">



          <div class="fling-minislide">

            <img src={Hero1} alt="Slide 1" />
            <img src={Hero2} alt="Slide 2" />
            <img src={Hero3} alt="Slide 3" />
            <img src={Hero4} alt="Slide 4" />

          </div>
          


          <div className="hero-container">

<div className="content">
  <Zoom duration={3000}>
            <img src={Logo} alt="logo" loading="lazy" />
  </Zoom>
     <div className='gauges container'>
     <Zoom duration={3000} delay={1000}>
            <Gauge Gauge="60%" Header="SOBRIETY SUCCESS" Name="60% of our clients are abstinent from drugs and alcohol in 6 months.
"ClassName="sober"/>
      </Zoom>
    </div>


    <div className='hero-btn'>
      <Zoom duration={2500} delay={2000}>
        <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
          <Link to="/contact">
            <button>CALL US</button>
        </Link>
      </LinkRoll>

      </Zoom>                   
      </div>


</div>
</div>



        </div>


      </div>
    </>
  );
};

export default Hero;
