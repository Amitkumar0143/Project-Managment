import React from "react";
import ReactApexChart from "react-apexcharts";

export class LineChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Net Profit",
          data: [44, 55, 57, 56, 61, 58, 63, ],
        },
        {
          name: "Revenue",
          data: [76, 85, 101, 98, 87, 105, 91,],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "80%",
            endingShape: "rounded",
            borderRadius: 7,
          },
        },
        dataLabels: {
          enabled: false,
        },
        colors: ["#00E396", "#008FFB"],
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          categories: ["Mon", "Tue", "Wed", "Thu", "Fri"],
        },

        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands";
            },
          },
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={400}
        />
      </div>
    );
  }
}
