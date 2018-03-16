import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import './StatisticDashboardPanel.css';

const statisticDashboardPanel = (props) => {
    return (
        <div className="StatisticDashboardPanel" style={{backgroundColor: props.bgColor}}>
            <div className="Statistics">
                <span className="Value">{props.value}</span>
                <span className="Caption">{props.caption}</span>
            </div>
            <div className="Action">
                <Icon type={props.icon} style={{ fontSize: '3rem', color: 'rgba(255, 255, 255, 0.8)' }} />
            </div>
        </div>
    );
}

statisticDashboardPanel.defaultProps = {
    caption: "Unnamed Panel",
    bgColor: "5d9cec",
    icon: "solution",
    loading: false
}

statisticDashboardPanel.propTypes = {
    caption: PropTypes.string,
    bgColor: PropTypes.string,
    icon: PropTypes.string,
    loading: PropTypes.bool
}

export default statisticDashboardPanel;