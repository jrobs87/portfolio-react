import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';


ReactDOM.render(
    <ParallaxProvider >
    <Router>
        <App />
    </Router>
    </ParallaxProvider>,
    document.getElementById('root'));


