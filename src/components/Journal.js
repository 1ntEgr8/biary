import React, {Component} from 'react';
import axios from 'axios';

class Journal extends Component{
	entries = {};

  render(){
		axios.get('http://localhost:3001/api/getData')
      .then(res => {
        let entries = res.data;
        console.log(entries);
      })
    return(
      <div>
      <h1>Journal view page</h1>
        <div></div>
     </div>
    );
  }
}

export default Journal;
