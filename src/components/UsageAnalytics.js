import React, { Component } from 'react'
import PropTypes from '@dhis2/prop-types'
import { connect } from 'react-redux'
import i18n from '@dhis2/d2-i18n'
import { CircularLoader, ScreenCover } from '@dhis2/ui-core'
import { LOADING, ERROR } from '../constants/statuses'
import { initApp } from '../actions'
import Error from './Error'
import FilterSideBar from './FilterSideBar'
import Chart from './Chart'
import Table from './Table'

export class UsageAnalytics extends Component {
    componentDidMount() {
        this.props.initApp()
    }

    render() {
        const { appStatus } = this.props

        if (appStatus === LOADING) {
            return (
                <ScreenCover>
                    <CircularLoader large />
                </ScreenCover>
            )
        }

        if (appStatus === ERROR) {
            return <Error message={i18n.t('Error loading application.')} />
        }

        return (
            <main className="uaa-container">
                <FilterSideBar />
                <section className="uaa-content">
                    <Chart />
                    <Table />
                </section>
            </main>
        )
    }
}

UsageAnalytics.propTypes = {
    appStatus: PropTypes.string,
    initApp: PropTypes.func,
}

const mapStateToProps = ({ appStatus }) => ({
    appStatus,
})

export default connect(mapStateToProps, {
    initApp,
})(UsageAnalytics)
