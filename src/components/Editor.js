import React, {Component} from 'react';
import WebcamCapture from './WebcamCapture';

export let journalText = '';

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
    event.preventDefault();
    journalText = this.state.value;
    fetch('http://localhost:3001/api/putData',{
        method: "POST",
        body: JSON.stringify(journalText),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(response => {
        response.json().then(data =>{
          console.log("Successful" + data);
        })
    });
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
