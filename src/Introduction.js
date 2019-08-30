import React, { Component } from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import { Container, Row, Col } from 'reactstrap';
import Fade from 'react-reveal/Fade';
import About from './About';
import Ticker from 'react-ticker';
import Project from './SelectedWorks';

const message = ['Welcome','Hello']

class Introduction extends Component {
    render() {
        return (
            <div>
              <Row style={{ textAlign: 'center', fontWeight: 100, marginTop: '2em'}}>
              <Col>
              <Fade down>
              <h5>John Robertson</h5>
              </Fade>
              
              </Col>
            
              </Row>
                    <Row>
                        <Col className="col-xl-12">
                            <div style={{ marginTop: '3%', textAlign: 'right', background: 'none', height: '100vh' }}>
                                <Parallax y={[200, -10]}>
                                    <Fade left duration={333} delay={111} distance={'2.14em'}>
                                        <h6 style={{ color: '#FF5400', marginRight: '0em', textAlign: 'left' }}>Section 01 - An exciting selection of works from a badass fullstack developer.</h6>
                                        <p style={{textAlign: 'left'}}>Welcome!  Avaiable for projects August 2019.</p>
                                    </Fade>
                                </Parallax>

                                <div className="mega-text">
                                    <Fade right cascade delay={111} duration={222} distance={'0.1em'}>
                                    <div style={{color: 'orangered'}}>2019</div>
                                  <div>
                                  
                                  PORTFOLIO</div>
                                  <div>FROM</div>
                                  <div>ATLANTA</div>
                                  <div>GEORGIA</div>
                                  
                                
                                        {/* ISSA<span>PORTFOLIO</span>FROM<span>ATLANTA, GA</span>
                                        <span></span> */}
                                    </Fade>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                    <Ticker offset="run-in" speed={5} offset>
                            {() => <h6 style={{ color: '#FF5400', marginRight: '3px' }}>{message.join(' ').toUpperCase()}</h6>}
                        </Ticker>
                    </Row>
                
                <About /> 
                <Project />
            </div>
        )
    }
}

export default Introduction