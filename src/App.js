/* Import statements */
import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import { Nav, NavItem } from 'reactstrap';
import { ParallaxBanner } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import Fade from 'react-reveal/Fade';
import RedirectButton from './RedirectButton';
import './App.css';
import ProjectTicker from './ProjectTicker';
import SectionOne from './SectionOne';
import SelectedWorks from './SectionThree';


// importing components

const style = {
  width: '6em'
}

const splash = {
  color: 'black'
}

const text = {
  color: '#F17300'
}

/* Home component */
const Home = () => (
  <Container style={{ margin: 0, padding: 0, maxWidth: '100%', paddingTop: '16%' }}>
    <Row>
      <Col className="col-lg-3"></Col>
      <Col className="col-lg-6">
        < ProjectTicker/>
        <Fade cascade duration={444}>
          <p style={{ textAlign: 'right', fontWeight: 100, fontSize: '2em' }}>
            <Fade right duration={333} distance={'0.33em'}>"...on a bright fall morning, I'm with it.</Fade>
          </p>
          <p style={{ textAlign: 'right', fontWeight: 100, fontSize: '2em', marginTop: '-1em' }}>
            <Fade right duration={333} distance={'0.33em'}>
              I stood a little while within it."</Fade>
          </p>
        </Fade>
        <p style={{ textAlign: 'right' }}>- Bon Iver</p>
      </Col>
    </Row>
  </Container>
)

/* Category component */
const About = () => (
  <Container style={{ paddingTop: '10%', fontSize: '1.33em', textAlign: "none", opacity: 0.9, color: 'grey' }}>
    <Row>
      <Col className="col-lg-3 col-sm-1"></Col>
      <Col className="col-lg-6 col-sm-10">
        <Fade right exit distance={'0.33em'} delay={111} duration={333} distance={'0.33em'}>
          <p style={{ marginBottom: '3em' }}>Ambitious, self-taught, freelance <span style={splash}>full stack web developer</span> and designer specializing in front-end development and design. Seeking a full-time position with a digital design/development agency or enterprise team.</p>
          <p style={{ marginBottom: '3em' }}>Curious lifelong learner, endlessly fascinated by the wonders and complexities of sophisticated, yet minimalist, design and their manifestation in web applications.</p>
          <p style={{ marginBottom: '3em' }}>Ready to expand, refine, and grow my craft in a small team environment, collaborating with designers, artists, and developers to deliver highly refined, polished full stack web apps.</p>
        </Fade>
      </Col>
      <Col className="col-lg-3 col-sm-1"></Col>
    </Row>
  </Container>
)

/* Products component */
const Skills = () => (
  <Container className="container-fluid">
    <Row>
      <Col className="col-lg-4" style={{ background: '#008BF8' }}>
        skill talk
      </Col>
    </Row>
  </Container>
)

const Works = () => (
  <div>web werk</div>
)

const Sandbox = () => (
  <SectionOne />
)

const RedirectButtonPage = () => (
  <RedirectButton />
)

const Missing = () => (
  <div className="mega-text">
    404
  </div>
)

/* App component */
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav style={{
          position: 'fixed',
          zIndex: 1000,
          width: '100%',
          top: 0,
          left: 0,
          background: 'none',
          padding: '1em'
        }}>
          {/* NavLink components are used for NavLinking to other views  */}
          <NavItem>
            <NavLink className="navLink" exact to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="navLink" to="/category">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="navLink" to="/products">Skills</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="navLink" to="/works">Selected Works</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="navLink" to="/sandbox">sand</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="navLink" to="/RedirectButton">RedirectButton</NavLink>
          </NavItem>
        </Nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/category" component={About} />
          <Route path="/products" component={Skills} />
          <Route path="/works" component={SelectedWorks} />
          <Route path="/sandbox" component={Sandbox} />
          <Route path="/RedirectButton" component={RedirectButtonPage} />
          <Route component={Missing} />
        </Switch>
      </div>
    )
  }
}

export default App;
