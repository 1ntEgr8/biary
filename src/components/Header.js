import React, {Component} from 'react';
import Card from './Card';
import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom';


class Header extends Component {
  cardData = [
    {
      title:'Keep a Biary',
      text:'Recount what you did, as well as your thoughts and feelings throughout the day. Record your physical and mental well-being. Take this time to reflect on your day. Grab a cup of warm tea, and just start writing!',
      image: 'assets/biary.png'
    },
    {
      title:'Selfie Everyday',
      text:'Snap a picture of yourself along with your biary entry. You can snap a picture in the app itself through the webcam, or you can upload pictures from earlier in the day.',
      image: 'assets/selfie.png'
    },
    {
      title:'Be your best, All the Time',
      text:"We'll take the data from your biary entries and generate a graph showing how your mood fluctuates over time. With this information, you can pinpoint times of high stress within your week or month and plan accordingly",
      image: 'assets/best.png'

    }
  ]
  render() {
    return (
      <div>
      <div className="jumbotron" style={{backgroundColor: "cyan"}}>
        <h1 className="display-4 d-flex justify-content-center text-muted" style={{fontWeight: "bold"}}>Biary</h1>
        <p className="lead d-flex justify-content-center">Let your emotions run loose</p>
        <hr className="my-4 "/>
          <p className='d-flex justify-content-center'></p>
          <div className='container col-2'>
          <NavLink to="/editor" className="btn btn-danger d-flex justify-content-center" role="button">Get Started</NavLink>
          </div>
      </div>
      <div className='d-flex'>
        <Card data={this.cardData[0]}/>
        <Card data={this.cardData[1]}/>
        <Card data={this.cardData[2]}/>
      </div>
        <p style={{textAlign: 'center', color:'white'}}>(C) The Biarrhea Organization</p>
      </div>
      );
  }
}

export default Header;
