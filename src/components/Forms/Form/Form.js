import React from 'react';
import './Form.css';

const form = (props) => (
    <form className={['Form', props.className].join(' ')} onSubmit={props.onSubmitHandler}>
        <div className="Title">
            <span>{props.title}</span>
        </div>
        <div className="Content">
            {props.children}
        </div>
    </form>
);

export default form;