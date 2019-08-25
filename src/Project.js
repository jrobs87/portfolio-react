import React, { Component } from 'react';



class Project extends Component {
    constructor(props) {
        super(props);

        this.state = {
            img: '',
            active: false,

        }
    }
    render() {
        return (
            <Container style={{marginTop: '22%', marginBottom: '100vh'}}>
            <Parallax x={[-100, 1]} y={['200%', '200%']}>
               <Row>               
               <Col className="col-11">
                   <span style={{textAlign: 'right'}}>
                           <h6 style={{borderBottom: '4px solid black'}}>no. 03.01 - 2019</h6>
                           </span>
                       <div className="mega-text" >
                           ATL CFO FORUM 
                           <span>
                           <Ticker offset="run-in" speed={6} offset>
                           {() => <h6 style={{ color: '#FF5400', marginRight: '3px' }}>{this.projects.stack.join(' ').toUpperCase()}</h6>}
                       </Ticker>
                           </span>                       
                        </div>                     
                   </Col>             
               </Row>
               </Parallax>
               <Project />
           </Container>
        )
    }
}

export default Project