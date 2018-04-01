import React, { Component } from 'react';
import HelpForm from '../HelpForm/HelpForm';
import Aux from 'react-aux';
import { Button } from 'antd';

import './HelpButton.css';

class HelpButton extends Component {

    state = {
        displayForm: false
    }

    onClickHandler = () => {
        this.setState({ displayForm: true });
    }    

    onCloseHandler = () => {
        this.setState({ displayForm: false });
    }
    
    render () {
        return (
            <Aux>
                <HelpForm visible={this.state.displayForm} closed={this.onCloseHandler} />
                <div className="HelpButton">
                    <Button 
                        type="primary" 
                        icon="question-circle-o" 
                        size="large" 
                        onClick={this.onClickHandler}>
                            Help
                    </Button>
                </div>
            </Aux>
        );
    }
}

export default HelpButton;