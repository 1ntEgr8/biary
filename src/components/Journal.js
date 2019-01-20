import React, {Component} from 'react';
import axios from 'axios';

class Journal extends Component{
	entries = {};

  render(){
		var entries = [];
		axios.get('http://localhost:3001/api/getData')
      .then(res => {
        entries = res.data;
        console.log(entries);
      })

		console.log(entries['data'])
    var diaryViews = [];
    for(let i = 0; i<entries['data'].length; i++){
      diaryViews.push(<h1 key={i}>Woo</h1>);
    }
    return(
      <div>
      <h1>Journal view page</h1>
        <div>{diaryViews}</div>
     </div>
    );
  }
}

export default Journal;
