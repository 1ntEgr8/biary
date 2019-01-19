import React, {Component} from 'react';

class Editor extends Component{
  render(){
    return(
      <form>
        <div className="form-group">
          <textarea className="form-control"></textarea>
        </div>
      </form>
    );
  }
}

export default Editor;
