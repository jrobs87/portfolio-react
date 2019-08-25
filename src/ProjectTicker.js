import React from 'react';
import Ticker from 'react-ticker';

const project = {
    name: 'Project Example',
    year: '1987',
    description: 'A simple project',
    stack: ['Node', 'Express','React','MongoDB','Heroku']
}

// 17BEBB - tiffany blue

function ProjectTicker() {
    return (
      <Ticker offset="run-in" speed={6}>
        {() => <h6 style={{color: '#FF5400', marginRight: '3px'}}>{project.stack.join(' ').toUpperCase()}</h6>}
      </Ticker>
    );
  }
  
  export default ProjectTicker;