import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import TreatmentPage from './routes/TreatmentPage'
import TestimonialPage from './routes/TestimonialPage'
import MissionPage from './routes/MissionPage'
import ResidencePage from './routes/ResidencePage'
import InsurancePage from './routes/InsurancePage'
import CommunityPage from './routes/CommunityPage'
import ContactPage from './routes/ContactPage'

import MH from './routes/MH';
import SA from './routes/SA';


import COCAINE from './routes/COCAINE';
import ALCOHOL from './routes/ALCOHOL';
import FENTANYL from './routes/FENTANYL';
import HEROIN from './routes/HEROIN';
import KRATOM from './routes/KRATOM';
import MDMA from './routes/MDMA';
import METH from './routes/METH';
import OPIATE from './routes/OPIATE';
import OPIOID from './routes/OPIOID';
import OXYCODONE from './routes/OXYCODONE';
import PRESCRIPTIONS from './routes/PRESCRIPTIONS';
import XANAX from './routes/XANAX';

import AcuteStressDisorder from './routes/AcuteStressDisorder';
import ADHD from './routes/ADHD';
import AngerDisorder from './routes/AngerDisorder';
import Anxiety from './routes/Anxiety';
import BipolarDisorder from './routes/BipolarDisorder';
import Depression from './routes/DepressionPage';
import PanicDisorder from './routes/PanicDisorderPage';
import PTSD from './routes/PTSDPage';
import Schizoaffective from './routes/SchizoaffectivePage';
import Schizophrenia from './routes/SchizophreniaPage';


import Jobs from './routes/JOBS';
import Team from './routes/Team';


ReactDOM.render(
  <BrowserRouter basename={window.location.pathname || ''} >
    <Routes>


      <Route exact path='/' element={<App />} />

      <Route exact path='/substance-abuse' element={<SA />} />
      <Route exact path='/alcohol' element={<ALCOHOL />} />
      <Route exact path='/cocaine' element={<COCAINE />} />
      <Route exact path='/fentanyl' element={<FENTANYL />} />
      <Route exact path='/heroin' element={<HEROIN />} />
      <Route exact path='/kratom' element={<KRATOM />} />
      <Route exact path='/mdma' element={<MDMA />} />
      <Route exact path='/meth' element={<METH />} />
      <Route exact path='/opiate' element={<OPIATE />} />
      <Route exact path='/opioid' element={<OPIOID />} />
      <Route exact path='/oxycodone' element={<OXYCODONE />} />
      <Route exact path='/prescriptions' element={<PRESCRIPTIONS />} />
      <Route exact path='/xanax' element={<XANAX />} />

      <Route exact path='/mental-health' element={<MH />} />
      <Route exact path='/acute-stress-disorder' element={<AcuteStressDisorder />} />
      <Route exact path='/adhd' element={<ADHD />} />
      <Route exact path='/anger-disorder' element={<AngerDisorder />} />
      <Route exact path='/anxiety' element={<Anxiety />} />
      <Route exact path='/bipolar-disorder' element={<BipolarDisorder />} />
      <Route exact path='/depression' element={<Depression />} />
      <Route exact path='/panic-disorder' element={<PanicDisorder />} />
      <Route exact path='/ptsd' element={<PTSD />} />
      <Route exact path='/schizoaffective' element={<Schizoaffective />} />
      <Route exact path='/schizophrenia' element={<Schizophrenia />} />

      <Route exact path='/jobs' element={<Jobs />} />

      <Route exact path='/treatment' element={<TreatmentPage />} />

      <Route exact path='/mission' element={<MissionPage />} />
      <Route exact path='/team' element={<Team />} />
      <Route exact path='/testimonials' element={<TestimonialPage />} />


      <Route exact path='/residence' element={<ResidencePage />} />
      <Route exact path='/insurance' element={<InsurancePage />} />
      <Route exact path='/community-links' element={<CommunityPage />} />
      <Route exact path='/contact' element={<ContactPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

