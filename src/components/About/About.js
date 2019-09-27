import React, { useContext } from 'react';
import PortfolioContext from '../../context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, resume } = about;

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
                src={img || '/assets/profile.png'}
                alt="Profile"
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="about-wrapper__info">
              <p className="about-wrapper__info-text">
                {paragraphOne ||
                  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
              </p>
              <p className="about-wrapper__info-text">
                {paragraphTwo ||
                  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
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
