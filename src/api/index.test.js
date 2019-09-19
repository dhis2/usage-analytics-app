import * as get from './get'
import { getUsageData, getFavorites, getDataStatistics } from './index'
import { TOP_FAVORITES } from '../constants/categories'

beforeAll(() => {
    get.getJSON = jest.fn()
    Date.now = jest.fn(() => 'timestamp')
})

afterAll(() => {
    jest.resetAllMocks()
})

describe('getFavorites', () => {
    it('calls getJSON with the correct URL and queryString', () => {
        const params = {
            eventType: 'eventType',
            pageSize: 'pageSize',
            sortOrder: 'sortOrder',
        }
        get.getJSON.mockImplementationOnce(url => Promise.resolve(url))

        return expect(getFavorites(params)).resolves.toMatchSnapshot()
    })
})

describe('getDataStatistics', () => {
    it('calls getJSON with the correct URL and queryString', () => {
        const params = {
            startDate: 'startDate',
            endDate: 'endDate',
            interval: 'interval',
        }
        get.getJSON.mockImplementationOnce(url => Promise.resolve(url))

        return expect(getDataStatistics(params)).resolves.toMatchSnapshot()
    })
})

describe('getUsageData', () => {
    it('calls getJSON with the correct URL and queryString for TOP_FAVORITES category', () => {
        const params = {
            category: TOP_FAVORITES,
            eventType: 'eventType',
            pageSize: 'pageSize',
            sortOrder: 'sortOrder',
        }
        get.getJSON.mockImplementationOnce(url => Promise.resolve(url))

        return expect(getUsageData(params)).resolves.toMatchSnapshot()
    })

    it('calls getJSON with the correct URL and queryString in other cases', () => {
        const params = {
            startDate: 'startDate',
            endDate: 'endDate',
            interval: 'interval',
        }
        get.getJSON.mockImplementationOnce(url => Promise.resolve(url))

        return expect(getUsageData(params)).resolves.toMatchSnapshot()
    })
})
