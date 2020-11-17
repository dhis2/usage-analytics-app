import createDefaultDates from './createDefaultDates.js'

/**
 * Lock Date.now to "October 10th 2010, 12:00:00"
 */

const now = new Date('2010-10-10T12:00:00').valueOf()

describe('createDefaultDates', () => {
    it('returns the expected initialStartDate and initialEndDate', () => {
        jest.spyOn(global.Date, 'now').mockImplementation(() => now)

        const { initialStartDate, initialEndDate } = createDefaultDates()

        expect(initialStartDate).toBe('2010-06-10')
        expect(initialEndDate).toBe('2010-10-10')
    })
})
