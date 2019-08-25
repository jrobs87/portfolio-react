import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Fade from 'react-reveal/Fade';

const splash = {
    color: 'black'
  }

class About extends Component {
    render() {
        return (
            <Container style={{marginTop: '10em'}}>
            <Row>
                <Col className="col-lg-2 col-sm-1"></Col>
                <Col className="col-lg-8 col-sm-10">
                    <Fade right exit distance={'0.33em'} delay={111} duration={333} distance={'0.33em'}>
                        <p style={{ marginBottom: '3em', fontSize: '2em' }}>Ambitious, self-taught, freelance <span style={splash}>full stack web developer</span> and designer specializing in front-end development and design. Seeking a full-time position with a digital design/development agency or enterprise team.</p>
                        <p style={{ marginBottom: '3em', fontSize: '2em' }}>Curious lifelong learner, endlessly fascinated by the wonders and complexities of sophisticated, yet minimalist, design and their manifestation in web applications.</p>
                        <p style={{ marginBottom: '3em', fontSize: '2em' }}>Ready to expand, refine, and grow my craft in a small team environment, collaborating with designers, artists, and developers to deliver highly refined, polished full stack web apps.</p>
                    </Fade>
                </Col>
                <Col className="col-lg-2 col-sm-1"></Col>
            </Row>
        </Container>
        )
 
    }
}

export default About