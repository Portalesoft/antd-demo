import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AutoReload extends Component {

    // Older way of creating state and class objects, just here for reference purposes
    constructor(props) {
        super(props);
        this.previousHash = null;
        this.state = {
            codeHasChanged: false,
        };
        this.fetchSource = this.fetchSource.bind(this);
    }

    componentDidMount() {
        const { tryDelay } = this.props;
        this.fetchSource();
        this.interval = setInterval(this.fetchSource, tryDelay);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    fetchSource() {

        // Ensure we don't receive a cache of the index file!
        const myHeaders = new Headers();
        myHeaders.append('pragma', 'no-cache');
        myHeaders.append('cache-control', 'no-cache');
        
        const myInit = {
          method: 'GET',
          headers: myHeaders,
        };

        // The index file is so small it's an ideal hash target for our app ...
        return fetch(this.props.url, myInit)
            .then(response => {
                if (response.status !== 200) {
                    throw new Error('offline');
                }
                return response.text();
            })
            .then(html => {
                const hash = this.hash(html);
                console.log('Hashing Index File:', hash);
                if (!this.previousHash) {
                    this.previousHash = hash;
                    return;
                }
                if (this.previousHash !== hash) {
                    this.previousHash = hash;
                    this.setState({ codeHasChanged: true });
                }
            })
            .catch(() => { /* do nothing */ });

    }

    // http://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript-jquery/7616484#7616484
    hash(str) {
        const len = str.length;
        let hash = 0;
        if (len === 0) return hash;
        let i;
        for (i = 0; i < len; i++) {
            hash = ((hash << 5) - hash) + str.charCodeAt(i);
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    }

    reloadApp(e) {
        e.preventDefault();
        window.location.reload(true);
    }

    render() {
        if (!this.state.codeHasChanged) return null;
        const style = {
            position: 'absolute',
            top: 10,
            right: 10,
            padding: '1em',
            zIndex: 1050,
            backgroundColor: 'bisque',
            borderRadius: 5,
            textAlign: 'center',
        };
        return (
            <div style={style}>
                <div>New version available for</div>
                <div>{this.props.title}</div>
                <div><a href="" onClick={this.reloadApp}>Click to reload</a></div>
            </div>
        );
    }
}

AutoReload.propTypes = {
    url: PropTypes.string.isRequired,
    tryDelay: PropTypes.number.isRequired
};

AutoReload.defaultProps = {
    url: '/',
    tryDelay: 5 * 60 * 1000
};

export default AutoReload;