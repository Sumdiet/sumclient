import { Pie } from 'react-chartjs-2';
import './style.sass'
const PieChartComponent = (props) => {
  
  const data = [Number(props.currentMacro.protein.replace(',','.')), Number(props.currentMacro.carbs.replace(',','.')), Number(props.currentMacro.fat.replace(',','.'))];
  console.log(data, 'po', props);
  const chartData = {
    labels: ['Proteína', 'Carboidrato', 'Gordura'],
    datasets: [
      {
        data: data,
        backgroundColor: ['red', 'blue', 'yellow']
      }
    ]
  };

  const chartOptions = {};

  return (<div id='chart-container'>
            <Pie data={chartData} options={chartOptions} />
          </div>)
};


export default PieChartComponent;
