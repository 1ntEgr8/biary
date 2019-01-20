import React, {Component} from 'react';
import axios from 'axios';
import Webcam from "react-webcam";

class Editor extends Component{
  dbEntry = {};
  imageSrc = '';

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


    let webCam = document.getElementById('webcam');
    webCam.style.display = 'none';
    let formId = document.getElementById('journal');
    formId.style.display='none';
    let success = document.getElementById('success');
    success.style.visibility='visible';

    axios.post('http://localhost:3001/api/analyzeSentiment', { "text": this.state.value })
      .then(res => {
          this.dbEntry.message = this.state.value;
          this.dbEntry.name = "Bud Peterson";
          this.dbEntry.sentiment = res.data.sentiment;

          console.log(this.dbEntry);
          console.log('dbEntry^');
          axios.post('http://localhost:3001/api/putData', this.dbEntry)
            .then(res => {
                console.log(res.data)

                axios.get('http://localhost:3001/api/getData')
                  .then(res => {
                    let entries = res.data;
                    console.log(res);
                });
            });
      });

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
                <form onSubmit={this.handleSubmit} id='journal'>
                  <div className="form-group">
                    <textarea value={this.state.value} onChange={this.handleChange} className="form-control mt-4" placeholder="Write away!" style={{height: '40rem'}}/>
                      <div className='container mt-4 d-flex justify-content-center'>
                        <input type="submit" value="Post" className="btn btn-success btn-large pr-5 pl-5 "/>
                      </div>
                  </div>
                </form>
            <div className='alert alert-success' role='alert' style={{visibility:'hidden'}}>
            <h1 id='success'><a href='https://github.com/1ntEgr8'>WOO HOOO</a></h1>
            </div>
      </div>
    );
  }
}

export default Editor;
