/*import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
  const horasTrabajadas = 65;
  const valorPresupuestado = 80;

  const porcentajeHorasTrabajadas = (horasTrabajadas / valorPresupuestado) * 100;

  const data = {
    labels: ['Label 1'],
    datasets: [
      {
        label: 'Dataset 1',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 0,
        hoverBackgroundColor: 'rgba(75,192,192,0.6)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [porcentajeHorasTrabajadas],
        indexAxis: 'y',
        barThickness: 30,
      },
    ],
  };

  const options = {
    scales: {
      
      yAxis: {
        stacked: true,
        display: false
        
      },
      xAxis: {
        stacked: true,
        min: 0,
        max: 100,
        
        ticks: {
          callback: function (value) {
            return value + '%';
          },
        },
        display: false
      },
    },
    
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;*/
import React from 'react';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

const BarChart = () => {
  const horasTrabajadas = 65;
  const valorPresupuestado = 80;

  const porcentajeHorasTrabajadas = (horasTrabajadas / valorPresupuestado) * 100;

  const data = {
    labels: ['Label 1'],
    datasets: [
      {
        label: 'Dataset 1',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 0,
        hoverBackgroundColor: 'rgba(75,192,192,0.6)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [porcentajeHorasTrabajadas],
        indexAxis: 'y',
        barThickness: 30,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
        offset: -10,
        display: 'auto',
        color: 'black',
        font: {
          weight: 'bold',
        },
        formatter: (value) => {
          return value + '%';
        },
      },
    },
  };

  return <Bar data={data} options={options} plugins={[ChartDataLabels]} />;
};

export default BarChart;