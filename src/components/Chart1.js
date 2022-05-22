import React from 'react' 
import { Line } from 'react-chartjs-2'

const options = {
    scales: {
        y: {
            ticks: {
                color: 'black',
                font: {
                    size: 18,
                }
            },
            grid: {
                color: 'black'
            }
        },
        x:{
            ticks: {
                color: 'black',
                font: {
                    size: 18
                }
            }
        }
    },
}

const data = (canvas, props) => {
    const ctx = canvas.getContext('2d')
    const redbackgroundGradient = ctx.createLinearGradient(0, 0, 0, 500);
    
    redbackgroundGradient.addColorStop(0, 'rgba(245, 71, 73, 0.76)');
    redbackgroundGradient.addColorStop(0.5, 'rgba(245, 71, 73, 0.2)');

    let chartdata = {
        labels: ['jan', 'feb', 'march', 'april', 'may', 'jun', 'july', 'august'],
        datasets: [
            {
                label: 'Clients trend',
                data: [12, 19, 3, 5, 2, 20, 10, 0],
                fill: true,
                backgroundColor: redbackgroundGradient,
                pointRadius: 5,
                pointBorderWidth: 2,
                tension: 0.4
            }
        ]
    }
    return (
        <Line data={chartdata} options={options} width={900} height={500} datasets={props} ></Line>
    )
}

export default function Chart() {
    return(
        <div>
            {data(document.createElement('canvas'))}
        </div>
    )
}
