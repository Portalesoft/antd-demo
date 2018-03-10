import React from 'react';
import adjunoLogo from '../../assets/images/adjuno.png';
import './Logo.css';

const logo = (props) => (
    <div  className="Logo">
        <img src={adjunoLogo} alt="Adjuno React Demo"/>
    </div>
);

export default logo;