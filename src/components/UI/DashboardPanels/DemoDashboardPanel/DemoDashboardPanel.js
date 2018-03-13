import React from 'react';
import DashboardPanel from '../DashboardPanel';
import AmCharts from '@amcharts/amcharts3-react';

const demoDashboardPanel = (props) => {

    const config = {
        "theme": "light",
        "type": "serial",
        "dataProvider": [{
            "country": "USA",
            "year2016": 3.5,
            "year2017": 4.2
        }, {
            "country": "UK",
            "year2016": 1.7,
            "year2017": 3.1
        }, {
            "country": "Canada",
            "year2016": 2.8,
            "year2017": 2.9
        }, {
            "country": "Japan",
            "year2016": 2.6,
            "year2017": 2.3
        }, {
            "country": "France",
            "year2016": 1.4,
            "year2017": 2.1
        }, {
            "country": "Brazil",
            "year2016": 2.6,
            "year2017": 4.9
        }, {
            "country": "Russia",
            "year2016": 6.4,
            "year2017": 7.2
        }, {
            "country": "India",
            "year2016": 8,
            "year2017": 7.1
        }, {
            "country": "China",
            "year2016": 9.9,
            "year2017": 10.1
        }],
        "valueAxes": [{
            "stackType": "3d",
            "unit": "%",
            "position": "left",
        }],
        "startDuration": 0.2,
        "graphs": [{
            "balloonText": "[[category]] (2016): <b>[[value]]</b>",
            "fillAlphas": 0.6,
            "lineAlpha": 0.2,
            "title": "2016",
            "type": "column",
            "valueField": "year2016"
        }, {
            "balloonText": "[[category]] (2017): <b>[[value]]</b>",
            "fillAlphas": 0.9,
            "lineAlpha": 0.2,
            "title": "2017",
            "type": "column",
            "valueField": "year2017"
        }],
        "plotAreaFillAlphas": 0.1,
        "depth3D": 60,
        "angle": 30,
        "categoryField": "country",
        "categoryAxis": {
            "gridPosition": "start"
        },
        "export": {
            "enabled": true
         }
    };        

    return (
        <DashboardPanel heading={props.heading} loading={props.loading}>
            <AmCharts.React style={{width: "100%", height: "200px"}} options={config} />
        </DashboardPanel>
    );

}

export default demoDashboardPanel;