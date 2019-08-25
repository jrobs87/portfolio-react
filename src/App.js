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
import Introduction from './Introduction';
import SelectedWorks from './SelectedWorks';
import About from './About';


// importing components

const style = {
  width: '6em'
}



const text = {
  color: '#F17300'
}

const menu = {
  transform: 'rotate(20deg)'
}


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
  <Introduction />
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
          // border: '2px solid red',
          zIndex: 1000,
          width: '100%',
          top: 0,
          left: '-48%',
          background: 'none',
          padding: '1em',
          transform: 'rotate(-90deg)'
        }}>
          {/* NavLink components are used for NavLinking to other views  */}
          <NavItem>
            <NavLink className="navLink" exact to="/">Intro</NavLink>
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
          <Route exact path="/" component={Introduction} />
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
