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
    console.log(this.state.value);
    let dbEntry = {
      message: this.state.value,
      user: "President Peterson"
    }

    event.preventDefault();
    console.log("I have reached this part and am putting stuff onto the database");
    this.dbEntry.message = this.state.value;
    axios.post('http://localhost:3001/api/putData', this.dbEntry)
      .then(res => console.log(res.data));
    console.log(this.dbEntry);

    let webCam = document.getElementById('webcam');
    webCam.style.display = 'none';
    let formId = document.getElementById('journal');
    formId.style.display='none';
    let success = document.getElementById('success');
    success.style.visibility='visible';
  }

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
          <div className='d-flex justify-content-center mb-0'>
            <Webcam
              audio={false}
              height={350}
              ref={this.setRef}
              screenshotFormat="image/jpeg"
              width={500}
              videoConstraints={videoConstraints}
            />
          </div>
        <div className='d-flex justify-content-center'>
          <button className='btn btn-info' onClick={this.capture}>Capture photo</button>
        </div>
      </div>
      </div>

        <form onSubmit={this.handleSubmit} method='POST' id='journal'>
          <div className="form-group">
            <textarea value={this.state.value} onChange={this.handleChange} className="form-control mt-4" placeholder="Write away!" style={{height: '40rem'}}/>
            <div className='container mt-4 d-flex justify-content-center'>
            <input type="submit" value="Post" className="btn btn-success btn-large pr-5 pl-5 "/>
            </div>
          </form>
          <h1 style={{visibility:'hidden'}} id='success'>WOO HOOO</h1>
      </div>
      </div>
    );
  }
}

export default Editor;
