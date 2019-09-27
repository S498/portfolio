import React, { useContext } from 'react';
import PortfolioContext from '../../context';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

  return (
    <section id="projects">
      <div className="container">
        <div className="project-wrapper">
          <h2 className="section-title dark-blue-text">Projects</h2>
          {projects.map((project, index) => {
            const { title, info, url, repo, img } = project;

            return (
              <div className="row" key={index}>
                <div className="col-lg-4 col-sm-12">
                  <div className="project-wrapper__text">
                    <h3 className="project-wrapper__text-title">
                      {title || 'Project Title'}
                    </h3>

                    <div>
                      <p className="mb-4">
                        {info ||
                          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                      </p>
                    </div>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--hero"
                      href={url || '#!'}
                    >
                      See Live
                    </a>

                    {repo && (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn text-color-main"
                        href={repo}
                      >
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
                <div className="col-lg-8 col-sm-12">
                  <div className="project-wrapper__image">
                    <a
                      href={url || '#!'}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div data-tilt className="thumbnail rounded">
                        <img
                          className="img-fluid"
                          src={img || './assets/banner.png'}
                          alt="Project"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
