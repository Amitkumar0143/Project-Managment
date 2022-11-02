import React from "react";
import ReactApexChart from "react-apexcharts";

export class Donut extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      color: [ "#e7e7e7","#DF9500"],

      options: {
        chart: {
        type: 'donut',
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state}
          series={[30,30]}
          type="donut"
        />
      </div>
    );
  }
}
