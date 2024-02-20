import React from "react";
import Zoom from 'react-reveal/Zoom';
import "./Hero.css";
import Hero1 from '../../assets/Hero1.webp'
import Hero2 from '../../assets/Hero2.webp'
import Hero3 from '../../assets/Hero3.webp'
import Hero4 from '../../assets/Hero4.webp'

import { MdPhoneCallback } from "react-icons/md";
import Gauge from './Gauge'
import Logo from '../../assets/hero-logo-colored.png'

const Hero = () => {
  return (
    <>
    <div className="hero-content">
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
      <Zoom duration={3000} delay={2000}>
          <h2><span><MdPhoneCallback /></span> <a href="tel:2135844445">(213) 584-4445</a></h2>
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
