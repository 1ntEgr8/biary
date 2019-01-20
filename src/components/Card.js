import React, {Component} from 'react';

class Card extends Component{
  render(){

    return(
      <div className="card ml-5 mr-5 mb-5" style={{width: '26rem'}}>
        <div class="container">
        <img src={this.props.data.image} className="d-flex justify-content-center card-img-top mt-3 ml-4" style={{height:'18rem', width: 'auto'}}/>
        </div>
        <div className="card-body">
          <h5 className="card-title">{this.props.data.title}</h5>
          <p className="card-text">{this.props.data.text}</p>
        </div>
      </div>
    );
  }
}

export default Card;
