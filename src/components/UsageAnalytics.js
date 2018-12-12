import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { initApp } from '../actions'
import CircularProgress from 'ui/core/CircularProgress'

class UsageAnalytics extends Component {
    componentDidMount() {
        this.props.initApp()
    }

    render() {
        return <CircularProgress />
    }
}

UsageAnalytics.propTypes = {
    initApp: PropTypes.func,
    appState: PropTypes.string,
}

const mapStateToProps = ({ appState }) => ({
    appState,
})

export default connect(
    mapStateToProps,
    {
        initApp,
    }
)(UsageAnalytics)
