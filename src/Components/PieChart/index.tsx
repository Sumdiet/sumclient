import { PieChart} from 'recharts';
import { Pie } from 'react-chartjs-2';
import PieChartProps from './type';
import { useEffect, useState } from 'react';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

export default function PieChartComponent(props: PieChartProps) {
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
    const data = [
      { name: 'iphone4', value: 120, fill: '#ff7300' },
      { name: 'iphone4s', value: 500, fill: '#e5671a' },
      { name: 'iphone5', value: 600, fill: '#907213' },
    ];
    return (
        <PieChart width={300} height={300} >
            {/* <Pie data={data}/> */}
            {/* <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label /> */}
        </PieChart>
    )
}