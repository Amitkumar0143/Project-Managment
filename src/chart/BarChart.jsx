import React from 'react'
import ReactApexChart from 'react-apexcharts';

export const BarChart = () => {
 
      const options ={
        series: [44, 55, 67, 83],
        chart: {
        height: 350,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '22px',
            },
            value: {
              fontSize: '16px',
            },
            total: {
              show: true,
              label: 'Total',
              formatter: function (w) {
                return 249
              }
            }
          }
        }
      },
      labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
      };

     
        return (
          <div id="chart">
            <ReactApexChart
              options={options.chart}
              series={options.series}
              type="area"
              height={350}
            />
          </div>
        );
      
    };
    