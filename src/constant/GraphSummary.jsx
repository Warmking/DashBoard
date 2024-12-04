import React from "react";
import Chart from 'react-apexcharts'
const data = {
  series: [
    {
      name: "Total orders received",
      data: [12,18,5,16,13,16,22],
    },
    {
      name: "Orders approval pending",
      data: [11,9,6,14,2,13,12],
    }
  ],
  options: {
    chart: {
      type: "bar",
      height: 50,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        borderRadiusApplication: "end",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thrusday',
      'Friday',
      'Saturday',
      'Sunday'
      ],
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
const GraphSummary = () => {
  return (
    <div>
      <div id="chart">
        <Chart
          options={data.options}
          series={data.series}
          type="bar"
          height={250}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default GraphSummary;
