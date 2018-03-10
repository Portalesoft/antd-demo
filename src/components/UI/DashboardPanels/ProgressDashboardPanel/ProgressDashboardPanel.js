import React from 'react';
import PropTypes from 'prop-types';
import { Progress } from 'antd';
import './ProgressDashboardPanel.css';

const progressDashboardPanel = (props) => {
    return (
        <div className="ProgressDashboardPanel">
            <div className="Header">
                <span>{props.caption}</span>
            </div>
            <div className="Content">
            <Progress type="dashboard" percent={props.value} format={percent => `${percent}%`}/>
            </div>
            <div className="Footer">
                <span>{props.description}</span>
            </div>
        </div>
    );
}

progressDashboardPanel.defaultProps = {
    caption: "Unnamed Panel",
    percent: 0,
    description: ""
}

progressDashboardPanel.propTypes = {
    caption: PropTypes.string,
    percent: PropTypes.number,
    description: PropTypes.string
}

export default progressDashboardPanel;