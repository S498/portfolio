import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { PortfolioProvider } from './context';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/main.scss';

ReactDOM.render(
    <PortfolioProvider>
        <App />
    </PortfolioProvider>,
    document.getElementById('root')
);