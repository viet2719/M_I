import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import styles from "@/styles/mi/resuiltmi.module.scss"

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const data = {
  labels: ['IA', 'IE', 'LO', 'LI', 'SP', 'BO','MU','NQ','EX'],
  datasets: [
    {
      label: 'Chỉ số',
      data: [18, 18, 16, 17, 24, 16, 17, 23, 19],
      backgroundColor: 'rgba(255, 99, 132, 0)',
      borderColor: '#4c5bd4',
      borderWidth: 4,
   
    },
  ],
};
export const options = {
    scales: {
      r: {
        min: 0, 
        max: 30, 
        stepSize: 5, 
        
      },
    },
  };

export default function App() {
  return <Radar 
            className={styles.rada}
            data={data}  
            options={options}
          />;
}
