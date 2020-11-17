import moment from 'moment'

/**
 * This creates the default start and end dates for the app state. The format
 * is YYYY-MM-DD because that's what a date input expects, and that's what these
 * dates will be used for.
 *
 * The default is to have the end date at the current time, and the start date
 * 4 months before that.
 */

const createDefaultDates = () => {
    const now = Date.now()
    const format = 'YYYY-MM-DD'

    const initialStartDate = moment(now)
        .subtract(4, 'months')
        .format(format)
    const initialEndDate = moment(now).format(format)

    return { initialStartDate, initialEndDate }
}

export default createDefaultDates
