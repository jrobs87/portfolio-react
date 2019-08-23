import { Redirect } from 'react-router';
import React, { Component } from 'react'

// ... your class implementation

class RedirectButton extends Component {
  constructor() {
    super()
    this.state = {
      redirect: false
    }

    this.handleOnClick = () => {
      // some action...
      // then redirect
      console.log('hi');
      console.log(this.props)
      this.setState({ redirect: true });
    }

  }
  render() {
    if (this.state.redirect) {
      return <Redirect push to="/" />;
    }
    return <button onClick={this.handleOnClick} type="button" style={{ marginTop: '28%' }}>Button</button>;
  }
}


export default RedirectButton