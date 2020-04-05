import React from 'react'
import axios from 'axios'
import { Line } from 'react-chartjs-2'; 
class MyChart extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: {}
    }
  }
  componentWillMount(){
    axios.get('https://corona.lmao.ninja/v2/historical/all')
         .then(res => {
           let data = {
            labels: [],
             datasets: [
              {
                label: 'Total cases',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: []
              },
              {
                label: 'Total deaths',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: '#F65164',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: []
              },
              {
                label: 'Total recovered',
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgb(68, 155, 226)',
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: 'rgb(68, 155, 226)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgb(68, 155, 226)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: []
              }
             ]
           }
           for( let i in res.data.cases){
             data.labels.push(i)
             data.datasets[0].data.push(res.data.cases[i])
           }
           for( let i in res.data.deaths){
            data.datasets[1].data.push(res.data.deaths[i])
           } 
           for( let i in res.data.recovered){
            data.datasets[2].data.push(res.data.recovered[i])
           }  
           this.setState({ data: data})
         })
  }
  render(){ 

    let lineChart = (
      <div
        style={{
          width: '90%',
          height: '300px',
          textAlign: 'center'
        }}
      >
        <h2>Corona Virus</h2>
        <Line data={this.state.data}/>
      </div>
    )
    return( lineChart)
  }
}

export default MyChart;