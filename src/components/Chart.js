import React from 'react' 
import {} from 'chart.js/auto'
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


    const yellowbackgroundGradient = ctx.createLinearGradient(0, 0, 0, 500)

    yellowbackgroundGradient.addColorStop(0, 'rgba(252, 200, 39, 0.4')
    yellowbackgroundGradient.addColorStop(0.5, 'rgba(252, 200, 39, 0)')
    yellowbackgroundGradient.addColorStop(0.9, 'rgba(252, 200, 50, 0)')

    const bluebackgroundGradient = ctx.createLinearGradient(0, 0, 0, 500);

    bluebackgroundGradient.addColorStop(0, 'rgba(5, 0, 255, 0.4)')
    bluebackgroundGradient.addColorStop(0.8, 'rgba(252, 200, 39, 0)')

    let chartdata = {
        labels: ['jan', 'feb', 'march', 'april', 'may', 'jun', 'july', 'august'],
        datasets: [
            {
                label: 'Clients trend',
                data: [12, 19, 3, 5, 2, 20, 10, 0],
                fill: true,
                backgroundColor: yellowbackgroundGradient,
                pointRadius: 5,
                pointBorderWidth: 2,
                tension: 0.4
            },

            {
                label: 'Revenues trend',
                data: [4500, 8900, 700, 3800, 30000, 90000, 89990, 20000],
                fill: true,
                backgroundColor: redbackgroundGradient,
                pointRadius: 5,
                pointBorderWidth: 2,
                tension: 0.4
            },

            {
                label: 'Orders trend',
                data: [20, 23, 3, 8, 2, 20, 15, 0],
                fill: true,
                backgroundColor: bluebackgroundGradient,
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
