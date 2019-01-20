import React, {Component} from 'react';
import Card from './Card';

class Header extends Component {
  cardData = [
    {
      title:'Keep a Biary',
      text:'Recount what you did, as well as your thoughts and feelings throughout the day. Record your physical and mental well-being. Take this time to reflect on your day. Grab a cup of warm tea, and just start writing!'
    },
    {
      title:'asdfa',
      text:'adfa'
    },
    {
      title:'afja',
      text:'wigj'
    }
  ]
  render() {
    return (
      <div>
      <div className="jumbotron">
        <h1 className="display-4 d-flex justify-content-center">Biary</h1>
        <p className="lead d-flex justify-content-center">Some cool tagline</p>
        <hr className="my-4 "/>
          <p className='d-flex justify-content-center'>Add some instructions</p>
          <div className='container col-2'>
          <a className="btn btn-danger d-flex justify-content-center" href="#" role="button">Get Started</a>
          </div>
      </div>
      <div className='d-flex'>
      <Card data={this.cardData[0]}/>
      <Card data={this.cardData[1]}/>
      <Card data={this.cardData[2]}/>
      </div>
    </div>
      );
  }
}

export default Header;
