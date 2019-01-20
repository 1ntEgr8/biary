import React, {Component} from 'react';

class Header extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4 d-flex justify-content-center">Biary</h1>
        <p className="lead d-flex justify-content-center">Some cool tagline</p>
        <hr className="my-4 "/>
          <p>Add some instructions</p>
          <a className="btn btn-primary btn-lg" href="#" role="button">Get Started</a>
      </div>
      );
  }
}

export default Header;
