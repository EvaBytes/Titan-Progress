import React, { useRef, useEffect } from 'react';
import * as echarts from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { PieChart } from 'echarts/charts';

echarts.use([PieChart, CanvasRenderer]); 

const DonutChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    const option = {
      title: {
        text: '', 
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: 'Activities',
          type: 'pie',
          radius: ['50%', '70%'], 
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '18',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: data.map(item => ({
            value: item.value,
            name: item.name
          }))
        }
      ]
    };

    chart.setOption(option);

    return () => {
      chart.dispose();
    };
  }, [data]);

  return (
    <div ref={chartRef} style={{ width: '300px', height: '300px' }}></div>
  );
};

export default DonutChart;