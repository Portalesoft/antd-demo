import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import ChartDashboardPanel from './DashboardPanels/ChartDashboardPanel';
import StatisticDashboardPanel from '../../components/UI/DashboardPanels/StatisticDashboardPanel/StatisticDashboardPanel';

import * as actions from '../../store/actions';
import './Dashboard.css';

class Dashboard extends Component {

    componentDidMount() {
        this.props.startDashboardSync();
    }

    componentWillUnmount() {
        this.props.stopDashboardSync();
    }

    render() {
        return (
            <div className="Dashboard">
                <Row gutter={16}>
                    <Col span={24} sm={{ span: 8 }}>
                        <StatisticDashboardPanel caption="Open Tickets" value="24" icon="solution" bgColor="#5d9cec" />
                    </Col>
                    <Col span={24} sm={{ span: 8 }}>
                        <StatisticDashboardPanel caption="Tickets Today" value="10" icon="customer-service" bgColor="#37bc9b" />
                    </Col>
                    <Col span={24} sm={{ span: 8 }}>
                        <StatisticDashboardPanel caption="Urgent Tickets" value="4" icon="exception" bgColor="#7266ba" />
                    </Col>       
                </Row>            
                <Row gutter={16}>
                    <Col span={24} sm={{ span: 12 }}>
                        <ChartDashboardPanel heading="Support Calls Over Time" data={this.props.supportCallsChartData} loading={this.props.supportCallsChartDataLoading} />
                    </Col>
                    <Col span={24} sm={{ span: 12 }}>
                        <ChartDashboardPanel heading="Tickets Over Time" data={this.props.ticketsChartData} loading={this.props.ticketsChartDataLoading} />
                    </Col>
                </Row>
            </div>    
        );
    };

}

const mapStateToProps = state => {
    return {
        ticketsChartData: state.dashboard.ticketsChartData,
        ticketsChartDataLoading: state.dashboard.ticketsChartData.length === 0,
        supportCallsChartData: state.dashboard.supportCallsChartData,
        supportCallsChartDataLoading: state.dashboard.supportCallsChartData.length === 0
    };
}

const mapDispatchToProps = dispatch => {
    return {
        startDashboardSync: () => dispatch(actions.dashboardSyncStart()),
        stopDashboardSync: () => dispatch(actions.dashboardSyncStop())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);