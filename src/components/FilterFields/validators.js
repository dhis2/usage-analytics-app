import i18n from '@dhis2/d2-i18n'
import moment from 'moment'

// The expected date format
const expectedFormat = 'YYYY-MM-DD'

// Validates two dates compared to eachother
export const validateDateRange = (startDate, endDate) => {
    const startMoment = moment(startDate, expectedFormat)
    const endMoment = moment(endDate, expectedFormat)

    if (startMoment.isAfter(endMoment)) {
        return i18n.t('Start date should be before end date')
    }

    return ''
}

// Validates a single date
export const validateDate = (date) => {
    if (!date) {
        return i18n.t('Please fill in a date')
    }

    // The 'true' flag ensures strict validation of the expected format
    const dateMoment = moment(date, expectedFormat, true)

    if (!dateMoment.isValid()) {
        return i18n.t('Please use the format yyyy-mm-dd')
    }

    return ''
}
