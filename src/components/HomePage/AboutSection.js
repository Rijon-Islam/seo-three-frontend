import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {

  const [about, setAbout] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/about`)
      .then((res) => res.json())
      .then((info) => setAbout(info));
  }, []);


  return (

    <>




      {
        about.map(c=> <section id="about" className="about-section about-two bg-thin">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="about-img">
                <img src={c.aboutImg} alt />
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 ptb-100">
              <div className="section-title">
                <h2>{c.aboutHeading}</h2>
              </div>
              <div className="about-text-blc">
                <p>{c.aboutText}</p>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="about-feature-blc">
                    <i className="envy envy-quality blue" />
                    <div className="about-feature-content">
                      <h6>{c.certifiedHeading}</h6>
                      <p>{c.certifiedDetails}</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="about-feature-blc">
                    <i className="envy envy-quality red" />
                    <div className="about-feature-content">
                      <h6>{c.awardHeading}</h6>
                      <p>{c.awardDetails}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cta-btn">
                <a href={c.buttonLink} className="btn btn-solid">{c.buttonText} <i className="envy envy-right-arrow" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>)
      }

      



    </>
  );
};

export default AboutSection;
