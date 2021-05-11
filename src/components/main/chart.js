import { useMemo } from 'react'
import { Radar } from 'react-chartjs-2';
import ChartStyle from '../../styles/scss/Chart.module.scss'

const Chart = () => {
    const chartData = useMemo(() => {
        return {
            labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
            datasets: [
              {
                label: '나의 스킬 포인트',
                data: [2, 9, 3, 5, 2, 3],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: '#ffffff',
                borderWidth: 1,
              },
            ],
          }
    })

    const options = {
        scale: {
            ticks: {
                beginAtZero: true,
                min: 0,
                max: 5,
                stepSize: 1
            },
            pointLabels: { fontSize: 30 },
        }
    }

    console.log(chartData)

    return (
        <div className={ChartStyle.chart}>
            <div className={ChartStyle.graph}>
                <Radar data={chartData} options={options}/>
            </div>
        </div>
    )
}

export default Chart