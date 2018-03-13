import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import TicketsDashboardPanel from '../../components/UI/DashboardPanels/TicketsDashboardPanel/TicketsDashboardPanel';
import DemoDashboardPanel from '../../components/UI/DashboardPanels/DemoDashboardPanel/DemoDashboardPanel';
import StatisticDashboardPanel from '../../components/UI/DashboardPanels/StatisticDashboardPanel/StatisticDashboardPanel';
import ProgressDashboardPanel from '../../components/UI/DashboardPanels/ProgressDashboardPanel/ProgressDashboardPanel';

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
                <Row type="flex" gutter={16}>
                    <Col span={24} sm={{ span: 8 }}>
                        <StatisticDashboardPanel caption="Open Tickets" value={this.props.statisticsData.openTickets} icon="solution" bgColor="#5d9cec" />
                    </Col>
                    <Col span={24} sm={{ span: 8 }}>
                        <StatisticDashboardPanel caption="Tickets Today" value={this.props.statisticsData.ticketsToday} icon="customer-service" bgColor="#37bc9b" />
                    </Col>
                    <Col span={24} sm={{ span: 8 }}>
                        <StatisticDashboardPanel caption="Urgent Tickets" value={this.props.statisticsData.urgentTickets} icon="exception" bgColor="#7266ba" />
                    </Col>       
                </Row>            
                <Row type="flex" gutter={16}>
                    <Col span={24} sm={{ span: 8 }}>
                        <ProgressDashboardPanel caption="4 Hour Response %" description="This Week: 278 Support Calls" value={this.props.progressData.response} />
                    </Col>
                    <Col span={24} sm={{ span: 16 }}>
                        <DemoDashboardPanel heading="Support Call Origins" />
                    </Col>
                </Row>
                <Row type="flex" gutter={16}>
                    <Col span={24} sm={{ span: 8 }}>
                        <ProgressDashboardPanel caption="7 Day Solved %" description="This Week: 154 Support Tickets" value={this.props.progressData.solved} />
                    </Col>
                    <Col span={24} sm={{ span: 16 }}>
                        <TicketsDashboardPanel heading="Tickets Over Time" data={this.props.ticketsChartData} loading={this.props.ticketsChartDataLoading} />
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
        progressData: state.dashboard.progressData,
        statisticsData: state.dashboard.statisticsData,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        startDashboardSync: () => dispatch(actions.dashboardSyncStart()),
        stopDashboardSync: () => dispatch(actions.dashboardSyncStop())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);