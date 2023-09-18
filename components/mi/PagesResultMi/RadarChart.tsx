import React from 'react'
import {
	Chart as ChartJS,
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend,
} from 'chart.js'
import { Radar } from 'react-chartjs-2'
import styles from '@/styles/mi/resuiltmi.module.scss'
import { title } from '../QuizMi/dataQuiz'

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)
function getTitleById(id: any) {
	const titles = title.find((item) => item.id === id)
	return titles ? titles.content : 'Default Title' // Trả về tiêu đề hoặc một tiêu đề mặc định nếu không tìm thấy
}

export const data = {
	labels: ['IA', 'IE', 'LO', 'LI', 'SP', 'BO', 'MU', 'NA', 'EX'],
	datasets: [
		{
			label: '',
			data: [18, 18, 16, 17, 24, 16, 17, 23, 19],
			backgroundColor: 'rgba(255, 99, 132, 0)',
			borderColor: '#4c5bd4',
			borderWidth: 4,
		},
	],
}
export const options = {
	scales: {
		r: {
			min: 0,
			max: 30,
			stepSize: 2,
		},
	},
}

export default function App() {
	return (
		<div className="radachart">
			<Radar className={styles.rada} data={data} options={options} />
		</div>
	)
}
