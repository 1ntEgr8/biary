import React, {Component} from 'react';

class Analysis extends Component{
  render(){
    return(

      <Plot
        data={[
          {
            //x: [1, 2, 3] data from Google Cloud services,
            //y: [2, 6, 3] data from Google Clouod services,
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
    );
  }
}

export default Analysis;
