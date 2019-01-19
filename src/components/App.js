import React, {Component} from 'react';
import Header from './Header';
import Editor from './Editor';

class App extends Component{
  render(){
    return(
      <div className="container">
        <Header />
        <Editor />
      </div>
    );
  }
}


export default App;
