import React, { useContext } from 'react';
import PortfolioContext from '../../context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  return (
    <section id='welcome-section' className='jumbotron'>
      <div className='container'>
        <h1 id='opening-text'>
          {title || "Hi, I'm"}{' '}
          <span className='text-color-main'>{name || 'Sathwik'}</span>
          <br />
          {subtitle || "I'm a Full Stack Web Developer."}
        </h1>
        <p id='opening-paragraph'>
          <a className='cta-btn cta-btn--hero' href='#about'>
            {cta || 'Know More'}
          </a>
        </p>
      </div>
    </section>
  );
};

export default Header;
