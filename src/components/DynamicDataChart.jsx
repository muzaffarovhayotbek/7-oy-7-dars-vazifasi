import { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const DynamicDataChart = ({ data }) => {
  const [chartData, setChartData] = useState({
    series: [{ name: 'Savdo hajmi', data: [] }],
    options: {
      chart: { height: 350, type: 'bar' },
      plotOptions: {
        bar: { borderRadius: 10, dataLabels: { position: 'top' } },
      },
      dataLabels: {
        enabled: true,
        formatter: (val) => val + ' %',
        offsetY: -20,
        style: { fontSize: '12px', colors: ['#304758'] },
      },
      xaxis: {
        categories: [],
        position: 'top',
        axisBorder: { show: false },
        axisTicks: { show: false },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: { enabled: true },
      },
      yaxis: { labels: { show: true, formatter: (val) => val + ' %' } },
      title: {
        text: 'Oylik Savdo Hajmi',
        floating: true,
        offsetY: 330,
        align: 'center',
        style: { color: '#444' },
      },
    },
  });

  useEffect(() => {
    setChartData((prev) => ({
      ...prev,
      series: [{ name: 'Savdo hajmi', data: data.map((item) => item.sales) }],
      options: {
        ...prev.options,
        xaxis: {
          ...prev.options.xaxis,
          categories: data.map((item) => item.month),
        },
      },
    }));
  }, [data]);

  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default DynamicDataChart;
