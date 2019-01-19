import React, {Component} from 'react';
import axios from 'axios'; 
import WebcamCapture from './WebcamCapture';

class Editor extends Component{
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log(this.state.value);
    let dbEntry = {
      message: this.state.value, 
      name: "THIS IS A MESSAGE"
    }
    axios.post('http://localhost:3001/api/putData', dbEntry)
      .then(res => console.log(res.data));

    /*axios.get('http://localhost:3001/api/getData')
      .then(res => {
        let entries = res.data; 
        console.log(res); 
      })
      */
  }

  render() {
    return (
      <div className="container">
      <WebcamCapture />
        <form onSubmit={this.handleSubmit} method='POST'>
          <div className="form-group">
            <textarea value={this.state.value} onChange={this.handleChange} className="form-control mt-4" placeholder="Write away!" style={{height: '40rem'}}/>
            <input type="submit" value="Post" className="btm btn-primary"/>
          </div>
        </form>
      </div>
    );
  }
}

export default Editor;
