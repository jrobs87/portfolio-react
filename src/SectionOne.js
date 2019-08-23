import React, { Component } from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import { Container, Row, Col } from 'reactstrap';
import Fade from 'react-reveal/Fade';

class SectionOne extends Component {
    render() {
        return (
            <Container>
                <Row>

                </Row>
                <Row>
                    <Col className="col-xl-12">
                        <div style={{ marginTop: '12%', textAlign: 'right', background: 'none', height: '100vh' }}>
                        
                        <Fade right duration={333} delay={111} distance={'2.14em'}>
                        <h6 style={{color: '#FF5400',marginRight: '0em'}}>Section 01</h6>
                        </Fade>
                            <div className="mega-text">
                                <Fade right cascade delay={111} duration={222} distance={'0.14em'}>
                                    ISSA<span>PORTFOLIO</span>FROM<span>ATLANTA, GA</span>
                                    <span></span>
                                </Fade>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        )
    }
}

export default SectionOne