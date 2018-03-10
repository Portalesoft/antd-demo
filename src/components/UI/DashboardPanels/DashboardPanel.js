import React from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import './DashboardPanel.css';

const dashboardPanel = (props) => {
    return (
        <div className="DashboardPanel">
            <div className="Header">
                <h2>
                    {props.heading}
                </h2>
                {props.loading ? <Spin /> : ""}
            </div>
            <div className="Content">
                {props.children}
            </div>
        </div>
    );
}

dashboardPanel.defaultProps = {
    heading: "Unnamed Panel"
}

dashboardPanel.propTypes = {
    heading: PropTypes.string,
    children: PropTypes.element.isRequired
}

export default dashboardPanel;