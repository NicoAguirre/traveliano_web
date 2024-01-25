import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export default function PieChart(){
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(()=>{
    if(chartInstance.current){
      chartInstance.current.destroy()
    }
    const myChartRef = chartRef.current.getContext("2d");
    

    chartInstance.current = new Chart(myChartRef,{
      type:"pie",
      data:{
              labels:["Label1", "Label2", "Label3"],
              datasets :[
              {
                data: [300,50,100],
                backgroundColor: [
                  'rgb255,99.132)',
                  'rgb(54,162,86)',
                  'rgb(255,205,86)'
                ],
              }
              ]
            },
      options: {
        responsive: true,
        maintainAspectRatio: false, // Esto permite ajustar el tamaño del gráfico sin mantener el aspecto original
        plugins: {
          legend: {
            position: 'top', // Puedes ajustar la posición de la leyenda si es necesario
          },
        },
      },
      })
      return () =>{
        if(chartInstance.current){
          chartInstance.current.destroy()
        }

      }
    },[]);

  return (
    <div>
      <canvas ref={chartRef} style={{width:"300px",height:"200px"}}/>
    </div>
  )
}
