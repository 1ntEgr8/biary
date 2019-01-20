import React, {Component} from 'react';
import Card from './Card';

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
      <div className="jumbotron">
        <h1 className="display-4 d-flex justify-content-center">Biary</h1>
        <p className="lead d-flex justify-content-center">Let your thoughts help you</p>
        <hr className="my-4 "/>
          <p className='d-flex justify-content-center'></p>
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
