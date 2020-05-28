import * as get from './get'
import api from './index'
import { TOP_FAVORITES } from '../constants/categories'

beforeAll(() => {
    get.getJSON = jest.fn()
    Date.now = jest.fn(() => 'timestamp')
    api.setBaseUrl('baseUrl')
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
        get.getJSON.mockImplementationOnce((_baseUrl, url) =>
            Promise.resolve(url)
        )

        return expect(api.getFavorites(params)).resolves.toMatchSnapshot()
    })
})

describe('getDataStatistics', () => {
    it('calls getJSON with the correct URL and queryString', () => {
        const params = {
            startDate: 'startDate',
            endDate: 'endDate',
            interval: 'interval',
        }
        get.getJSON.mockImplementationOnce((_baseUrl, url) =>
            Promise.resolve(url)
        )

        return expect(api.getDataStatistics(params)).resolves.toMatchSnapshot()
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
        get.getJSON.mockImplementationOnce((_baseUrl, url) =>
            Promise.resolve(url)
        )

        return expect(api.getUsageData(params)).resolves.toMatchSnapshot()
    })

    it('calls getJSON with the correct URL and queryString in other cases', () => {
        const params = {
            startDate: 'startDate',
            endDate: 'endDate',
            interval: 'interval',
        }
        get.getJSON.mockImplementationOnce((_baseUrl, url) =>
            Promise.resolve(url)
        )

        return expect(api.getUsageData(params)).resolves.toMatchSnapshot()
    })
})
