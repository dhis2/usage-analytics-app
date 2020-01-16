import React, { Component } from 'react'
import PropTypes from '@dhis2/prop-types'
import i18n from '@dhis2/d2-i18n'
import { InputField } from '@dhis2/ui-core'
import debounce from 'lodash.debounce'
import './DateRange.css'

export const START_DATE = 'startDate'
export const END_DATE = 'endDate'
export const ERROR_PATTERN = i18n.t('Please use the format yyyy-mm-dd')
export const ERROR_MISSING_DATE = i18n.t('Please fill in both dates')
export const ERROR_END_BEFORE_START = i18n.t('End date is before start date')
export const ERROR_START_AFTER_END = i18n.t('Start date is after end date')

// Very basic date input. If browser doesn't support input type date,
// it will use the pattern validation to display an error
class DateRange extends Component {
    constructor(props) {
        super(props)
        this.state = {
            startDateError: null,
            endDateError: null,
        }
        this.onStartDateChange = this.onStartDateChange.bind(this)
        this.onEndDateChange = this.onEndDateChange.bind(this)
        this.updateUsageData = debounce(props.updateUsageData, 250)
    }

    onStartDateChange({ value }) {
        this.onChange(START_DATE, value)
    }

    onEndDateChange({ value }) {
        this.onChange(END_DATE, value)
    }

    onChange(key, value) {
        const { updateFilter, ...dateRange } = this.props
        const errorKey = `${key}Error`
        const otherErrorKey =
            key === START_DATE ? `${END_DATE}Error` : `${START_DATE}Error`
        const error = this.getError({ ...dateRange, [key]: value }, key)
        const otherError =
            this.state[otherErrorKey] === ERROR_PATTERN ? ERROR_PATTERN : null

        if (this.state[errorKey] !== error) {
            this.setState({
                [errorKey]: error,
                [otherErrorKey]: otherError,
            })
        }

        updateFilter(key, value)

        if (!error) {
            this.updateUsageData()
        }
    }

    getError(dateRange, key) {
        if (!/[0-9]{4}-[0-9]{2}-[0-9]{2}/.test(dateRange[key])) {
            return ERROR_PATTERN
        }

        if (!dateRange.startDate || !dateRange.endDate) {
            return ERROR_MISSING_DATE
        }

        if (dateRange.endDate < dateRange.startDate) {
            return key === START_DATE
                ? ERROR_START_AFTER_END
                : ERROR_END_BEFORE_START
        }

        return null
    }

    render() {
        const { startDate, endDate } = this.props
        const { startDateError, endDateError } = this.state

        return (
            <div className="uaa-date-range">
                <InputField
                    label={i18n.t('Start Date')}
                    type="date"
                    value={startDate}
                    onChange={this.onStartDateChange}
                    error={!!startDateError}
                    validationText={startDateError}
                    name={START_DATE}
                    className={START_DATE}
                    dataTest="uaa-startdate"
                />
                <InputField
                    label={i18n.t('End Date')}
                    type="date"
                    value={endDate}
                    onChange={this.onEndDateChange}
                    error={!!endDateError}
                    validationText={endDateError}
                    name={END_DATE}
                    className={END_DATE}
                    dataTest="uaa-enddate"
                />
            </div>
        )
    }
}

DateRange.propTypes = {
    updateFilter: PropTypes.func.isRequired,
    updateUsageData: PropTypes.func.isRequired,
    endDate: PropTypes.string,
    startDate: PropTypes.string,
}

export default DateRange
