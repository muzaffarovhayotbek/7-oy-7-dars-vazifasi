import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const LineChart = () => {
  const [state, setState] = useState({
    series: [
      {
        name: 'Savdo hajmi',
        data: [
          1200, 1240, 2200, 3200, 4000, 6000, 6500, 7000, 7200, 7500, 7900,
          8000,
        ],
      },
    ],
    options: {
      chart: {
        type: 'line',
        height: 350,
      },
      stroke: {
        curve: 'smooth',
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          'Yanvar',
          'Fevral',
          'Mart',
          'Aprel',
          'May',
          'Iyun',
          'Iyul',
          'Avgust',
          'Sentabr',
          'Oktabr',
          'Noyabr',
          'Dekabr',
        ],
      },
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="line"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default LineChart;
