import React, { Component } from 'react';
import { message } from 'antd';

const withErrorHandler = ( WrappedComponent, axios ) => {

    return class extends Component {

        state = {
            error: null
        }

        // We need to use componentWillMount, which is called before children are mounted

        componentWillMount() {
            this.requestInterceptor = axios.interceptors.request.use(request => {
                this.setState({error: null});    
                return request;            
            })
            this.responseInterceptor = axios.interceptors.response.use(res => res, error => {

                // If we have no response object this is a network error so use a simple alert
                if (!error.response) {
                    message.error(error.message);
                } 
                else {
                    this.setState({error: error});
                }

            });
        }

        // Executed when a component is not required anymore. It's essential to 
        // release the interceptors at this point in order to prevent memory leaks!

        componentWillUnmount() {
            axios.interceptors.request.eject(this.requestInterceptor);
            axios.interceptors.response.eject(this.responseInterceptor);
        }

        render() {
            return (                
                <WrappedComponent error={this.state.error} {...this.props} />
            );
        }

    }

}

export default withErrorHandler;