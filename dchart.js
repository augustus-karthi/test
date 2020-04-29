import React from 'react';
import { Doughnut, Chart } from 'react-chartjs-2';

const data = {
    labels: [
        'Red',
        'Green',
        'Yellow'
    ],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ]
    }]
};

export default class DChart extends React.Component {

    componentWillMount() {
        Chart.pluginService.register({
            beforeDraw: function (chart) {
                if (chart && chart.config && chart.config.type == 'doughnut') {

                    var width = chart.chart.width,
                        height = chart.chart.height,
                        ctx = chart.chart.ctx;

                    console.log("c =" + Object.keys(chart));
                    console.log("c.c =" + Object.keys(chart.chart));
                    console.log("c.id = " + chart.id);
                    console.log("c.id = " + chart.type);
                    console.log("c.id = " + chart.config.type);

                    ctx.restore();
                    var fontSize = (height / 114).toFixed(2);
                    ctx.font = fontSize + "em sans-serif";
                    ctx.textBaseline = "middle";

                    var text = "75",
                        textX = Math.round((width - ctx.measureText(text).width) / 2),
                        textY = height / 2;

                    ctx.fillText(text, textX, textY);
                    ctx.font = fontSize/2 + "em sans-serif";
                    ctx.fillText('Errors', textX, textY + 50);
                    ctx.save();

                }

            }
        });
    }

    render() {
        return (
            <div>
                <h2>Doughnut Example</h2>
                <Doughnut id="donut_char" height={50} data={data} options={
                    {
                        cutoutPercentage: 75,
                        legend: {
                            display: false
                        },
                        tooltips: {
                            enabled: false
                        },

                    }
                } />
            </div>
        );
    }
}