import React, { useContext } from 'react';
import PortfolioContext from '../../context';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;

  console.log(networks);

  return (
    <footer className='footer navbar-static-bottom'>
      <div className='container'>
        <a href='#top' className='back-to-top'>
          <i className='fa fa-angle-up fa-2x' aria-hidden='true' />
        </a>

        <div className='social-links'>
          {networks &&
            networks.map((network, index) => {
              const { name, url } = network;
              return (
                <a
                  key={index}
                  href={url || 'https://github.com/S498/portfolio'}
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                </a>
              );
            })}
        </div>

        <hr />

        <p className='footer__text'>
          © 2019 - Created by{' '}
          <a
            href='https://github.com/S498'
            target='_blank'
            rel='noopener noreferrer'
          >
            Sathwik Edupuganti
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
