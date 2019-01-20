import React, {Component} from 'react';
import Plot from 'react-plotly.js'

class Analysis extends Component{
  render(){
    return(
    <div>
      <h1>Welcome to the Data Analysis page</h1>
      <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
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
                title: 'Day of the Year',
                titlefont: {
                family: 'Helvetica neue, bold',
                size: 14,
                color: '#7f7f7f'
                            }
                        },
            yaxis: {
                title: 'Feeling Score',
                titlefont: {
                family: 'Helvetica neue, bold',
                size: 14,
                color: '#7f7f7f'
                          }
            }
          }
        }
      />
      </div>
    );
  }
}

export default Analysis;
