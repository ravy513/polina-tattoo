import React from "react";
import "./styles.css";
import aboutImg from "../../images/about.jpeg";
function About() {
  return (
    <div className="row" id="aboutMe">
      <img src={aboutImg} className="about-img col-lg-6 col-12" />
      <p className="about-p px-5 mt-lg-5 mt-3 col-lg-6 col-12 text-justify text-wrap overflow-wrap: break-word ">
        <span className="font-weight-bold">Polina Cohen</span> was born on
        December 30th, 1997 in Moscow. After graduating from an elementary art
        school in 2013 Polina went into further learning at Art University of
        Moscow. <br />
        Polina has traveled across different countries to learn art techniques
        from top artists in England, Italy and the USA. <br />
        In 2015 Polina moved to the US and started her journey in the tattoo
        industry. After graduating from Master Tattoo Institute in Miami she has
        landed multiple jobs offers from different shops in Florida, Illinois
        and New York. Polina is a former co-owner of Ink 23 Brooklyn &
        Manhattan. <br />
        Today, Polina is working as a Licensed Independent Artist.
      </p>
    </div>
  );
}

export default About;
