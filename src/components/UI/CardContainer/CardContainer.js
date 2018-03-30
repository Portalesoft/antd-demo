import React from 'react';

import './CardContainer.css';

const cardContainer = (props) => (
    <div className="CardContainer">
        {props.children}
    </div>
)

export default cardContainer;