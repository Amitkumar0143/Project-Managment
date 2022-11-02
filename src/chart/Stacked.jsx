import React from 'react'
import ReactApexChart from 'react-apexcharts';

export const Stacked = () => {
 
      const options ={
        series: [{
        data: [21, 22, 10, 28, 16, 21, 13, 30]
      }],
        chart: {
        height: 350,
        type: 'bar',
        events: {
          click: function(chart, w, e) {
  
          }
        }
      },
      colors: '#7731e4',
      plotOptions: {
        bar: {
          columnWidth: '45%',
          distributed: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      xaxis: {
        categories: [
          ['John', 'Doe'],
          ['Joe', 'Smith'],
          ['Jake', 'Williams'],
          'Amber',
          ['Peter', 'Brown'],
          ['Mary', 'Evans'],
          ['David', 'Wilson'],
          ['Lily', 'Roberts'], 
        ],
        labels: {
          style: {
            colors: '#7731e4',
            fontSize: '12px'
          }
        }
      }
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
    