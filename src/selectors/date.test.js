import { YEAR, MONTH, WEEK, DAY } from '../constants/intervals.js'
import { getIntervalDate } from './date.js'

describe('getIntervalDate', () => {
    it('returns the expected string for the YEAR interval', () => {
        const actual = getIntervalDate({ year: 2000 }, YEAR)

        expect(actual).toBe('2000')
    })

    it('returns the expected string for the MONTH interval', () => {
        const actual = getIntervalDate({ year: 2000, month: 1 }, MONTH)

        expect(actual).toBe('Jan 2000')
    })

    it('returns the expected string for the WEEK interval', () => {
        const actual = getIntervalDate({ year: 2000, week: 1 }, WEEK)

        expect(actual).toBe('Week 1 / 2000')
    })

    it('returns the expected string for the DAY interval', () => {
        const actual = getIntervalDate({ year: 2000, month: 2, day: 3 }, DAY)

        expect(actual).toBe('Feb 3, 2000')
    })
})
