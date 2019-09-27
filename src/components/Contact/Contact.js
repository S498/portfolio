import React, { useContext } from 'react';
import PortfolioContext from '../../context';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;

  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-wrapper">
          <p className="contact-wrapper__text">
            {cta || '[Put here your call to action]'}
          </p>
          <br />
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn cta-btn--resume"
            href={
              email
                ? `mailto:${email}`
                : 'https://github.com/cobidev/react-simplefolio'
            }
          >
            {btn || 'Button Text'}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
