import React from 'react'

import data from '../../Supports/Data/Chart'
import style from './Counting.module.scss'
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registrace potřebných komponent pro Line graf
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Counting = () => {
  const data = {
    type: 'bar',
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Počet návštěv',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        backgroundColor: 'rgb(75,192,192)',
        borderColor: 'rgba(75,192,192,0.2)',
      },
    ],
  };
  
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  
  const LineChart: React.FC =()=> {
    return <Line data={data} options={options} />;
  }

  return (
    <div className={style['Counting']}>
      <div className={style['Counting__Row']}>
        <h3>Přehled</h3>
        <button>Srpen</button>
      </div>
      <div className={style['Counting__Chart']}>
      <LineChart />
      </div>
    </div>
  )
}

export default Counting