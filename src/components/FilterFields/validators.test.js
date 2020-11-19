import {
    validateStartDate,
    validateEndDate,
    validateDate,
} from './validators.js'

describe('validators', () => {
    describe('validateStartDate', () => {
        it('returns the expected message if the start date is after the end date', () => {
            const startDate = '2010-01-01'
            const endDate = '2000-01-01'

            expect(validateStartDate(startDate, endDate)).toMatchInlineSnapshot(
                `"Start date should be before end date"`
            )
        })

        it('returns an empty string if the start date is before the end date', () => {
            const startDate = '2000-01-01'
            const endDate = '2010-01-01'

            expect(validateStartDate(startDate, endDate)).toBe('')
        })

        it('returns an empty string if the start date is equal to the end date', () => {
            const startDate = '2000-01-01'
            const endDate = startDate

            expect(validateStartDate(startDate, endDate)).toBe('')
        })
    })

    describe('validateEndDate', () => {
        it('returns the expected message if the end date is before the start date', () => {
            const startDate = '2010-01-01'
            const endDate = '2000-01-01'

            expect(validateEndDate(startDate, endDate)).toMatchInlineSnapshot(
                `"End date should be after start date"`
            )
        })

        it('returns an empty string if the end date is after the start date', () => {
            const startDate = '2000-01-01'
            const endDate = '2010-01-01'

            expect(validateEndDate(startDate, endDate)).toBe('')
        })

        it('returns an empty string if the end date is equal to the start date', () => {
            const endDate = '2000-01-01'
            const startDate = endDate

            expect(validateEndDate(startDate, endDate)).toBe('')
        })
    })

    describe('validateDate', () => {
        it('returns the expected message if there is no date', () => {
            expect(validateDate('')).toMatchInlineSnapshot(
                `"Please fill in a date"`
            )
            expect(validateDate()).toMatchInlineSnapshot(
                `"Please fill in a date"`
            )
        })

        it('returns the expected message if the date is not valid', () => {
            expect(validateDate('invalid')).toMatchInlineSnapshot(
                `"Please use the format yyyy-mm-dd"`
            )
            expect(validateDate('01-01-2000')).toMatchInlineSnapshot(
                `"Please use the format yyyy-mm-dd"`
            )
            expect(validateDate('2000-19-01')).toMatchInlineSnapshot(
                `"Please use the format yyyy-mm-dd"`
            )
        })

        it('returns an empty string if the date is valid', () => {
            expect(validateDate('2000-11-29')).toBe('')
        })
    })
})
