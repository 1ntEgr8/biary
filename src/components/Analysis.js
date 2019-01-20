import React, {Component} from 'react';
import Plot from 'react-plotly.js';

class Analysis extends Component{
  constructor(props){
      super(props);

      this.state = {
        messages: []
      };
  };

  componentDidMount(){
    fetch('http://localhost:3001/api/getData')
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      this.setState({
        messages: data['data']
      })
    })
  }

  render(){
    const {messages} = this.state;
    let xlist = [];
    let sentimentList = [];
    messages.map((data, index)=>{
      xlist.push(index+1);
      sentimentList.push(messages[index]['sentiment']);
    })
    let good = true;
    for(let i = sentimentList.length; i>sentimentList-6; i--){
      if(sentimentList[i] > 0){
        good = false;
        break;
      }
    }
    if(good==true){
      let goodMessage = document.getElementById('good');
      goodMessage.style.visibility='visible';
    }
    else{
      let goodMessage = document.getElementById('good');
      let badMessage = document.getElementById('bad');
      goodMessage.style.display='none';
      badMessage.style.visibility='visible';
    }

    return(
      <div>
        <div className='jumbotron bg-info text-white'>
          <div className='d-flex justify-content-center'>
          <h1>Here's how you've been doing...</h1>
          </div>
        </div>
        <div className='d-flex justify-content-center'>
      <Plot
        data={[
          {
            x: xlist,
            y: sentimentList,
            type: 'scatter',
            mode: 'lines+points',
            marker: {color: 'red'},
          },
         ]}
        layout={
          {
            margin: 0,
            padding: 0,
            title: 'Sentiment Analysis Chart',
            xaxis: {
                title: 'Entry number',
                titlefont: {
                  family: 'Arial, bold',
                  size: 14,
                  color: '#7f7f7f'
                }
            },
            yaxis: {
                title: 'Feeling Score',
                titlefont: {
                  family: 'Arial, bold',
                  size: 14,
                  color: '#7f7f7f'
                }
            }
          }
        }
      />
  </div>
  <div id="good" class='jumbotron alert alert-info' style={{visibility:'hidden'}}>
    <h1>WOO HOO!!! It looks like your'e doing grrrrreat</h1>
    <h3>Keep up the good work!</h3>
  </div>
  <div id="bad" class='jumbotron alert alert-info' style={{visibility:'hidden'}}>
    <h1>Looks like you've not been doing so well lately...</h1>
    <h3>Has something been bothering you?</h3>
    <hr/>
    <h2>Here are somethings you could do</h2>
    <h4>Try talking about your problems to someone you trust</h4>
    <h4>Watch a funny video!</h4>
    <h4>Seriously, take some rest and have FUN!!!</h4>
    <h4>Do something you love</h4>
    <h4>DONT FORGET TO KEEP UPDATING YOUR BIARY!</h4>
  </div>
  </div>
    );
  }
}

export default Analysis;
