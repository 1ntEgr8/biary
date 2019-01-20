import React, {Component} from 'react';
import axios from 'axios';
import Webcam from "react-webcam";

class Editor extends Component{
  dbEntry = {};

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(event) {
    this.setState({value: event.target.value});
  };

  handleSubmit(event) {
    event.preventDefault();
    console.log("I have reached this part and am putting stuff onto the database");
    this.dbEntry.message = this.state.value;
    axios.post('http://localhost:3001/api/putData', this.dbEntry)
      .then(res => console.log(res.data));
    console.log(this.dbEntry);
    /*axios.get('http://localhost:3001/api/getData')
      .then(res => {
        let entries = res.data;
        console.log(res);
      })
      */
      let webCam = document.getElementById('webcam');
      webCam.style.display = 'none';
      let formId = document.getElementById('journal');
      formId.style.display='none';
      let success = document.getElementById('success');
      success.style.visibility='visible';

    };

    setRef = webcam => {
      this.webcam = webcam;
    };

    capture = () => {
      this.imageSrc = this.webcam.getScreenshot();
      console.log('reached here');
      this.dbEntry.image = this.imageSrc;
    };

  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };

    return (
      <div className="container">
      <div id='webcam'>
      <Webcam
        audio={false}
        height={350}
        ref={this.setRef}
        screenshotFormat="image/jpeg"
        width={350}
        videoConstraints={videoConstraints}
      />
      <button onClick={this.capture}>Capture photo</button>
      </div>

        <form onSubmit={this.handleSubmit} method='POST' id='journal'>
          <div className="form-group">
            <textarea value={this.state.value} onChange={this.handleChange} className="form-control mt-4" placeholder="Write away!" style={{height: '40rem'}}/>
            <input type="submit" value="Post" className="btm btn-primary"/>
          </div>
        </form>
        <h1 style={{visibility:'hidden'}} id='success'>WOO HOOO</h1>
      </div>
    );
  }
}

export default Editor;
