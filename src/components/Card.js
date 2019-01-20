import React, {Component} from 'react';

class Card extends Component{
  render(){

    return(
      <div className="card ml-3 mr-3" style={{width:'18rem;'}}>
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{this.props.data.title}</h5>
          <p className="card-text">{this.props.data.text}</p>
        </div>
      </div>
    );
  }
}

export default Card;
