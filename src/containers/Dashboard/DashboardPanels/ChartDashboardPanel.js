import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import DashboardPanel from '../../../components/UI/DashboardPanels/DashboardPanel';

class ChartDashboardPanel extends Component {

    state = {
        values: {
            labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
            datasets: []
        },
        chartOptions: {
            responsive: true,
            maintainAspectRatio: false,
            scaleShowGridLines: false,
            scales: {
                xAxes: [{
                    ticks: {
                        fontFamily: "'Open Sans', sans-serif",
                        fontSize: 14,
                        fontColor: "#656b6f",
                    },
                    gridLines: {
                        display: false
                    }
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        fontFamily: "'Open Sans', sans-serif",
                        fontSize: 14,
                        fontColor: "#656b6f",
                    },
                    gridLines: {
                        display: false
                    }
                }],
            },
            legend: {
                display: false
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.data !== nextProps.data) {
            this.generateDatasets(nextProps);
        }
    }

    // Convert the data received in props to a format the graphing component likes
    generateDatasets(props) {

        // Create a dataset object that Chart.js to understand
        let datasets = [];
        props.data.forEach(function (data) {
            datasets.push({
                label: data.label,
                data: data.data,
                fill: false,
                tension: 0,
                borderColor: data.color,
                borderWidth: 4,
                pointRadius: 0,
                pointHitRadius: 10
            });
        }, this);

        // Let the React wrapper for Chart.js update the view
        this.setState({
            values: {
                datasets: datasets
            }
        });
        
    }

    render() {
        return (
            <DashboardPanel heading={this.props.heading} loading={this.props.loading}>
                <Line data={this.state.values} options={this.state.chartOptions} />
            </DashboardPanel>
        );
    }

}

export default ChartDashboardPanel;