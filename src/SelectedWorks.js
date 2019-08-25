import React, { Component } from 'react';
import ProjectTicker from './ProjectTicker';
import { Container, Row, Col } from 'reactstrap';
import Ticker from 'react-ticker';
import Fade from 'react-reveal/Fade';
import { Parallax } from 'react-scroll-parallax';


const splash = {
    color: 'black'
  }

class Project extends Component {
    projects = {
        name: 'Project Example',
        year: '1987',
        description: 'A simple project',
        stack: ['Wordpress', 'Divi', 'HTML5', 'CSS', 'Javascript', 'Jquery', 'PHP']
    }
    render() {
        console.log(this.projects)
        return (
            <Container style={{marginTop: '22%', marginBottom: '100vh'}}>
                <Row>              
                <Col className="col-11 offset-1" style={{padding: 0}}>
                    <span style={{textAlign: 'right'}}>
                            <h6 style={{borderBottom: '4px solid black'}}>no. 03.01 - 2019</h6>
                            </span>
                        <div className="mega-text" >
                            ATL CFO FORUM 
                            <span>
                            <Ticker offset="run-in" speed={5} offset>
                            {() => <h6 style={{ color: '#FF5400', marginRight: '3px' }}>{this.projects.stack.join(' ').toUpperCase()}</h6>}
                        </Ticker>
                            </span>                       
                         </div>   
                                           
                    </Col>    
                           
                </Row>
                

                
                
            </Container>
        )
    }
}

export default Project