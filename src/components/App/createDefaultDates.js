import moment from 'moment'

/**
 * This creates the default start and end dates for the app state. The format
 * is YYYY-MM-DD because that's what a date input expects, and that's what these
 * dates will be used for.
 * The default is to have the end date be now, and the start date 4 months before
 * that.
 */

const createDefaultDates = () => {
    const format = 'YYYY-MM-DD'

    const initialStartDate = moment()
        .subtract(4, 'months')
        .format(format)
    const initialEndDate = moment().format(format)

    return { initialStartDate, initialEndDate }
}

export default createDefaultDates
