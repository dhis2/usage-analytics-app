import React from 'react';
import log from 'loglevel';

import HeaderBar from 'd2-ui/lib/header-bar/HeaderBar.component';
import Sidebarmenu from './Sidebarmenu';


import ReactHighcharts from 'react-highcharts';
import Client from './Client.js';


export default React.createClass({
    propTypes: {
        name: React.PropTypes.string,
        d2: React.PropTypes.object,
    },

    childContextTypes: {
        d2: React.PropTypes.object,
    },

    getChildContext() {
        return {
            d2: this.props.d2,
        };
    },

    render()
    {

        return (
            <div className="app-wrapper">
                <HeaderBar />
                <Sidebarmenu
                />
                <div className="main-content">
                    <Client source="http://localhost:8080/api/dataStatistics.json?startDate=2014-01-01&endDate=2017-12-31&interval=YEAR"/>
                </div>
            </div>
        );
    }
});



