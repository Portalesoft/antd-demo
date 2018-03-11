import React from 'react';
import ToolbarItems from './ToolbarItems/ToolbarItems'; 
import './Toolbar.css';

const toolbar = (props) => (
    <div className="Toolbar">
        <ToolbarItems menuHandler={props.menuHandler}/>
        <span className="Title">{props.title}</span>
    </div>
);

export default toolbar;