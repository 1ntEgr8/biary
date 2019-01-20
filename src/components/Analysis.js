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
    return(
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
            title: 'Graph',
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
    );
  }
}

export default Analysis;
