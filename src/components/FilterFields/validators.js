import moment from 'moment'
import i18n from '@dhis2/d2-i18n'

// The expected date format
const expectedFormat = 'YYYY-MM-DD'

// Validates a start date, compared to an end date
export const validateStartDate = (startDate, endDate) => {
    const startMoment = moment(startDate, expectedFormat)
    const endMoment = moment(endDate, expectedFormat)

    if (startMoment.isAfter(endMoment)) {
        return i18n.t('Start date should be before end date')
    }

    return ''
}

// Validates an end date, compared to a start date
export const validateEndDate = (startDate, endDate) => {
    const startMoment = moment(startDate, expectedFormat)
    const endMoment = moment(endDate, expectedFormat)

    if (endMoment.isBefore(startMoment)) {
        return i18n.t('End date should be after start date')
    }

    return ''
}

// Validates a single date
export const validateDate = date => {
    if (!date) {
        return i18n.t('Please fill in a date')
    }

    const dateMoment = moment(date, expectedFormat, true)

    if (!dateMoment.isValid()) {
        return i18n.t('Please use the format yyyy-mm-dd')
    }

    return ''
}
