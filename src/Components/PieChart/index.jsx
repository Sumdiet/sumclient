import { Pie } from 'react-chartjs-2';
import './style.sass'
const PieChartComponent = (props) => {
  console.log('po', props);
  
  const data = [Number((props.currentMacro.protein || '0').replace(',','.')), Number((props.currentMacro.carbs || '0').replace(',','.')), Number((props.currentMacro.fat || '0').replace(',','.'))];
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
