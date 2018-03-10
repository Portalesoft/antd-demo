import React from 'react';
import PropTypes from 'prop-types';
import { Spin, Row, Col, Icon } from 'antd';
import './StatisticDashboardPanel.css';

const dashboardPanel = (props) => {
    return (
        <div className="StatisticDashboardPanel" style={{backgroundColor: props.bgColor}}>
            <Row>
                <Col span={8}>
                    <Icon type={props.icon} style={{ fontSize: '3rem', color: 'rgba(255, 255, 255, 0.8)', marginTop: '0.75rem' }} />
                </Col>
                <Col span={16}>
                    <div className="Header">
                        <div className="NumberDisplay">
                            <span className="Value">
                                {props.value}
                            </span>
                        </div>
                        {props.loading ? <Spin /> : null}
                    </div>
                    <div className="Content">
                        <h2>
                            {props.caption}
                        </h2>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

dashboardPanel.defaultProps = {
    caption: "Unnamed Panel",
    bgColor: "5d9cec",
    icon: "solution",
    loading: false
}

dashboardPanel.propTypes = {
    caption: PropTypes.string,
    bgColor: PropTypes.string,
    icon: PropTypes.string,
    loading: PropTypes.bool
}

export default dashboardPanel;