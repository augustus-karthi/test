import React from 'react';

import { HorizontalBar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
require('./rounded-bar.js');


const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,99,132,1)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,1)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56]
        }
    ]
};

export default class BarExample extends React.Component {


    render() {
        return (
            <div>
                <h2>Horizontal Bar Example</h2>
                <HorizontalBar height={50} data={data} options={
                    {
                        scales: {
                            xAxes: [{
                                gridLines: {
                                    display: false
                                },
                                ticks: {
                                    display: false //this will remove only the label
                                }
                            }],
                            yAxes: [{
                                gridLines: {
                                    display: false
                                }
                            }]
                        },
                        legend: {
                            display: false
                        },
                        tooltips: {
                            enabled: false
                        },
                        cornerRadius: 10,
                        plugins: {
                            datalabels: {
                                align: 'end',
                                anchor: 'end',
                                color: '#000000',
                                font: {
                                    weight: 'bold',
                                    size: 14,
                                },
                                formatter: function (value, context) {
                                    return value + '%';
                                },
                            },
                        }
                    }
                } />
            </div>
        );
    }
}