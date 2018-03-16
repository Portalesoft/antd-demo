import React from 'react';
import DashboardPanel from '../DashboardPanel';
import AmCharts from '@amcharts/amcharts3-react';

const ticketsDashboardPanel = (props) => {

    const config = {
        "type": "serial",
        "addClassNames": true,
        "theme": "light",
        "autoMargins": false,
        "marginLeft": 30,
        "marginRight": 8,
        "marginTop": 10,
        "marginBottom": 26,
        "balloon": {
        "adjustBorderColor": false,
        "horizontalPadding": 10,
        "verticalPadding": 8,
        "color": "#ffffff"
        },
        "dataProvider": props.data,
        "valueAxes": [ {
        "axisAlpha": 0,
        "position": "left"
        } ],
        "startDuration": 0.4,
        "graphs": [ {
            "alphaField": "alpha",
            "balloonText": "<span style='font-size:12px;'>[[title]] on [[category]]:<br><span style='font-size:20px;'>[[value]]</span> [[additional]]</span>",
            "fillAlphas": 1,
            "title": "Closed Tickets",
            "type": "column",
            "valueField": "closedTickets",
            "dashLengthField": "dashLengthColumn"
        }, {
            "id": "graph2",
            "balloonText": "<span style='font-size:12px;'>[[title]] on [[category]]:<br><span style='font-size:20px;'>[[value]]</span> [[additional]]</span>",
            "bullet": "round",
            "lineThickness": 3,
            "bulletSize": 7,
            "bulletBorderAlpha": 1,
            "bulletColor": "#FFFFFF",
            "useLineColorForBulletBorder": true,
            "bulletBorderThickness": 3,
            "fillAlphas": 0,
            "lineAlpha": 1,
            "title": "Opened Tickets",
            "valueField": "openedTickets",
            "dashLengthField": "dashLengthLine"
        } ],
        "categoryField": "day",
        "categoryAxis": {
        "gridPosition": "start",
        "axisAlpha": 0,
        "tickLength": 0
        },
        "export": {
            "enabled": false
        }
    };        

    return (
        <DashboardPanel heading={props.heading} loading={props.loading}>
            <AmCharts.React style={{width: "100%", height: "200px"}} options={config} />
        </DashboardPanel>
    );

}

export default ticketsDashboardPanel;