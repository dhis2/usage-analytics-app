import { validateDate, validateDateRange } from '../FilterFields/index.js'

/**
 * This is used to check whether the dates are valid, so that we can fetch
 * new data. We're reusing the validators from the FilterFields.
 */

export const validateDates = (startDate, endDate) => {
    const hasStartDateError = !!validateDate(startDate)
    const hasEndDateError = !!validateDate(endDate)
    const hasRangeError = !!validateDateRange(startDate, endDate)
    const hasErrors = hasStartDateError || hasEndDateError || hasRangeError

    // Return `true` if dates are valid, `false` if they are invalid
    return !hasErrors
}
