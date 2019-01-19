import React, {Component} from 'react';
import Header from './components/Header';
import Editor from './components/Editor';
import Analysis from './components/Analysis';
import Journal from './components/Journal';

import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom';

class App extends Component{
  render(){
    return(
    <HashRouter>
      <div classNameName="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Biary</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink to="/" className="nav-link">About <span className="sr-only">(current)</span></NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/editor" className="nav-link">Create Entry</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/view" className="nav-link">View Journal</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/stats" className="nav-link">Stats</NavLink>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            </div>
          </nav>
        <div>
            <Route exact path="/" component={Header}/>
            <Route path="/editor" component={Editor}/>
            <Route path="/view" component={Journal}/>
            <Route path="/stats" component={Analysis}/>
        </div>
      </div>
    </HashRouter>
    );
  }
}


export default App;
