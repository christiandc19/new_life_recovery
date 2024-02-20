import React from "react";


import ACTIVITIES from "./Activities";


import "./TreatmentSection.css";
import Cognitive from "./Cognitive";
import Dialectal from "./Dialectal";
import Psychodynamic from "./Psychodynamic";
import Interpersonal from "./Interpersonal";
import TreatmentPlan from "./TreatmentPlan";

const TreatmentSection = () => {
  return (
    <>




      <div className="container treatment-overview">
        <h1>
          Mental Health and Substance Abuse Treatment Above and Beyond the Norms
        </h1>
        <p>
          Here at  New Life Recovery, we firmly stand that without addressing our
          physical aspect, the mind cannot successfully recover. We go above and
          beyond the norms of mental health care, through a thorough and
          intentional treatment plan that is specific to every kind of
          individual that addresses not only the mental but also the physical
          inequalities in the body.
          <br />
          <br />
          Methods used by New Life Recovery are non-invasive, distinct, and
          successful in relieving acute symptoms that act as roadblocks to
          receiving the full therapy. Additionally, to get past more difficult
          progress barriers, these services are provided on a consistent and
          ongoing basis which is closely observed in coordination with our
          clinical team.
          <br />
          <br />
          The physical, mental, and spiritual imbalances have been found to be
          restored by its healing methods. Our design of mental health treatment
          is custom-fit to every individual. Compared to the programs which are
          commonly used, we are a firm believer that we can reach the full
          potential of our well-being by healing the body, mind and spirit.
        </p>
      </div>

      <Cognitive />
      <Dialectal />
      <Psychodynamic />
      <Interpersonal />
      <TreatmentPlan />
      <ACTIVITIES />
    </>
  );
};

export default TreatmentSection;
