import React, { useContext } from 'react';
import PortfolioContext from '../../context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">About me</h2>
        <br />
        <div className="row about-wrapper">
          <div className="col-md-6 col-sm-12">
            <div className="about-wrapper__image">
              <img
                className="img-fluid rounded shadow-lg"
                height="auto"
                width="300px"
                src={img || '/assets/profile.jpg'}
                alt="Profile"
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="about-wrapper__info">
              <p className="about-wrapper__info-text">
                {paragraphOne ||
                  'I am pusrsuing B.Tech in Computer Science from Lovely Professional University. I am a professional and passionate Software Developer focused on efficiency and constant learning. I love Full Stack Web Development. I can develop and maintain both front-end and back-end.'
                }
              </p>
              <p className="about-wrapper__info-text">
                {paragraphTwo ||
                  'I have worked on various web frameworks like Angular, Express, Springboot and libraries such as React. I have created multiple projects either from the front-end or the back-end mostly using Javascript, React , Node.js, Ecpress.js and MongoDB.'
                }
              </p>
              <p className="about-wrapper__info-text">
                {paragraphThree ||
                  'I would love to set up an introduction call to discuss how I could help your business and make your goals happen.'
                }
              </p>
              {resume && (
                <span className="d-flex mt-4">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn cta-btn--resume"
                    href={resume}
                  >
                    View Resume
                  </a>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
