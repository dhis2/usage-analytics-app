import React, { Component } from 'react'
import PropTypes from 'prop-types'
import i18n from '@dhis2/d2-i18n'
import './DateField.css'

// Very basic date input. If browser doesn't support input type date,
// it will use the pattern validation to display an error
class DateField extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: props.initialValue,
            error: null,
        }
        this.onChange = this.onChange.bind(this)
    }

    shouldComponentUpdate(nextProps) {
        if (
            nextProps.initialValue !== this.props.initialValue &&
            this.state.value === nextProps.initialValue
        ) {
            return false
        }

        return true
    }

    onChange(event) {
        const value = event.target.value
        const error = this.getError(value)

        this.setState({ value, error })

        if (!error) {
            this.props.onChange(this.props.name, value)
        }
    }

    getError(value) {
        const { startDate, endDate } = this.props

        console.log('value, start, end\n', value, startDate, endDate)

        if (!/[0-9]{4}-[0-9]{2}-[0-9]{2}/.test(value)) {
            return i18n.t('Please use the format yyyy-mm-dd')
        }

        if (startDate && value < startDate) {
            return i18n.t('End date is before start date')
        }

        if (endDate && value > endDate) {
            return i18n.t('Start date is before end date')
        }
    }

    render() {
        const { label } = this.props
        const { error, value } = this.state
        return (
            <div className="uaa-date-field">
                <label>{label}</label>
                <input type="date" value={value} onChange={this.onChange} />
                {error && <span className="uaa-date-input-error">{error}</span>}
            </div>
        )
    }
}

DateField.propTypes = {
    label: PropTypes.string.isRequired,
    initialValue: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    onChange: PropTypes.func.isRequired,
}

export default DateField
