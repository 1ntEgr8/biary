import React, {Component} from 'react';

const style = {
	alignment: 'center'
	
}

class Journal extends Component{
  render(){
    let diaryViews = [];
    for(let i = 0; i<5; i++){
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
