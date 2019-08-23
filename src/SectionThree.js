import React, { Component } from 'react';
import ProjectTicker from './ProjectTicker';
import { Container, Row, Col } from 'reactstrap';
import Ticker from 'react-ticker';
import Fade from 'react-reveal/Fade';

const splash = {
    color: 'black'
  }

class SelectedWorks extends Component {
    projects = {
        name: 'Project Example',
        year: '1987',
        description: 'A simple project',
        stack: ['Node', 'Express', 'React', 'MongoDB', 'Heroku']
    }
    render() {
        console.log(this.projects)
        return (
            <Container>
                <Row>
                    <Col className="col-10">
                        <div className="mega-text" >
                            ATL CFO FORUM <span>
                            <h6>no. 03.01 - 2019</h6>
                            </span>
                            <Ticker offset="run-in" speed={6} offset>
                            {() => <h6 style={{ color: '#FF5400', marginRight: '3px' }}>{this.projects.stack.join(' ').toUpperCase()}</h6>}
                        </Ticker>
                         </div>
                     
                    </Col>
                </Row>

                <Row>
      <Col className="col-lg-3 col-sm-1"></Col>
      <Col className="col-lg-8 col-sm-10">
        <Fade right exit distance={'0.33em'} delay={111} duration={333} distance={'0.33em'}>
          <p style={{ marginBottom: '3em', fontSize: '2em' }}>Ambitious, self-taught, freelance <span style={splash}>full stack web developer</span> and designer specializing in front-end development and design. Seeking a full-time position with a digital design/development agency or enterprise team.</p>
          <p style={{ marginBottom: '3em' }}>Curious lifelong learner, endlessly fascinated by the wonders and complexities of sophisticated, yet minimalist, design and their manifestation in web applications.</p>
          <p style={{ marginBottom: '3em' }}>Ready to expand, refine, and grow my craft in a small team environment, collaborating with designers, artists, and developers to deliver highly refined, polished full stack web apps.</p>
        </Fade>
      </Col>
      <Col className="col-lg-3 col-sm-1"></Col>
    </Row>
            </Container>

            
        )
    }
}

export default SelectedWorks