// import { PieChart} from 'recharts';
// import { Pie } from 'react-chartjs-2';
// // import PieChartProps from './type';
// import { useEffect, useState } from 'react';

// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import React, { Component } from 'react';
import { Surface, Pie } from 'recharts';


export default function PieChartComponent(props) {
    const data = [
        { name: 'iphone4', value: 120, fill: '#ff7300' },
        { name: 'iphone4s', value: 500, fill: '#e5671a' },
        { name: 'iphone5', value: 600, fill: '#907213' },
      ];
      const sectors = [
        { cx: 150, cy: 150, startAngle: 0, endAngle: 60, innerRadius: 100, outerRadius: 150 },
        { cx: 150, cy: 150, startAngle: 60, endAngle: 120, innerRadius: 100, outerRadius: 150 },
        { cx: 150, cy: 150, startAngle: 120, endAngle: 180, innerRadius: 100, outerRadius: 150 },
        { cx: 150, cy: 150, startAngle: 180, endAngle: 240, innerRadius: 100, outerRadius: 150 },
        { cx: 150, cy: 150, startAngle: 240, endAngle: 300, innerRadius: 100, outerRadius: 150 },
        { cx: 150, cy: 150, startAngle: 300, endAngle: 360, innerRadius: 100, outerRadius: 150 },
      ];
      
    // const [data, setData] = useState(props.currentMacro)
    // const [list, setList] = useState({} as {
    //     labels: string[];
    //     datasets: {
    //         data: number[];
    //         backgroundColor: string[];
    //         hoverBackgroundColor: string[];
    //     }[];
    // });
    // useEffect(() => {
    //     setData(props.currentMacro);
    //     setList({
    //         labels: ['Proteína', 'Carboidrato', 'Gordura'],
    //         datasets: [
    //           {
    //             data: [Number(data.protein!), Number(data.carbs!), Number(data.fat!)],
    //             backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    //             hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    //           },
    //         ],
    //       })
    //   }, [0]);
    
    // ChartJS.register(ArcElement, Tooltip, Legend);
    // const data = {
    //     labels: ['Maçã', 'Banana', 'Laranja'],
    //     datasets: [
    //       {
    //         data: [10, 20, 30],
    //         backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    //         hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    //       },
    //     ],
    //   };
    // const data = [
    //   { name: 'iphone4', value: 120, fill: '#ff7300' },
    //   { name: 'iphone4s', value: 500, fill: '#e5671a' },
    //   { name: 'iphone5', value: 600, fill: '#907213' },
    // ];
    return (
        <Surface width={500} height={500}>
        <Pie
          cx={150}
          cy={150}
          endAngle={0}
          startAngle={360}
          outerRadius={150}
          innerRadius={180}
          data={data}
          sectors={sectors}
          paddingAngle={10}
          dataKey="value"
          fill="#fff"
          stroke="#000"
        />
      </Surface>
        // // <PieChart width={300} height={300} >
        //     // {/* <Pie data={data}/>
        //     <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d"/>
        // </PieChart> */}
    )
}